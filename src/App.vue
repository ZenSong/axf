<template>
  <div id="app">
    <tabBar v-show="tabBarShow"></tabBar>
    <router-view></router-view>
  </div> 
</template>

<script>
import TabBar from '@/components/Tab/TabBar'
export default {
   created () {
      this.$store.dispatch('setbannar') 
      this.$store.dispatch('setclassifys')
     },
  name: 'app',
  components: {
    TabBar
  },
  computed: {
    tabBarShow () {
      return this.$store.state.tabBarShow
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
 /*  body,html{
    width: 100%;
    height: 100%;
    font-size: 12px
  } */
</style>
