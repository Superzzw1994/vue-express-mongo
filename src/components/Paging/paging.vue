<template>
  <div :class="$style.paging">
    <ul>
      <li @click="prev">go</li>
      <li @click="goten" v-if="total.length > 10">后十页</li>
      <li v-for="(item,index) in total" :key="item" v-if="item < 11" @click="getList(index)" ref="clickList" :class="{active:index == current}">{{item}}</li>
      <li @click="backten" v-if="total.length > 10">前十页</li>
      <li @click="Back">back</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      page: 1
    }
  },
  props: {
    params: {
      type: Object,
      default () {
        return {
          page: 0,
          pageSize: 2,
          fullCount: 20
        }
      }
    }
  },
  computed: {
    total () {
      let pageLen = []
      let len = Math.ceil(this.params.fullCount / this.params.pageSize)
      for (let i = 0; i < len; i++) {
        let res = i + 1
        pageLen.push(res)
      }
      return pageLen
    }
  },
  methods: {
    getList (index) {
      let res = this.$refs.clickList[index].innerText
      this.page = parseInt(res)
      this.$emit('pageindex', parseInt(res))
      this.current = index
    },
    prev () {
      let length = Math.ceil(this.params.fullCount / this.params.pageSize)
      this.page++
      this.current++
      if (this.page > length) {
        this.page = length
        this.current = length - 1
      } else {
        let res = this.page
        this.$emit('pageindex', parseInt(res))
      }
    },
    Back () {
      this.page--
      this.current--
      if (this.page <= 0) {
        this.page = 1
        this.current = 0
      } else {
        let res = this.page
        this.$emit('pageindex', parseInt(res))
      }
    },
    goten () {
      this.page += 10
      let res = this.page
      this.$emit('pageindex', parseInt(res))
    },
    backten () {
      this.page = this.page - 10 > 0 ? this.page - 10 : 1
      let res = this.page
      this.$emit('pageindex', parseInt(res))
    }
  }
}
</script>
<style lang="scss" module>
  .paging{
    position: absolute;
    bottom: 0;
    right:0;
    ul{
      li{
        background-color: #fff;
        border:1px solid black;
        box-sizing: border-box;
        padding: 8px;
        float: left;
      }
    }
  }
  .active{
    color:red;
  }
</style>
