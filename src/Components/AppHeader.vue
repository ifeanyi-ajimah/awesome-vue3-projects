<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 text-white">
    
     <router-link v-for="list in routeList " :key="list.to" class="mx-1" :to="list.to"> {{ list.title }} </router-link>
  </nav>
</template>



<script>

export default {
  data(){
    return {
      routeList :[
        {title: "HOME ", to:"/"},
        {title: "DC HEROS ", to:"/dc-heros"},
        {title: "CALENDAR ", to:"/calendar"},
        {title: "MARKDOWN ", to:"/markdown"},
      ],
    }
  }

}
</script>

<style>

</style>


