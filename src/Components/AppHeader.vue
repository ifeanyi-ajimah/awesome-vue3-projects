<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 text-white">
      <router-link v-for="list in routeList " :key="list.to" class="mx-1" :to="list.to"> {{ list.title }} </router-link>
        <button class="mx-2" @click="openModal"> Login </button>
        <button class="mx-2" @click="logout"> Logout </button>
    </nav>
</template>
<script>
import firebase from '../utilities/firebase'

export default {
  data(){
    return {
      routeList :[
        {title: "HOME ", to:"/"},
        {title: "DC HEROS ", to:"/dc-heros"},
        {title: "CALENDAR ", to:"/calendar"},
        {title: "MARKDOWN ", to:"/markdown"},
        {title: "Slider Carousel ", to:"/slider"},
      ],
    }
  },
  methods:{
      openModal(){
        this.$emit('open-login-modal');
      },
      logout(){
        firebase.auth().signOut()
        .then( (res) => {
          console.log(res)
        })
        .catch( (e) => {
          console.log(e)
        });
      }
  },

}
</script>

<style>

</style>


