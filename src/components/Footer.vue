<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <h3 class="font-bold text-xl" style="color: #EBED9E;">WCFF</h3>
          </div>
          <p class="text-gray-400">
            Crafting digital experiences that inspire and innovate.
          </p>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Services</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Web Design</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Development</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Branding</router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-blue-400 transition-colors">Digital Marketing</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/about" class="hover:text-blue-400 transition-colors">About Us</router-link>
            </li>
            <li>
              <router-link to="/features" class="hover:text-blue-400 transition-colors">Features</router-link>
            </li>
            <li>
              <router-link to="/about#careers" class="hover:text-blue-400 transition-colors">Careers</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-blue-400 transition-colors">Contact</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4"  style="color: #EBED9E;">Connect</h3>
          <div class="flex gap-4">
                  <a v-for="social in socialLinks" 
                     :key="social.icon"
                     :href="social.link">
                    <i :class="social.icon + ' text-xl cursor-pointer hover:text-blue-400'"></i>
                  </a>
                </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} WCFF. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
    const socialLinks = [
    { icon: 'pi pi-instagram',link: "https://www.instagram.com/webcraftersfoundation2025" },
    { icon: 'pi pi-linkedin', link: "https://www.linkedin.com/company/web-crafters-foundation-llp/" },
    { icon: 'pi pi-map-marker', link: 'https://maps.app.goo.gl/cFxUSos2UBT9xU1z7'}
  ];
</script>
