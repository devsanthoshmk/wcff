<template>
  <Menubar :model="items" class="border-none shadow-sm backdrop-blur-sm fixed w-full z-50">
    <template #start>
      <router-link to="/" class="flex items-center gap-2 mr-4 font-bold text-xl bg-black text-white p-2 rounded transition-all duration-500 ease-in-out transform hover:scale-110">
        <img src="/kyto-logo.png" alt="WCFF Logo" class="inline h-8 backdrop-contrast-200" />
        <span class="inline">
          WCFF
        </span>
      </router-link>

    </template>
    <template #end>
      <div class="flex items-center gap-1 sm:gap-2">
        <!-- Contact Us Button -->
        <router-link to="/contact">
          <Button 
            :label="isSmallScreen ? '' : 'Contact Us'" 
            icon="pi pi-send" 
            class="rounded-lg bg-[#5A58E9] text-white hover:bg-[#4A46C1] transition-all text-xs sm:text-sm p-2 sm:p-3" 
            :class="isSmallScreen ? 'p-button-icon-only' : ''"
            :title="isSmallScreen ? 'Contact Us' : ''"
          />
        </router-link>
        
        <!-- Apply Internship Button -->
        <a href="/internship/home/" target="_blank" rel="noopener noreferrer">
          <Button 
            :label="isSmallScreen ? '' : 'Apply Internship'" 
            icon="pi pi-briefcase" 
            class="rounded-lg bg-[#5A58E9] text-white hover:bg-[#4A46C1] transition-all text-xs sm:text-sm p-2 sm:p-3" 
            :class="isSmallScreen ? 'p-button-icon-only' : ''"
            :title="isSmallScreen ? 'Apply Internship' : ''"
          />
        </a>
      </div>
    </template>
  </Menubar>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';


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

const items = [
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
  {
    label: 'About',
    icon: 'pi pi-users',
    command: () => route.path === '/' ? handleNavigation('about') : router.push('/about'),
    class: 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#5A58E9] after:transition-all hover:after:w-full'
  }
];
</script>
