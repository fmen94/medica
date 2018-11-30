<template>
<div>
  <header-nav></header-nav>
  <div class="container">
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</div>
 
</template>

<script>
import headerNav from './components/navBar/navBar'
export default {
  components:{
    headerNav : headerNav
  }
}
</script>

<style lang="sass" >
   @import './App'
</style>
