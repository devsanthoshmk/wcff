<template>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            v-bind="project"
          />
        </div>

        <!-- Stats Section -->
        <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div class="text-3xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
</template>