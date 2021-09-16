<template>
    <section class="flex flex-wrap w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5">Reusable Modal </h1>
            <Modal v-if="isModalOpen" @closeaction="closeTheModal" /> 
            <button @click="isModalOpen = true"> Open Modal </button>
        </div>
    </section>
</template>

<script>
import Modal from '../Modal.vue'
import {ref} from "vue"
export default {
    components:{Modal},
    setup(){
        const isModalOpen = ref(false);

        function closeTheModal(){
            isModalOpen.value = false
        }

        return {isModalOpen,closeTheModal}
    }
}
</script>

<style>

</style>