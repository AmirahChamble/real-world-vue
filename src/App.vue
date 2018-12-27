/* eslint-disable */
<template>
  <div id="app">

    <NavBar/>

    <router-view />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default{
  components:{
    NavBar
  }
}

</script>

<style lang="scss">

@import './src/styles/variables';
@import './src/styles/components/navbar';
@import './src/styles/components/eventcard';

*{
  margin: 0px;
  
} 

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:$color-black;
}

</style>
