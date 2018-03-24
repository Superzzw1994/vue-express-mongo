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
  components: {
    v_header: header,
    v_nav: nav,
    v_footer: footer
  }
}
</script>

<style lang="scss">

</style>
