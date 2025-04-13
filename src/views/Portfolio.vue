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
        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-0.5 h-10 [&_i.pi]:text-2xl" />
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
            Title
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
            <div class="flex flex-wrap gap-2">
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

        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-0.5 h-10 [&_i.pi]:text-2xl" />
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
            Title
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
            <div class="flex flex-wrap gap-2">
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

        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-0.5 h-10 [&_i.pi]:text-2xl" />
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
            Title
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
            <div class="flex flex-wrap gap-2">
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

        <Tag icon="pi pi-calendar"  value="2020" severity="contrast" class="relative left-1/2 -translate-x-1/2 mt-4 text-lg px-4 py-0.5 h-10 [&_i.pi]:text-2xl" />
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
            Title
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore officiis qui, non recusandae corrupti corporis velit repellat facilis quos quam nisi, itaque aperiam nostrum quae doloremque facere fugit quo! Sit dolore earum assumenda fugiat tempora distinctio nihil iusto rem fuga incidunt quam necessitatibus doloremque molestias vitae, commodi ipsum nemo expedita!</p>
            <div class="flex flex-wrap gap-2">
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
const tags = ['React', 'D3.js', 'Firebase']
const colors = ["bg-blue-500","bg-purple-500","bg-pink-500"];
</script>