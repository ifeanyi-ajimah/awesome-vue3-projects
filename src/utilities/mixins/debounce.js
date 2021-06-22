
export default  {
    data(){
        return{
            timeout: ""
        }
    },

    methods:{
        debounce(func, wait = 1000){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        }
    }
    //Note : Mixing is basically for re usability. When you use a mixing and import it into a component, it mixes
    //with the other component and gives it the component its data and methods. and the component can comfortable make use of its methods, data and computed function. 
    //Virtual Dom is the data in the memory of the Vue.js while Browser Dom is in the memory of the browser. 
}











