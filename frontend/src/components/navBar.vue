<template>
  <div class="sideBar">
    <section class="logo-title">
      <div>
        <img
          src='../assets/logo/leftVector.png'
          alt="half-logo"
          class="left-logo"
        />
        <img
          src='../assets/logo/rightVector.png'
          alt="half-logo"
          class="right-logo"
        />
      </div>
      <section class="cashforce-container">
        <div>
          <img src='../assets/cashVectors/c.png' alt='c-letter'/>
          <img src='../assets/cashVectors/a.png' alt='a-letter'/>
          <img src='../assets/cashVectors/s.png' alt='s-letter'/>
          <img src='../assets/cashVectors/h.png' alt='h-letter'/>
        </div>
        <div>
          <img src='../../public/forceVectors/f.png' alt='f-letter'/>
          <img src='../../public/forceVectors/o.png' alt='o-letter'/>
          <img src='../../public/forceVectors/r.png' alt='r-letter'/>
          <img src='../../public/forceVectors/c.png' alt='c-letter'/>
          <img src='../../public/forceVectors/e.png' alt='e-letter'/>
        </div>
      </section>
    </section>
    <section class="nfContainer">
      <img src="../assets/Rectangle69.png" alt="rectangle"/>
      <div class="nfTextContainer">
        <img src="../assets/greenVector.png" alt="greenVector" height="100%"/>
        <h2>Notas fiscais</h2>
      </div>
    </section>
  </div>
</template>
<script lang="tsx">
import { Vue } from 'vue-class-component';

export default class navBar extends Vue {
}

</script>
<style scoped>
.logo-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: a;
}
.cashforce-container {
  display: flex;
}
.left-logo {
  position: absolute;
}
.right-logo {
  margin-top: 9px;
  margin-left: 10px;
}
.nfContainer {
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #00AD8C;
  align-items: center;
  grid-area: b;
  gap: 1rem;
}
.nfTextContainer {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
}
.sideBar {
  height:100vh;
  display: grid;
  grid-template-columns:1rem 1fr;
  grid-template-rows: 4rem 6rem;
  grid-template-areas:
  ' . a'
  ' b b';
}
</style>
