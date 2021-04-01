<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/footerGuide/FooterGuide";

export default {
  name: 'App',
  components:{
    FooterGuide
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
