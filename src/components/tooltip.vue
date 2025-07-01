<template>
    <div class="relative inline-block group focus-within:outline-none">
      <!-- Default slot: content to hover -->
      <slot />
  
      <!-- Tooltip -->
      <div
        v-if="text"
        class="absolute z-10 px-3 py-1.5 text-sm text-white bg-gray-800 rounded shadow-lg
               opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
               transition-opacity duration-200 pointer-events-none"
        :class="positionClass"
      >
        {{ text }}
        <!-- Arrow -->
        <div
          class="absolute w-2 h-2 bg-gray-800 rotate-45"
          :class="arrowPositionClass"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'top', // top | bottom | left | right
      validator: val => ['top', 'bottom', 'left', 'right'].includes(val)
    }
  })
  
  const positionClass = computed(() => {
    switch (props.position) {
      case 'bottom':
        return 'top-full mt-2 left-1/2 -translate-x-1/2'
      case 'left':
        return 'right-full mr-2 top-1/2 -translate-y-1/2'
      case 'right':
        return 'left-full ml-2 top-1/2 -translate-y-1/2'
      default:
        return 'bottom-full mb-2 left-1/2 -translate-x-1/2'
    }
  })
  
  const arrowPositionClass = computed(() => {
    switch (props.position) {
      case 'bottom':
        return '-top-1 left-1/2 -translate-x-1/2'
      case 'left':
        return 'right-0 top-1/2 -translate-y-1/2'
      case 'right':
        return '-left-1 top-1/2 -translate-y-1/2'
      default:
        return 'top-full left-1/2 -translate-x-1/2'
    }
  })
  </script>
  