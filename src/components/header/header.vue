<template>
  <div :class="$style.header">
    <a href="#">
      <img src="./imgs/logo1.png" alt="" class="logo">
    </a>
    <div :class="$style.login">
      <span :class="$style.text">Login</span>
      <span class="icon-shopping-cart icon"></span>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" module>
@import '../../base/scss/reset.scss';
  .header{
    width:100%;
    padding:0 40px;
    line-height: 80px;
    box-sizing: border-box;
    a{
      display: inline-block;
    }
    img{
        vertical-align: middle;
      }
    .login{
      float:right;
      font-size:0;
      .text{
        font-size: 16px;
        vertical-align: middle;
        margin-right:30px;
      }
    }
  }
</style>
<style lang="scss">
@import "../../base/scss/icon.css";
.icon {
  display:inline-block;
  vertical-align: middle;
}
.icon-shopping-cart{
  font-size:20px;
}
</style>
