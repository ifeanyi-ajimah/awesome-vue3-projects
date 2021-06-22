<template>

  <div class="m-auto">
    <h2 v-show="false"> Another banger </h2>
    <h1 class="text-2xl text-center"> DC heros  {{ herosCount }} </h1>
    <p v-text="title">  </p>
    <ul>
      <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
          <div> {{ hero.name }} 
          </div>
            <button @click="remove(index)"> x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
    <input class="border rounded" v-model="newHero" placeholder="Enter new hero "/> 
    <button class="border rounded text-small text-white bg-gradient-to-r from-red-700 to-pink-500" type="submit" > Add Hero </button>
    </form>  
  </div>
</template>

<script>

export default {
  name: 'DcHero',
  
  data(){
    return {
      title : "<h1> a title inside a h1 tag</h1>",
      newHero: "",
      dcHeros: [
        {name : "SuperGirl"},
        {name : "Flash"},
        {name : "Batman"},
        {name : "Arrow"},
        {name : "SuperMan"},
      ],
    }
  },
  computed:{
    herosCount(){
      return  this.dcHeros.length;
    }
  },
  methods:{
    addHero(){
      if(this.newHero !== ""){
        this.dcHeros.unshift({name : this.newHero});
        this.newHero = "";
      }
    },
    remove(index){
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index  );
    }
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
