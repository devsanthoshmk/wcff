<template>
    <main>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team. We'd love to hear from you!"
      />
      
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <!-- Contact Information -->
            <div class="lg:pl-8">
              <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
              <ContactInfo />
              
              <!-- Social Media Links -->
              <div class="mt-12">
                <h3 class="font-semibold text-lg mb-4">Follow Us</h3>
                <div class="flex gap-4">
                  <a v-for="social in socialLinks" 
                     :key="social.icon"
                     :href="social.link"
                     class="p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <i :class="social.icon + ' text-xl'"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ctasection/>
    </main>
  </template>
  
  <script setup>
  import PageHeader from '@/components/shared/PageHeader.vue';
  import ContactForm from '@/components/contact/ContactForm.vue';
  import ContactInfo from '@/components/contact/ContactInfo.vue';
  import ctasection from '@/components/shared/CTASection.vue';
  
  const socialLinks = [
    { icon: 'pi pi-instagram',link: "https://www.instagram.com/webcraftersfoundation2025" },
    { icon: 'pi pi-linkedin', link: "https://www.linkedin.com/company/web-crafters-foundation-llp/" },
    { icon: 'pi pi-map-marker', link: 'https://maps.app.goo.gl/cFxUSos2UBT9xU1z7'}
  ];
  </script>