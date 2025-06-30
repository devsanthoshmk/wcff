<template>
    <main>
      <!-- Hero Section -->
      <section class="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8 pt-8 md:mt-0 md:pt-4">
          <!-- Left Content -->
          <div class="text-left">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600" style="line-height: 1.25!important;">
              Internship <span class="relative">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Program
                </span>
                <span 
                  class="absolute left-0 -bottom-2 w-full h-2 bg-[#f9ff00] rounded-md"
                ></span>
              </span>
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              Launch your career with hands-on experience in cutting-edge technologies and real-world projects.
            </p>
            <div class="flex gap-4">
              <Button 
                @click="scrollToSection('domains')" 
                label="Explore Domains" 
                icon="pi pi-arrow-right" 
                class="p-button-rounded p-button-lg custom-get-started"
              />
              <Button 
                @click="scrollToSection('process')" 
                label="How to Apply" 
                icon="pi pi-users" 
                class="p-button-rounded p-button-lg custom-our-work"
              />
            </div>
          </div>
          <!-- Right Illustration -->
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Internship program"
              class="p-[50px] rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-2xl"
            />
            <!-- Decorative Elements -->
            <div class="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>
  
      <!-- About Internship Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">About Our Internship Program</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              At Web Crafters Foundation (WCFF), we believe in nurturing the next generation of tech professionals through comprehensive, hands-on learning experiences.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl font-bold mb-6">Why Choose WCFF Internship?</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 bg-[#EBED9E] rounded-full flex items-center justify-center mt-1">
                    <i class="pi pi-check text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">Real-World Projects</h4>
                    <p class="text-gray-600">Work on actual client projects and industry-relevant challenges that make a real impact.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 bg-[#EBED9E] rounded-full flex items-center justify-center mt-1">
                    <i class="pi pi-check text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">Expert Mentorship</h4>
                    <p class="text-gray-600">Learn from experienced professionals who guide you through every step of your journey.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 bg-[#EBED9E] rounded-full flex items-center justify-center mt-1">
                    <i class="pi pi-check text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">Industry Certification</h4>
                    <p class="text-gray-600">Receive recognized certifications that boost your career prospects.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 bg-[#EBED9E] rounded-full flex items-center justify-center mt-1">
                    <i class="pi pi-check text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-2">Flexible Learning</h4>
                    <p class="text-gray-600">Choose between online and offline modes based on your preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img 
                src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                class="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Domains Section -->
      <section id="domains" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Internship Domains</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of technical and creative domains to kickstart your career.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Technical Domains -->
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-desktop text-2xl text-blue-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Web Development</h3>
              <p class="text-gray-600 mb-4">Master modern web technologies including React, Vue.js, Node.js, and database management.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
              </div>
            </div>
  
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-shield text-2xl text-purple-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Cybersecurity</h3>
              <p class="text-gray-600 mb-4">Learn ethical hacking, penetration testing, and security protocols to protect digital assets.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Ethical Hacking</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Pen Testing</span>
              </div>
            </div>
  
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-chart-bar text-2xl text-green-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Data Science</h3>
              <p class="text-gray-600 mb-4">Dive into data analysis, machine learning, and statistical modeling with Python and R.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Python</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">ML</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Analytics</span>
              </div>
            </div>
  
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-cog text-2xl text-orange-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Artificial Intelligence</h3>
              <p class="text-gray-600 mb-4">Explore AI algorithms, neural networks, and deep learning frameworks.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">TensorFlow</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">PyTorch</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">NLP</span>
              </div>
            </div>
  
            <!-- Creative Domains -->
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-video text-2xl text-pink-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Video Editing</h3>
              <p class="text-gray-600 mb-4">Master professional video editing tools and techniques for creating compelling content.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Premiere Pro</span>
                <span class="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">After Effects</span>
              </div>
            </div>
  
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-camera text-2xl text-indigo-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Cinematography</h3>
              <p class="text-gray-600 mb-4">Learn the art of visual storytelling through camera work and lighting techniques.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Lighting</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Composition</span>
              </div>
            </div>
  
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-play text-2xl text-red-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Filmmaking</h3>
              <p class="text-gray-600 mb-4">End-to-end film production from concept development to post-production.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Direction</span>
                <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Production</span>
              </div>
            </div>
  
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
              <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-pencil text-2xl text-yellow-600"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Content Creation</h3>
              <p class="text-gray-600 mb-4">Develop skills in content strategy, copywriting, and digital marketing.</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Copywriting</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Program Structure -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Program Structure</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures comprehensive learning and skill development.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-[#5A58E9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <h3 class="text-xl font-bold mb-4">Foundation Phase</h3>
              <p class="text-gray-600">
                Learn the fundamentals and core concepts of your chosen domain through interactive workshops and tutorials.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-[#EBED9E] rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-black">2</span>
              </div>
              <h3 class="text-xl font-bold mb-4">Practical Phase</h3>
              <p class="text-gray-600">
                Apply your knowledge through hands-on projects and real-world case studies with mentor guidance.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-[#5A58E9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <h3 class="text-xl font-bold mb-4">Industry Phase</h3>
              <p class="text-gray-600">
                Work on live client projects and build a professional portfolio that showcases your skills.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Registration Process -->
      <section id="process" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">How to Apply</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our internship program in just a few simple steps.
            </p>
          </div>
          
          <div class="max-w-4xl mx-auto">
            <div class="space-y-8">
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-[#5A58E9] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Fill Registration Form</h3>
                  <p class="text-gray-600">Complete our online registration form with your personal details and preferred domain.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-[#5A58E9] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Choose Your Mode</h3>
                  <p class="text-gray-600">Select between online or offline learning mode based on your convenience.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-[#5A58E9] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Select Duration</h3>
                  <p class="text-gray-600">Pick your preferred internship duration from our flexible monthly options for 2025.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-[#5A58E9] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Get Confirmation</h3>
                  <p class="text-gray-600">Receive confirmation email with program details and next steps within 24 hours.</p>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <router-link to="/internship/register">
                <Button 
                  label="Start Your Application" 
                  icon="pi pi-arrow-right" 
                  class="p-button-rounded p-button-lg custom-get-started"
                />
              </router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Benefits Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">What You'll Gain</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Our internship program provides comprehensive benefits for your career growth.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-certificate text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Industry Certificate</h3>
              <p class="text-gray-600">Receive a recognized certificate upon successful completion of the program.</p>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-briefcase text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Portfolio Projects</h3>
              <p class="text-gray-600">Build a professional portfolio with real projects that showcase your skills.</p>
            </div>
            
            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-users text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Networking</h3>
              <p class="text-gray-600">Connect with industry professionals and fellow interns for future opportunities.</p>
            </div>
            
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div class="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-star text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Job Recommendations</h3>
              <p class="text-gray-600">Get personalized job recommendations and placement assistance.</p>
            </div>
            
            <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
              <div class="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-book text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Learning Resources</h3>
              <p class="text-gray-600">Access to premium learning materials and resources for continuous growth.</p>
            </div>
            
            <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6">
              <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                <i class="pi pi-clock text-2xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p class="text-gray-600">Learn at your own pace with flexible timing options.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful interns who have launched their careers with WCFF. Your future starts here.
          </p>
          <router-link to="/internship/register">
            <Button 
              label="Apply Now" 
              icon="pi pi-arrow-right" 
              class="p-button-rounded p-button-lg bg-[#EBED9E] text-black hover:bg-[#f2ff00] border-none"
              style="background-color: #EBED9E !important; color: #000 !important; border: none !important;"
            />
          </router-link>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  const scrollToSection = (id) => {
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
    background-color: #f2ff00 !important;
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
    background-color: #4745C9 !important;
  }
  </style>