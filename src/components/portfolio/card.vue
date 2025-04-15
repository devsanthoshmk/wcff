<template>
  <!-- Wrap the card in a container that tracks its visibility -->
  <div ref="cardRef" class="projects" :class="['card-wrapper', { 'animate-fade-in': isVisible }]">
    <!-- The upper tag element -->
    <Tag 
      icon="pi pi-calendar" 
      :value="year" 
      severity="contrast" 
      class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-0.5 h-10 [&_i.pi]:text-2xl" 
    />
    
    <!-- The main card body -->
    <div class="project clear-both m-4 mr-12 p-4 relative w-[calc(50%-30px)] bg-white h-64 rounded-lg">
      <div class="flex p-2 gap-1 flex-row-reverse">
        <div>
          <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div class="circle">
          <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div class="circle">
          <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div class="card__content">
        <h3>{{ title }}</h3>
        <p class="ml-4 mt-1">{{ description }}</p>
        <div class="flex flex-wrap gap-2 pt-2 absolute bottom-4">
          <span 
            v-for="(tag, index) in tags" 
            :key="tag"
            class="px-3 py-1 text-white rounded-full text-sm backdrop-blur-sm"
            :class="colors[index]"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Tag from 'primevue/tag';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  }
});

const colors = ["bg-blue-500","bg-purple-500","bg-pink-500"];

// Element ref for the observer
const cardRef = ref(null);
// Reactive state for controlling the animation
const isVisible = ref(false);

let observer = null;

onMounted(() => {
  // Create the observer instance
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is at least 10% visible, mark it as visible and stop observing.
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.9  // Adjust threshold as needed.
  });
  
  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  if (observer && cardRef.value) {
    observer.unobserve(cardRef.value);
  }
});
</script>

<style scoped>
/* Optional: Initial state of the card before animation */
.card-wrapper {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* When the card becomes visible, animate it */
.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
