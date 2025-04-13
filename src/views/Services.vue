<template>
  <main>
    <PageHeader
      title="Our Services"
      description="Comprehensive digital solutions tailored to your business needs"
    />

    <section>
      <label for="filter" class="group relative grid grid-cols-2 isolate rounded-[10px] w-[70%] cursor-pointer p-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#70a9c5] mx-auto">
        <!-- Bind checkbox state using v-model -->
        <input type="checkbox" id="filter" class="sr-only" v-model="checked" />
        
        <!-- Labels -->
        <span class="px-8 py-4 text-white transition-opacity duration-100 ease-in-out z-50"
              :class="{ 'opacity-75': checked }">
          Technical
        </span>
        <span class="px-8 py-4 text-white transition-opacity duration-100 ease-in-out z-50"
              :class="{ 'opacity-100': checked, 'opacity-75': !checked }">
          Non-Technical
        </span>

        <!-- Background -->
        <div class="absolute inset-0 -z-20 rounded-[10px] bg-gradient-to-r from-blue-600 to-purple-600 transition-[inset] group-focus-within:inset-[-0.25rem]"></div>

        <!-- Slider -->
        <div class="absolute top-1 bottom-1 left-1 w-[calc(50%-8px)] rounded-[10px] bg-blue-600 transition-all duration-500 ease-[cubic-bezier(0.47,1.64,0.41,0.8)] shadow-inner shadow-black/30"
             :class="checked ? 'left-[calc(50%+4px)] bg-purple-600' : ''">
        </div>
      </label>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Technical services section -->
        <div v-if="!checked" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            v-for="service in tech_services"
            :key="service.title"
            v-bind="service"
          />
        </div>
        <!-- Non-technical services section -->
        <div v-if="checked" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in nontech_services"
            :key="service.title"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <ctasection />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/shared/PageHeader.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import ctasection from '@/components/shared/CTASection.vue'
import { tech_services, nontech_services } from '@/data/services'

// Reactive property to track the checkbox state
const checked = ref(false)
</script>
