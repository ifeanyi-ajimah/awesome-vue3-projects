<template>
    <section class="flex flex-wrap w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5">Reusable Modal </h1>
            <template>
                <div>
                    
                </div>
            </template>
            <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
                <template v-slot:title>
                    Red Modal 
                </template>
                <template v-slot:body>
                    <p> the body of the red slot </p>
                    <section> A paragraph</section>
                </template>
            </Modal>
            
            <!-- N/B: we can use # in place of v-slot: -->
            <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false">
                <template #title>
                    Blue Modal 
                </template>
                <template #body>
                    <p> the body of the blue slot </p>
                </template>
            </Modal> 

            <Modal v-if="isDefModalOpen" @close="isDefModalOpen = false">
                <template v-slot:title>
                </template>

                <template v-slot:body>
                </template>
            </Modal>

            
            
            <button class="border rounded px-2 mx-4 bg-red-500 text-white" @click="isRedModalOpen = true"> Open Modal </button>
            <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isBlueModalOpen = true"> Open Blue Modal </button>
            <button class="border rounded px-2 mx-4 bg-green-500 text-white" @click="isDefModalOpen = true"> Open default Modal </button>
        
        </div>
    </section>
</template>

<script>
import Modal from '../Modal.vue'
import {ref} from "vue"
export default {
    components:{Modal},
    setup(){
        const isRedModalOpen = ref(false);
        const isBlueModalOpen = ref(false);
        const isDefModalOpen = ref(false);

        return {isRedModalOpen,isBlueModalOpen,isDefModalOpen}
    }
}
</script>

<style>

</style>