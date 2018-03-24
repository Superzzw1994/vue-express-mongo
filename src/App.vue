<template>
  <div id="app">
    <v_header></v_header>
    <v_nav></v_nav>
    <router-view/>
    <v_footer></v_footer>
  </div>
</template>

<script>
import header from './components/header/header'
import nav from './components/nav/nav'
import footer from './components/footer/footer'
export default {
  name: 'App',
  data () {
    return {
      goods: []
    }
  },
  components: {
    v_header: header,
    v_nav: nav,
    v_footer: footer
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
