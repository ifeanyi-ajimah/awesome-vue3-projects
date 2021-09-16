<template>
   <AppHeader :isloggedin="isLoggedIn" :user="authUser" @open-login-modal="isLoginOpen = true"/>
<div  class="w-full flex">
   <router-view></router-view>
</div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./Components/AppHeader.vue";
import LoginModal from "./Components/pages/LoginModal.vue";
import firebase from "./utilities/firebase";

export default {
   name: 'App',
   components:{ AppHeader, LoginModal },

  data(){
    return{
          isLoginOpen : false,
          isLoggedIn: false,
          authUser: {},
    }
  },
  mounted(){
     firebase.auth().onAuthStateChanged( (user) => {
        if(user){
           this.isLoggedIn = true;
           this.authUser = user
           console.log(user)
        }else{
           this.isLoggedIn = false
           this.authUser = {}
        }
     })
  }
}
</script>

<style lang="scss" scoped>

</style>
