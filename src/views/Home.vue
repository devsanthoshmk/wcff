<template>
  <main>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center relative overflow-hidden">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8 pt-8 md:mt-0 md:pt-4">
        <!-- Left Content -->
        <div class="text-left">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" style="line-height: 1.25!important;">
            We Create <span class="relative">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Digital
              </span>
              <span 
                class="absolute left-0 -bottom-2 w-full h-2 bg-[#f9ff00] rounded-md"
              ></span>
            </span> Experiences
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Transform your brand with cutting-edge web solutions that captivate and convert.
          </p>
          <div class="flex gap-4">
            <!-- "Get Started" Button with #EBED9E Background -->
            <Button 
              @click="navigateToSection('services')" 
              label="Get Started" 
              icon="pi pi-arrow-right" 
              class="p-button-rounded p-button-lg custom-get-started"
            />
            <!-- "Our Work" Button with #5A58E9 Background -->
            <Button 
              @click="navigateToSection('portfolio')" 
              label="Our Work" 
              icon="pi pi-images" 
              class="p-button-rounded p-button-lg custom-our-work"
            />
          </div>
        </div>
        <!-- Right Illustration -->
        <div class="relative">
          <img 
            src="/hero-img.svg"
            alt="Creative workspace"
            class="p-[50px] rounded-2xl transform hover:scale-105 transition-transform duration-300"
          />
          <!-- Decorative Elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>

        <!-- Services Section -->
        <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard v-for="service in tech_services.slice(0, 3)" :key="service.title" v-bind="service" />
        </div>
        <div class="text-center mt-12">
          <router-link to="/services">
            <Button label="View All Services" icon="pi pi-arrow-right" severity="secondary" class="p-button-rounded" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview -->
    <section id="portfolio" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard v-for="project in projects.slice(0, 3)" :key="project.title" v-bind="project" />
        </div>
        <div class="text-center mt-12">
          <router-link to="/portfolio">
            <Button label="View All Projects" icon="pi pi-arrow-right" severity="secondary" class="p-button-rounded" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Who We Are</h2>
          <p class="text-lg text-justify text-gray-600 mb-8">
            WEB CRAFTERS FOUNDATION (WCFF) addresses a wide range of challenges in technology and security, providing innovative solutions to empower businesses and individuals.
            In the realm of cybersecurity, the increasing threats such as malware attacks, phishing, ransomware, and data breaches pose significant risks. WCFF mitigates these risks by conducting cybersecurity awareness workshops, implementing advanced security solutions like firewalls and intrusion detection systems, and offering penetration testing services to identify and resolve security vulnerabilities. Website performance is another critical area where slow-loading websites and poor user interfaces lead to high bounce rates. WCFF tackles this by developing high-performance websites with optimized loading speed, responsive designs, and SEO techniques to improve visibility. Regular maintenance ensures seamless functionality across devices and browsers. 
          </p>
          <router-link to="/about">
            <Button label="Learn More" icon="pi pi-arrow-right" severity="secondary" class="p-button-rounded" />
          </router-link>
        </div>
        <div class="relative">
          <img 
            src="/about-logo.svg"
            alt="Our team"
            class="p-[100px] rounded-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
     <ctasection/>
    
  </main>
</template>

<script setup>
import ServiceCard from '@/components/services/ServiceCard.vue';
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import ctasection from '@/components/shared/CTASection.vue';
import { tech_services } from '@/data/services';
import { projects } from '@/data/projects';

const navigateToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* Custom "Get Started" Button */
.custom-get-started {
  background-color: #EBED9E !important;
  color: #000 !important;
  border: none !important;
  width: 140px;
  height: 40px;
  padding: 8px 10px;
}

.custom-get-started:hover {
  background-color: #f2ff00 !important; /* Slightly darker shade for hover */
}

/* Custom "Our Work" Button */
.custom-our-work {
  background-color: #5A58E9 !important;
  color: #fff !important;
  border: none !important;
  width: 140px;
  height: 40px;
  padding: 8px 15px;
}

.custom-our-work:hover {
  background-color: #4745C9 !important; /* Slightly darker shade for hover */
}
</style>
