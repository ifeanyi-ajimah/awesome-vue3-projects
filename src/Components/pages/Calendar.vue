<template>
<div class="m-auto">
   <h1 class="text-2xl my-2 text-center"> Vue Calendar  </h1>
   <!-- {{ currentMonthInNumber }} -->
    <!-- {{ startDay }}  -->
     <!-- {{ currentMonthInNumber }}   -->
      <!-- {{ currentDayNumber }}    -->
   <section class="mx-2 flex justify-between">
       
      <h2 class="font-bold">   {{ currentMonthName }}</h2>
      <h2 class="font-bold "> {{ currentYear }}</h2>
   </section>
    <section class="flex my-2">
        <p class=" text-center" style="width: 14.28%" v-for="day in days" :key="day"> {{day}}</p>
    </section>
    <section class="flex flex-wrap">
        <p class=" text-center" style="width: 14.28%" v-for="srtday in startDay " :key="srtday"> ** </p>

        <p class=" text-center" style="width: 14.28%" v-for="num in daysInMonth(currentYear, currentMonthInNumber) "
         :key="num"
          :class="currentDateClass(num)"  
         >
                {{ num }}
            </p>
    </section> 
    <section class="flex justify-between my-4" >
        <button class="px-2 border rounded" @click="prev"> Prev</button>
        <button class="px-2 border rounded" @click="next"> Next </button>
    </section>
</div>
</template>

<script>
export default {
    data(){
        return{
            days: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            currentMonthInNumber: new Date().getMonth() ,
            currentYear : new Date().getFullYear(),
        }
    }, 
    computed:{
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonthInNumber ).toLocaleString("default",  {month : "long"})
        },  
        fullDate(){
            return new Date().toLocaleString("default",  {week : "long"})
        },
        numberOfDaysInMonth(){ //not used
            let theMonth = new Date().getMonth() + 1 ;
            let theYear = new Date().getFullYear();
            return new Date(theYear, theMonth ,0 ).getDate();
        },
        startDay(){ 
            return new Date(this.currentYear , this.currentMonthInNumber,  1 ).getDay();
            ////to get the day(in number) that the month started
            //let birthday = new Date(1995, 11, 17)    use this as a reference
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        },
        currentDayNumber(){
            return new Date().getDate();
        }
    },
    methods:{
        daysInMonth(year, month){
            return new Date(year, month +1 , 0).getDate()
        },
        prev(){
            //  this.currentMonthInNumber --;
             if( this.currentMonthInNumber === 0){
                this.currentMonthInNumber = 11;
                this.currentYear --;
            }else{
                this.currentMonthInNumber --;
            }
        },
        next(){
            if( this.currentMonthInNumber === 11){
                this.currentMonthInNumber = 0;
                this.currentYear ++;
            }else{
                this.currentMonthInNumber ++;
            }
        },
        currentDateClass(num){
            const calendarFullDate = new Date(this.currentYear, this.currentMonthInNumber, num).toDateString() ;
            const currentFullDate = new Date().toDateString();
            return calendarFullDate === currentFullDate ? "currentDateCss" : " " ;
        }
    }

}
</script>

<style>
.currentDateCss{
    padding: 1px;
     border: 2px solid rgb(200, 255, 0);
}
</style>