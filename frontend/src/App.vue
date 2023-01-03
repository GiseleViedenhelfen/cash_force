<template>
  <div class="page-container">
    <navBar class="sidebar"/>
    <Table class="table"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import navBar from './components/navBar.vue';
import Table from './components/table.vue';

@Options({
  components: {
    navBar,
    Table,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.page-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 5rem 5rem 1fr;
  grid-template-areas:
  'a .'
  'a b'
  '. b';
}
.sidebar {
  grid-area: a;
  background: #FBFDFE;
}
.table {
  height:100vh;
  grid-area: b;
  background:#FFFFFF;
}
</style>
