<template>
  <main>
    <PageHeader
      title="About Us"
      description="Delivering relevant, agile yet simple technological solutions for financial services providers"
    />
    
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Story</h2>
            <p class="text-lg text-justify text-gray-600 mb-4">
              Founded in 2023, we have been consistently delivered exceptional results across a wide spectrum of domains. 
              Our cybersecurity solutions have fortified enterprises by implementing advanced security measures to safeguard sensitive data. 
              In website development, we have created dynamic and responsive platforms tailored to meet the unique needs of our clients. 
              Our expertise in application development has resulted in user-friendly mobile and web applications that offer seamless performance. 
              Through engaging and SEO-optimized content writing, we have empowered diverse industries to effectively communicate their message.
            </p>
            <p class="text-lg text-justify text-gray-600 mb-6">
              In addition to these core services, we have ventured into innovative IoT projects, developing smart home and industrial automation solutions. 
              Our work in e-commerce has produced scalable websites with secure payment integration, while our branding and design efforts have provided impactful visual identities for startups and enterprises. 
              Digital marketing campaigns executed by WCFF have enhanced brand visibility through data-driven strategies. 
              Moreover, our research and development contributions continue to push the boundaries of AI and emerging technologies.
            </p>
            
          </div>
          <div class="relative flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team meeting"
              class="rounded-lg shadow-xl"
            />
          </div>
          <!-- <div class="grid grid-cols-2 gap-8">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
                <div class="text-gray-600">{{ stat.label }}</div>
              </div>
            </div> -->
        </div>
      </div>
    </section>
    <!-- CTASECTION -->
    <ctasection/>
  </main>
</template>

<script setup>
import PageHeader from '@/components/shared/PageHeader.vue';
import ctasection from '@/components/shared/CTASection.vue';

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '15+', label: 'Team Members' },
  { value: '4+', label: 'Years Experience' }
];
</script>