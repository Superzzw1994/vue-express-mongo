<template>
  <div :class="$style.nav">
    <router-link to="/home">Home</router-link>
    <span>/</span>
    <router-link to="/goods">Goods</router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" module>
  a{
    text-decoration: none;
    color:#a1a1a1;
  }
  .nav{
    width:100%;
    background-color: #f0f0f0;
    line-height: 45px;
    padding-left:20px;
    box-sizing: border-box;
    span{
      color:#a1a1a1;
    }
  }
</style>
<style lang="scss">
  .active{
    color:#d1434a;
  }
</style>
