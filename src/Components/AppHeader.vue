<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2 text-white">
      <router-link v-for="list in routeList " :key="list.to" class="mx-1" :to="list.to"> {{ list.title }} </router-link>
        <button v-if="isloggedin" class="mx-2" @click="logout"> Logout  </button>
        <button v-else class="mx-2" @click="openModal"> Login   </button>
           <!-- <button v-if="isloggedin" class="mx-2" @click="logout">  {{ user.email }} </button> -->
    </nav>
</template>
<script>
import firebase from '../utilities/firebase'

export default {

    props:{
      isloggedin:{ 
        type: Boolean,
        default: false,
        required: true,
      },
      user:{
        type: Object,
      }
    },

  data(){
    return {
      routeList :[
        {title: "HOME ", to:"/"},
        {title: "DC HEROS ", to:"/dc-heros"},
        {title: "CALENDAR ", to:"/calendar"},
        {title: "MARKDOWN ", to:"/markdown"},
        {title: "CALCULATOR ", to:"/calculator"},
        {title: "MODAL ", to:"/reuseable-modal"},
        {title: "Slider  ", to:"/slider-carousel"},
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


