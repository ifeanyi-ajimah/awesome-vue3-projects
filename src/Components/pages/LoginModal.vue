<template>
<div >
    <section
        @click="closeAction"
     class=" z-20 h-screen w-screen bg-gray-500 fixed top-0  opacity-50">
    </section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                <div class="p-2 border">
                    <h1 class="text-2xl text-center"> Login </h1>
                    <form class="p-2 my-2" @submit.prevent="submit">
                        <div class="my-4">
                            <label > Email </label>
                            <input v-model="form.email" ref="emailRef" class="rounded shadow p-2 w-full" type="text" placeholder="Enter email or user name">
                        </div>
                        <div class="my-4">
                            <label> Password </label>
                            <input v-model="form.password" class="rounded shadow p-2 w-full" type="password" placeholder="Enter password">
                        </div>
                        <div class="my-4">
                            <button type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2" >
                                 <span v-if="!isLoading"> Login  </span>
                                 <span v-else> loading.... </span>
                                 </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import firebase from '../../utilities/firebase';

export default {
    data(){
        return {
            form:{
                email: 'ifeanyi.a@enyoretail.com',
                password: '1111111111',
            },
            isLoading: false,
        }
    },
    methods:{
        closeAction(){
            this.$emit('close-login');
        },
        submit(){
            this.isLoading = true
            firebase.auth()
            .signInWithEmailAndPassword(this.form.email, this.form.password )
            .then( () => {
                // console.log(res); since we are not using response we need to remove it
                this.form = {}
                this.isLoading = false
                this.closeAction();
            })
            .catch((e) => {
                console.log(e);
                this.isLoading = false
            })
        }
    },
    mounted(){
        this.$refs.emailRef.focus();
    }

}
</script>

<style>

</style>