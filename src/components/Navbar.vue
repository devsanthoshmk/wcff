<template>
  <Menubar :model="items" class="border-none shadow-sm backdrop-blur-sm fixed w-full z-50">
    <template #start>
      <router-link
  to="/"
  class="flex items-center gap-1 sm:gap-2 mr-4 font-bold text-lg sm:text-xl bg-black text-white p-2 rounded transition-transform duration-500 ease-in-out hover:scale-110"
>
  <img
    src="/kyto-logo.png"
    alt="WCFF Logo"
    class="h-6 sm:h-8"
  />
  <span class="hidden sm:inline">
    WCFF
  </span>
</router-link>


    </template>
    <template #end>
      <div class="flex items-center gap-1 sm:gap-2">
        <!-- Contact Us Button -->
        <router-link to="/contact">
          <Button 
            label="Contact Us" 
            icon="pi pi-send" 
            class="rounded-lg bg-[#5A58E9] text-white hover:bg-[#4A46C1] transition-all text-xs sm:text-xs p-2 sm:p-3" 
            title="Contact Us"
          />
        </router-link>
        
        <!-- Apply Internship Button -->
        <Button
          v-if="props.about_intern"
          label="View/Edit Registration"
          icon="pi pi-pencil"
          class="rounded-lg  transition-all text-xs sm:text-xs p-2 sm:p-3 bg-black text-white hover:bg-neutral-800" 
          @click="showotp"
          title="View/Edit Registration"
        />

        <router-link
      v-else
      to="/internship/register/"
      class="no-underline"
    >
          <Button 
           label="Apply Internship"
        icon="pi pi-briefcase"
            class="rounded-lg  transition-all text-xs sm:text-xs p-2 sm:p-3 bg-[#5A58E9] text-white hover:bg-[#4A46C1]" 

            title='Apply Internship'
          />
        </router-link>
      </div>
    </template>
  </Menubar>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { defineProps,computed,inject  } from 'vue'

const props = defineProps({
  about_intern : {
    type: Boolean,
    default: false
  }
})


const route = useRoute();
const router = useRouter();
const isSmallScreen = ref(false);

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 640; // Tailwind's sm breakpoint
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});



const handleNavigation = (id) => {
  if (route.path === '/') {
    // On homepage - scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // On other pages - navigate to homepage then scroll
    router.push({
      path: '/',
      hash: `#${id}`
    });
  }
};

const items = computed(() => [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  },
  {
    label: 'Services',
    icon: 'pi pi-star',
    command: () => route.path === '/' ? handleNavigation('services') : router.push('/services'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  },
  {
    label: 'Features',
    icon: 'pi pi-images',
    command: () => route.path === '/' ? handleNavigation('features') : router.push('/'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  },
  props.about_intern
    ? {
        label: 'About Internship',
        icon: 'pi pi-users',
        command: () => router.push('/internship'),
        class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
      }
    : {
        label: 'About',
        icon: 'pi pi-users',
        command: () => route.path === '/' ? handleNavigation('about') : router.push('/about'),
        class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
      }
]);
console.log(props.about_intern)

const showOtpVerificationComp = inject('showOtpVerificationComp');

// for view/edit registration btn
function showotp(val){
  showOtpVerificationComp.value = true;
  console.log('showotp called with value:', showOtpVerificationComp);
}
</script>
