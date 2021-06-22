<template>
   <AppHeader/>
<div  class="w-full flex">
   <router-view></router-view>
</div>
</template>

<script>
import AppHeader from "./Components/AppHeader.vue";

export default {
   name: 'App',
   components:{ AppHeader },

  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
