<template>
    <div class="bg-white py-12 overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-[#4745C9] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their business with our innovative software solutions
          </p>
        </div>
  
        <!-- Brand Slider Container -->
        <div class="relative">
          <!-- Gradient Overlays for smooth fade effect -->
          <div class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <!-- Sliding Track -->
          <div class="flex animate-slide-infinite">
            <!-- First set of logos -->
            <div class="flex items-center justify-center min-w-0 shrink-0">
              <div 
                v-for="(brand, index) in brands" 
                :key="`first-${index}`"
                class="mx-8 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <div class="bg-gray-50 hover:bg-[#f2ff00]/10 p-6 rounded-xl border border-gray-100 hover:border-[#4745C9]/20 transition-all duration-300 w-48 h-24 flex items-center justify-center group">
                  <div class="text-center">
                    <i 
                      :class="brand.icon" 
                      class="text-4xl text-[#4745C9] group-hover:text-[#4745C9] mb-2 transition-colors duration-300"
                    ></i>
                    <p class="text-sm font-semibold text-gray-700 group-hover:text-[#4745C9] transition-colors duration-300">
                      {{ brand.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Duplicate set for seamless loop -->
            <div class="flex items-center justify-center min-w-0 shrink-0">
              <div 
                v-for="(brand, index) in brands" 
                :key="`second-${index}`"
                class="mx-8 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <div class="bg-gray-50 hover:bg-[#f2ff00]/10 p-6 rounded-xl border border-gray-100 hover:border-[#4745C9]/20 transition-all duration-300 w-48 h-24 flex items-center justify-center group">
                  <div class="text-center">
                    <i 
                      :class="brand.icon" 
                      class="text-4xl text-[#4745C9] group-hover:text-[#4745C9] mb-2 transition-colors duration-300"
                    ></i>
                    <p class="text-sm font-semibold text-gray-700 group-hover:text-[#4745C9] transition-colors duration-300">
                      {{ brand.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Stats Section -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center p-4 rounded-lg bg-gradient-to-br from-[#f2ff00]/10 to-[#4745C9]/10">
            <div class="text-2xl md:text-3xl font-bold text-[#4745C9] mb-2">100+</div>
            <div class="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div class="text-center p-4 rounded-lg bg-gradient-to-br from-[#f2ff00]/10 to-[#4745C9]/10">
            <div class="text-2xl md:text-3xl font-bold text-[#4745C9] mb-2">50+</div>
            <div class="text-sm text-gray-600">Industries Served</div>
          </div>
          <div class="text-center p-4 rounded-lg bg-gradient-to-br from-[#f2ff00]/10 to-[#4745C9]/10">
            <div class="text-2xl md:text-3xl font-bold text-[#4745C9] mb-2">99%</div>
            <div class="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div class="text-center p-4 rounded-lg bg-gradient-to-br from-[#f2ff00]/10 to-[#4745C9]/10">
            <div class="text-2xl md:text-3xl font-bold text-[#4745C9] mb-2">24/7</div>
            <div class="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Brand data with icons representing different company types
  const brands = ref([
    {
      name: "TechCorp Solutions",
      icon: "pi pi-desktop",
      industry: "Technology"
    },
    {
      name: "Global Finance Ltd",
      icon: "pi pi-chart-line",
      industry: "Finance"
    },
    {
      name: "MediCare Systems",
      icon: "pi pi-heart",
      industry: "Healthcare"
    },
    {
      name: "EduTech Institute",
      icon: "pi pi-book",
      industry: "Education"
    },
    {
      name: "RetailMax Chain",
      icon: "pi pi-shopping-cart",
      industry: "Retail"
    },
    {
      name: "LogiFlow Transport",
      icon: "pi pi-truck",
      industry: "Logistics"
    },
    {
      name: "CloudSky Hosting",
      icon: "pi pi-cloud",
      industry: "Cloud Services"
    },
    {
      name: "SecureNet Bank",
      icon: "pi pi-shield",
      industry: "Banking"
    },
    {
      name: "PropTech Realty",
      icon: "pi pi-home",
      industry: "Real Estate"
    },
    {
      name: "AutoDrive Motors",
      icon: "pi pi-car",
      industry: "Automotive"
    },
    {
      name: "FoodChain Express",
      icon: "pi pi-shopping-bag",
      industry: "Food & Beverage"
    },
    {
      name: "EnergyPlus Corp",
      icon: "pi pi-bolt",
      industry: "Energy"
    }
  ]);
  
  onMounted(() => {
    // Component is ready
    console.log('Brand slider component mounted');
  });
  </script>
  
  <style scoped>
  @keyframes slide-infinite {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .animate-slide-infinite {
    animation: slide-infinite 40s linear infinite;
  }
  
  /* Pause animation on hover */
  .animate-slide-infinite:hover {
    animation-play-state: paused;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .animate-slide-infinite {
      animation-duration: 30s;
    }
  }
  
  @media (max-width: 640px) {
    .animate-slide-infinite {
      animation-duration: 25s;
    }
  }
  
  /* Custom scrollbar if needed */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* Smooth gradient transitions */
  .bg-gradient-to-br {
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  }
  
  /* Enhanced hover effects */
  .group:hover .pi {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  </style>