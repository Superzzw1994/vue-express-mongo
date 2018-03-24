<template>
  <div :class="$style.footer">
    <div :class="$style.content">
      <label for="county">Region</label>
      <select name="" id="county">
        <option>usa</option>
      </select>
      <ul>
        <li>Copyright @ 2017 All rights reserved.</li>
        <li>About Us</li>
        <li>Terms & Conditions</li>
        <li>Privary Policy</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" module>
  .footer{
    height:100px;
    background-color: #f5f7fc;
  }
  .content{
    margin: 0 72px;
    padding: 0 72px;
    border-top:2px solid #d8dade;
    line-height:100px;
    label{
      color:#ada9a5;
      font-size:14px;
    }
    ul{
      float:right;
      li{
        float: left;
        color:#ada9a5;
        font-size:14px;
        margin-left:25px;
      }
    }
  }
</style>
