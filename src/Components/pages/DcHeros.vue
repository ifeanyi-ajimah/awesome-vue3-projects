<template>

  <div class="m-auto">
    <h2 v-show="false"> Another banger </h2>
    <h1 class="text-2xl text-center"> DC heros  {{ herosCount }} </h1>
    <p v-html="title">  </p>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
          <div> {{ hero.name }} 
          </div>
            <button @click="remove(index)"> x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
    <input class="border rounded" v-model="newHero" placeholder="Enter new hero" ref="newHeroRef"/> 
    <button class="border rounded text-small text-white bg-gradient-to-r from-red-700 to-pink-500" type="submit" > Add Hero </button>
    </form>  
  </div>
</template>

<script>
import {onMounted, ref} from "vue"; 
export default {
  name: 'DcHero',
  setup(){
      const title = "<h1> <b> A Bold title inside a h1 tag</b></h1>";
      const  newHero =  ref("");
      const newHeroRef = ref("");
      const dcHeros = ref ([
        {name : "SuperGirl"},
        {name : "Flash"},
        {name : "Batman"},
        {name : "Arrow"},
        {name : "SuperMan"},
      ]);
      
      
      // const heroCount = computed({
      //    get: () => dcHeros.value.length,
      // });

      onMounted( () => {
         newHeroRef.value.focus()
      });


    function remove(index){
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index  );
    }

    function addHero(){
      if(newHero.value !== ""){
        dcHeros.value.unshift({name : newHero.value});
        newHero.value = "";
      }
    }

    return {title, dcHeros, newHero, remove, addHero, newHeroRef }

  },

  computed:{
    herosCount() {
      return this.dcHeros.length 
    } ,
    // research why I can't use fat arrow function in vue computed property
    // herosCount : () => {
    //   return  this.dcHeros.length
    // }
    
   
  }


 
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
