<template>
  <main>
    <PageHeader
      title="Our Portfolio"
      description="Explore our latest projects and success stories"
    />
    
    <section class="pb-16">
      <!-- parent div to hold the timeline -->
      <div class="relative h-[100vh] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-[#ccc] before:content-[''] before:top-2 before:bottom-2">
        <!-- Content -->
        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-2 h-10 [&_i.pi]:text-2xl" />
        <div class="projects clear-both m-4 mr-12 p-4 relative w-[calc(50%-20px)]">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.
          </h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
        </div>
        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-2 h-10 [&_i.pi]:text-2xl" />
        <div class="projects clear-both m-4 mr-12 p-4 relative w-[calc(50%-20px)]">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.
          </h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
        </div>
        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-2 h-10 [&_i.pi]:text-2xl" />
        <div class="projects clear-both m-4 mr-12 p-4 relative w-[calc(50%-20px)]">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.
          </h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
        </div>
      </div>
    </section>
    <ctasection/>
  </main>
</template>

<style>
  .projects:nth-of-type(2n) {
      right: -50%;
    }
</style>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import ctasection from '@/components/shared/CTASection.vue';
import { projects } from '@/data/projects';


import Tag from 'primevue/tag';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Industry Awards' },
  { value: '24/7', label: 'Support Available' }
];
</script>