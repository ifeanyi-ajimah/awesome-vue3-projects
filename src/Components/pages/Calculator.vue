<template>
    <section class="flex w-full">
            <div class="m-auto ">
                <h1 class="text-2xl text-center">Calculator </h1>
                <p class="text-3xl text-right mt-10 h-16 w-40 overflow-x-scroll" style="direction:rtl">{{ currentNumber }}</p>
                <div class="h-10">
                <small v-if="selectedOperation"> {{previousNumber}}  {{selectedOperation}} {{currentNumber}}  </small>
                </div>
                <div class=" grid grid-cols-4 gap-1">
                    <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded ">1</button>
                    <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded ">2</button>
                    <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded ">3</button>
                    <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded ">+</button>
                    <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded ">4</button>
                    <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded ">5</button>
                    <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded ">6</button>
                    <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded ">-</button>
                    <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded ">7</button>
                    <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded ">8</button>
                    <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded ">9</button>
                    <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded ">*</button>
                    <button @click="pressed('c')" class="p-2 w-10 h-10 border rounded">C</button>
                    <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded">0</button>
                    <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded "> = </button>
                    <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded "> / </button>
                  
                </div>
            </div>
    </section>
</template>

<script>
import {onMounted, onUnmounted, ref} from "vue";
export default {
    setup(){

        const operations = ["+", "-", "/", "*"];
        const previousNumber = ref("");
        const currentNumber = ref("");
        const selectedOperation = ref("");
        const numbers = ["1","2","3","4","5","6","7","8","9","0"];
        function pressed(value){
            if(value === "=" || value === "Enter") calculate(); //checks if value is '=' or Enter button is clicked. 
            else if (value === 'c')  clear();
            else if( operations.includes(value)) applyOperation(value);
            else if (numbers.includes(value))  appendNumber(value);
        }

        function appendNumber(value){
            currentNumber.value = currentNumber.value + value 
        }

        function applyOperation(value){
                calculate();
                previousNumber.value = currentNumber.value;
                currentNumber.value = "";
                selectedOperation.value = value;
        }

        function calculate(){
            if(selectedOperation.value === "*") multiply();
            else if(selectedOperation.value === "/") divide();
            else if(selectedOperation.value === "-") subtract();
            else if(selectedOperation.value === "+") sum(); 

            previousNumber.value = ""; 
            selectedOperation.value = "";
        }

        function multiply(){
            currentNumber.value = previousNumber.value * currentNumber.value;
        }
        function divide(){
            currentNumber.value = previousNumber.value / currentNumber.value;
        }
        function subtract(){
            currentNumber.value = previousNumber.value - currentNumber.value;
        }
        function sum(){
            currentNumber.value = +previousNumber.value + +currentNumber.value;
        }

        function clear(){
            currentNumber.value = "";
        }

        // const handleKeydown = () => pressed(e.key);
        function handleKeydown(e){
            pressed(e.key)
        }

        //registering key binding
        onMounted( ()=> window.addEventListener('keydown',handleKeydown) );
    
        onUnmounted( () => {
            window.removeEventListener("keydown", handleKeydown);
        })



        return {currentNumber, pressed, selectedOperation, previousNumber };
    }
}
</script>

