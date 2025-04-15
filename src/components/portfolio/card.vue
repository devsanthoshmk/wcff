<template>
  <Tag icon="pi pi-calendar"  :value="year" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-0.5 h-10 [&_i.pi]:text-2xl" />
  <div class="projects clear-both m-4 mr-12 p-4 relative w-[calc(50%-30px)] bg-white h-64 rounded-lg">
    <div class="flex p-2 gap-1 flex-row-reverse">
      <div class="">
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
      <h3>
      {{ title }}
      </h3>
      <p class="ml-4 mt-1">{{ description }}</p>
      <div class="flex flex-wrap gap-2 pt-2 absolute bottom-4 ">
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
</template>


<script setup>
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

</script>