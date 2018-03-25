<template>
  <div :class="$style.paging">
    <ul>
      <li @click="prev">go</li>
      <li @click="goten" v-if="length > 10">后十页</li>
      <li v-for="(item,index) in state" :key="item"  @click="getList(index)" ref="clickList" :class="{active:index == current}">{{item}}</li>
      <li @click="backten" v-if="length > 10">前十页</li>
      <li @click="Back">back</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      page: 1,
      paramters: this.params,
      state: [],
      length: null,
      count: 0
    }
  },
  props: {
    params: {
      type: Object,
      default () {
        return {
          page: 0,
          pageSize: 1,
          fullCount: 36
        }
      }
    }
  },
  mounted () {
    let len = Math.ceil(this.paramters.fullCount / this.paramters.pageSize)
    console.log(len)
    this.length = len
    if (len < 10) {
      for (let i = 0; i < len; i++) {
        let res = i + 1
        this.state.push(res)
      }
    } else {
      for (let i = 0; i < 10; i++) {
        let res = i + 1
        this.state.push(res)
      }
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
      let length = Math.ceil(this.paramters.fullCount / this.paramters.pageSize)
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
      if (this.count < Math.ceil(this.length / 10) - 1) {
        // count = 0  length = 25
        // this.count++
        this.state = []
        if (this.count < Math.ceil(this.length / 10) - 2) {
          console.log(true)
          this.count++
          for (let i = 10 * this.count; i < 10 * (this.count + 1); i++) {
            this.state.push(i + 1)
          }
          console.log(this.state)
          this.page = 1 + 10 * this.count
        } else {
          console.log(false)
          this.count++
          console.log(this.count)
          for (let i = 10 * this.count; i < this.length; i++) {
            this.state.push(i + 1)
          }
          console.log(this.state)
        }
      } else {
        this.count = Math.ceil(this.length / 10) - 1
      }
      let res = this.page
      this.$emit('pageindex', parseInt(res))
    },
    backten () {
      if (this.count > 0) {
        // count = 1  length = 25  11-20  1-10 10*count
        this.count--
        console.log(this.count)
        this.state = []
        for (let i = 10 * (this.count + 1); i > 10 * this.count; i--) {
          this.state.push(i)
        }
        this.state.reverse()
        this.page = 1 + 10 * this.count
        let res = this.page
        this.$emit('pageindex', parseInt(res))
      } else {
        this.count = 0
      }
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
