<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <Navbar :about_intern="about_route" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRoute } from 'vue-router';
import { computed, ref, provide } from 'vue';

// for edit registration in registration page
const showOtpVerificationComp = ref(false)
provide('showOtpVerificationComp', showOtpVerificationComp);


const route = useRoute();

const about_route = computed(() => 
  route.matched.some(r => r.name === 'InternshipRegister')
);
console.log(computed(() => 
route.matched.some(r => r.name === 'InternshipRegister')))
</script>