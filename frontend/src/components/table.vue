<template>
  <div class="table-component">
    <hr/>
    <header >
      <div class="table-header-container">
        <img src="../assets/Vector.jpg" alt="blue-logo"/>
        <h3>Notas fiscais</h3>
      </div>
      <p>Visualize as notas fiscais que você tem.</p>
    </header>
   <table>
    <thead>
      <th v-for="value in thValues" :key="value">  {{ value }}</th>
    </thead>
    <tbody>
    <tr class="tr-container"
        v-for="value, index in items"
        :key="value.nNF">
          <td>{{ value.nNF }}</td>
          <td>{{ value.sacado }}</td>
          <td>{{ value.cedente }}</td>
          <td>{{ value.emissao }}</td>
          <td class="td-green">{{ value.valor }}</td>
          <td class="td-green">{{ value.status }}</td>
          <td> <button @click="openModal(index)">Dados do cedente</button>
            <div v-if="isContentShown[index]">
              <p>{{ value.dadosDoCedente }}</p>>
            </div>
          </td>
        <!-- </div> -->
      </tr>
    </tbody>
   </table>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { reactive } from 'vue';
import axios from 'axios';

interface dataTable {
  nNF: string
  sacado: string
  cedente: string
  emissao: string
  valor: string
  status: string
  dadosDoCedente: string
}
interface Item {
  id: number
  nNF: string
  buyerId: number
  providerId: number
  emissionDate: string
  value: string
  orderStatusBuyer: string
  buyer: {
    id: number
    name: string
  }
  provider: {
    id: number
    name: string
    tradingName: string
  }
}

function fetchItems() {
  return axios.get('http://localhost:3001/infoCostumer')
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
}
export default class Table extends Vue {
 thValues = [
   'nota fiscal',
   'sacado',
   'cedente',
   'emissão',
   'valor',
   'status',
   '']

 statusValue = [
   'Pendente de confirmação',
   'Pedido confirmado',
   'Não reconhece o pedido',
   'Mercadoria não recebida',
   'Recebida com avaria',
   'Devolvida',
   'Recebida com devolução parcial',
   'Recebida e confirmada',
   'Pagamento Autorizado']

 items = reactive<dataTable[]>([])

 async created() {
   const getData = await fetchItems();
   const mapResults = getData.map((item:Item) => {
     const formatedResult = {
       nNF: item.nNF,
       sacado: item.buyer.name,
       cedente: item.provider.name,
       emissao: new Date(item.emissionDate).toLocaleDateString(),
       valor: Number(item.value)
         .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
       status: this.statusValue[Number(item.orderStatusBuyer)],
       dadosDoCedente: item.provider.tradingName,
     };
     return formatedResult;
   });
   this.items = mapResults;
 }

 isContentShown = Array.from(this.items, () => false);

 openModal(index:number) {
   this.isContentShown[index] = !this.isContentShown[index];
 }
}
</script>
<style scoped>

.table-header-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 4rem;
}
.table-header-container h3 {
  margin: 0;
  width: 149px;
  height: 28px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #021B51;
}
table {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-left: 4rem;
  margin-right: 4rem;
  border-collapse: separate;
  border-spacing: 0 1rem;
}
thead {
  font-size: 12px;
  line-height: 16px;
}
th {
  text-align: start;
  text-transform: uppercase;
  width: 10rem;
  color: #A1A8B8;
}

p {
  margin-left: 4rem;
  color: #727D94;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
td {
  text-align: start;
  color: #4D5566;
  padding: 0.3rem 0;
}
td:nth-child(1) {
  padding-left: 2rem;
}
th:nth-child(1) {
  padding-left: 2rem;
}
.td-green {
  color: #00AD8C;
  text-transform: uppercase;
}
td button {
  width: 10rem;
  margin-right: 1rem;
}
button {
  width: 10rem;
  margin-right: 1rem;
  box-sizing: border-box;
  color: #727D94;
  background: #FFFFFF;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  border: 1px solid #DFE2EB;

}
.table-component {
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0px 0px 15px;
}

.tr-container {
  border-radius: 6px;
  box-shadow:0px 0px 1px 1px #DFE2EB;
}
</style>
