<template>
  <main>
    <PageHeader
      title="Our Portfolio"
      description="Explore our latest projects and success stories"
    />
    
    <section class="pb-16">
      <!-- parent div to hold the timeline -->
      <div class="relative h-fit before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-[#ccc] before:content-[''] before:top-2 before:bottom-2">
        <!-- Content -->
        
        <card
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"/>

      </div>
    </section>
    <ctasection/>
  </main>
</template>

<style>
 
.projects:nth-of-type(2n)  .project {
  right: -50%;
}

</style>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';
import card from '@/components/portfolio/card.vue';
import ctasection from '@/components/shared/CTASection.vue';
import { projects } from '@/data/projects';




const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Industry Awards' },
  { value: '24/7', label: 'Support Available' }
];

</script>