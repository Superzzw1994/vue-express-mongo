<template>
  <div :class="$style.goods">
    <div :class="$style.sort">
      <div :class="$style.box">
        <span :class="$style.default">Sort by:</span>
        <span :class="$style.target">Default</span>
        <span :class="$style.default" @click="sortGood">Price<span class="icon-arrow-up2" :class="$style.icon"></span></span>
      </div>
    </div>
    <div :class="$style.content" class="clearfix">
      <div :class="$style.price">
        <p>PRICE:</p>
        <ul>
          <li :class="$style.all">All</li>
          <li>0.00 - 100.00</li>
          <li>100.00 - 500.00</li>
          <li>500.00 - 1000.00</li>
          <li>1000.00 - 2000.00</li>
        </ul>
      </div>
      <div :class="$style.goodlist">
      <ul>
        <li v-for="good in goods" :key="good.productId">
          <img src="https://i8.mifile.cn/a1/pms_1510033696.15216628!560x560.jpg" alt="" width="235" height="235">
          <p :class="$style.product">{{good.productName}}</p>
          <p :class="$style.price">￥{{good.salePrice}}</p>
          <div :class="$style.addCart">加入购物车</div>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goods: [],
      sortFlag: true,
      page: 1,
      pageSize: 8
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      if (this.sortFlag) {
        this.sort = 1
      } else {
        this.sort = -1
      }
      var param = {
        page: this.page,
        sort: this.sort,
        pageSize: this.pageSize
      }
      this.axios.get('/goods', {
        params: param
      }).then((res) => {
        console.log(res)
        this.goods = res.data.result.list
      })
    },
    sortGood () {
      this.sortFlag = !this.sortFlag
      this.page = 1
      this.getList()
    }
  }
}
</script>
<style lang="scss" module>
.goods{
  background-color: #f5f7fc;
  padding:60px 20px 50px 20px;
}
.sort{
  position: relative;
  width:100%;
  height: 55px;
  line-height: 55px;
  background-color: #fff;
}
.box{
  position: absolute;
  right:60px;
}
.default{
  color:#6D5f5f;
  margin-right:20px;
}
.target{
  color:#ee7a23;
  margin-right:40px;
}
.icon{
  display: inline-block;
  margin-top:2px;
  margin-left:6px;
}
.content{
  padding: 50px 0 50px 40px;
  width:100%;
  box-sizing: border-box;
  display: flex;
}
.price{
  flex:200px 0 0;
  p{
   line-height: 40px;
   font-weight:600;
   letter-spacing: 2px;
   margin-bottom: 20px;
  }
  ul{
    li{
      line-height: 40px;
      margin-top:28px;
      font-size:18px;
    }
  }
 .all{
      border-left:2px solid #ee7a23;
      color:#ee7a23;
      padding-left:30px;
      margin-top:0;
      font-weight: 500;
    }
}
.goodlist{
  margin-left:58px;
  li{
    float: left;
    border:2px solid #e9e9e9;
    margin: 0 0 1.5873% 32px;
    background-color: #fff;
    .product{
      margin-top:20px;
      font-weight: 600;
      color:#605f5f;
      margin-left:20px;
    }
    .price{
      font-size: 18px;
      color:#d1443a;
      margin-top:40px;
      margin-left:20px;
    }
    .addCart{
      margin:20px;
      line-height: 40px;
      color:#d1443a;
      border:1px solid #d1443a;
      text-align: center;
    }
  }
}
</style>
<style lang="scss">
@import '../../base/scss/reset.scss';
.icon-arrow-up2{
  font-size:14px;
}
</style>
