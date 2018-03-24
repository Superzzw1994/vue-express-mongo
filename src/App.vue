<template>
  <div id="app">
    <v_header></v_header>
    <v_nav></v_nav>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
import nav from './components/nav/nav'
export default {
  name: 'App',
  data () {
    return {
      goods: []
    }
  },
  components: {
    v_header: header,
    v_nav: nav
  },
  mounted () {
    this.axios.get('/goods').then((res) => {
      this.goods = res
    })
  }
}
</script>

<style lang="scss">

</style>
