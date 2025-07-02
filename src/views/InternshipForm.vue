<template>
  <main>

    <!-- Registration Form Section -->
    <section v-if="!showOtpVerificationComp || isEmailVerified" class="pt-[6rem] pb-[2rem]">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="bg-white rounded-xl shadow-lg p-8">
          <!-- Title -->
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Registration</h2>
            <p class="text-gray-600">Join our internship program and kickstart your career</p>
          </div>

          <!-- Registration Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Full Name -->
              <div>
                <label for="fullname" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  v-model="formData.fullname"
                  placeholder="Enter your name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="Enter your email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <!-- Phone Number -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="Enter your number"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <!-- College -->
              <div>
                <label for="college" class="block text-sm font-medium text-gray-700 mb-2">
                  College *
                </label>
                <input
                  type="text"
                  id="college"
                  v-model="formData.college"
                  placeholder="Enter your college name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <!-- Domain Selection -->
              <div>
                <label for="domain" class="block text-sm font-medium text-gray-700 mb-2">
                  Domain *
                </label>
                <select
                  id="domain"
                  v-model="formData.domain"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Select Domain</option>
                  <optgroup label="Technical Domains">
                    <option value="AI">AI</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                  </optgroup>
                  <optgroup label="Non-Technical Domains">
                    <option value="Editing">Editing</option>
                    <option value="Cinematography">Cinematography</option>
                    <option value="Filmmaking">Filmmaking</option>
                    <option value="Content Creation">Content Creation</option>
                  </optgroup>
                </select>
              </div>

              <!-- Department Selection -->
              <div>
                <label for="department" class="block text-sm font-medium text-gray-700 mb-2">
                  Department *
                </label>
                <select
                  id="department"
                  v-model="formData.department"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                >
                  <option value="">Select Department</option>
                  <option value="Computer Science And Business Systems">Computer Science And Business Systems</option>
                  <option value="Computer Science Engineering">Computer Science Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                  <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                  <option value="Science">Science</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <!-- Other Department (conditional) -->
            <div v-if="formData.department === 'Other'">
              <label for="otherDepartment" class="block text-sm font-medium text-gray-700 mb-2">
                Please specify your department *
              </label>
              <input
                type="text"
                id="otherDepartment"
                v-model="formData.otherDepartment"
                placeholder="Enter your department"
                :required="formData.department === 'Other'"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <!-- Available Period -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Available Period (For 2025) *
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- From Month -->
                <div>
                  <label for="fromMonth" class="block text-xs text-gray-600 mb-1">From Month</label>
                  <select
                    id="fromMonth"
                    v-model="formData.fromMonth"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="">From Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                </div>

                <!-- To Month -->
                <div>
                  <label for="toMonth" class="block text-xs text-gray-600 mb-1">To Month</label>
                  <select
                    id="toMonth"
                    v-model="formData.toMonth"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="">To Month</option>
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Mode Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Mode *
              </label>
              <div class="flex gap-6">
                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="online"
                    v-model="formData.mode"
                    required
                    class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-gray-700">Online</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="offline"
                    v-model="formData.mode"
                    required
                    class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span class="ml-2 text-gray-700">Offline</span>
                </label>
              </div>
            </div>

            <!-- Certificate Type Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2" :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''">
                Certificate Type *
              </label>
              <div class="flex gap-6">
                <label class="flex items-center cursor-pointer" :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''">
                  <input
                    type="radio"
                    name="certificateType"
                    value="digital"
                    v-model="formData.certificateType"
                    required
                    :disabled="isEmailVerified && !oldreg"
                    class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''"
                  />
                  <span class="ml-2 text-gray-700">Digital Certificate</span>
                </label>
                <label class="flex items-center cursor-pointer" :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''">
                  <input
                    type="radio"
                    name="certificateType"
                    value="physical"
                    v-model="formData.certificateType"
                    required
                    :disabled="isEmailVerified && !oldreg"
                    class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''"
                  />
                  <span class="ml-2 text-gray-700">Physical Certificate</span>
                </label>
              </div>
            </div>
            <!-- UPI Payment Section -->
            <div v-if="showUpiSection && (!isEmailVerified || oldreg)">
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 class="text-lg font-semibold text-blue-900 mb-4">Payment Details</h3>
                
                <!-- Amount Display -->
                <div class="mb-4">
                  <div class="text-center bg-white border-2 border-blue-300 rounded-lg p-4">
                    <p class="text-sm text-gray-600 mb-1">Amount to Pay</p>
                    <p class="text-3xl font-bold text-blue-600">₹{{ amount }}</p>
                    <p class="text-sm text-gray-500">
                      {{ formData.certificateType === 'digital' ? 'Digital Certificate' : 'Physical Certificate' }}
                    </p>
                  </div>
                </div>

                <!-- UPI ID Display -->
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                  <div class="flex items-center gap-2">
                    <input 
                      type="text" 
                      :value="upiId" 
                      readonly 
                      class="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                    <button 
                      type="button" 
                      @click="copyUpiId"
                      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <!-- QR Code Placeholder -->
                <div class="mb-4 text-center">
                  <div class="inline-block bg-white p-4 border-2 border-gray-300 rounded-lg">
                    <div class="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <img src="/upi-qr.jpg" alt="QR Code" class="w-auto h-auto" />
                    </div>
                    <p class="text-xs text-gray-400">Scan to pay ₹{{ amount }}</p>
                  </div>
                </div>


                <!-- Payment Instructions -->
                <div class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 class="font-medium text-yellow-800 mb-2">Payment Instructions:</h4>
                  <ol class="text-sm text-yellow-700 space-y-1">
                    <li>1. Pay ₹{{ amount }} using the UPI ID or QR code above</li>
                    <li>2. Take a screenshot of the successful payment</li>
                    <li>3. Upload the screenshot below</li>
                    <li>4. Verify OTP sent to your email</li>
                    <li>5. Complete your registration</li>
                    <li>6. If you have any issues, please contact us at <a style="text-decoration: underline;" href="mailto:wcff.feedback@gmail.com">wcff.feedback@gmail.com</a></li>
                    <li>7. You can't edit your Certificate Type and Payment Method after submission.</li>
                  </ol>
                </div>
              </div>
            </div>


            <!-- Payment Screenshot Upload -->
            <div>
              <label for="paymentScreenshot" class="block text-sm font-medium text-gray-700 mb-2" :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''">
                Payment Screenshot *
              </label>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="paymentScreenshot"
                  ref="fileInput"
                  @change="handleFileUpload"
                  accept="image/*"
                  required
                  :disabled="isEmailVerified && !oldreg"
                  class="hidden"
                />
                <div v-if="!formData.paymentScreenshot" @click="$refs.fileInput.click()" class="cursor-pointer" :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''">
                  <i class="pi pi-cloud-upload text-4xl text-gray-400 mb-4"></i>
                  <p class="text-gray-600 mb-2">Click to upload payment screenshot</p>
                  <p class="text-sm text-gray-500">PNG, JPG up to 2MB (Image should be clear and readable)</p>
                </div>
                <div v-else class="space-y-2" :class="{ '!cursor-not-allowed !opacity-50 ': isEmailVerified && !oldreg }"  :title="isEmailVerified && !oldreg ? 'You can’t edit this! Please mail us if you need to.' : ''">
                  <div class="flex items-center justify-center gap-2">
                    <i class="pi pi-file text-green-600"></i>
                    <span class="text-green-600 font-medium">{{ formData.paymentScreenshot.name }}</span>
                  </div>
                  <p class="text-sm text-gray-500">Size: {{ formatFileSize(formData.paymentScreenshot.size) }}</p>
                  <button
                    type="button"
                    @click="removeFile"
                    class="text-red-600 hover:text-red-800 text-sm underline"
                  >
                    Remove file
                  </button>
                </div>
              </div>
              <div v-if="fileError" class="text-red-600 text-sm">
                {{ fileError }}
              </div>
            </div>

            <!-- OTP Verification (show only after image upload) -->
            <div v-if="showOtpField && !isOtpVerified">
              <label for="otp" class="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP *
              </label>
              <div class="flex gap-2">
                <input
                  type="text"
                  id="otp"
                  v-model="otpValue"
                  placeholder="Enter 4-digit OTP"
                  maxlength="6"
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <Button
              type="button"
              @click="sendotp"
              label="Resend OTP"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            />
                <button
                  type="button"
                  @click="verifyOtp"
                  class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  Verify
                </button>
              </div>
              <p class="text-sm mt-1" :class="{'text-blue-600': otpmsg.status === 'processing', 'text-green-600': otpmsg.status === 'success', 'text-red-600': otpmsg.status === 'error'}">{{ otpmsg.message }}</p>

            </div>



            <!-- OTP Verified Message -->
            <div v-if="isOtpVerified" class="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
              <div class="flex items-center gap-2">
                <i class="pi pi-check-circle text-green-600"></i>
                <span class="text-green-800 font-medium">Email verified successfully!</span>
              </div>
            </div>




            <!-- Submit Button -->
            <!-- modified -->
            <div class="pt-4">
              <Button
                type="submit"
                :loading="isSubmitting"
                :disabled="isSubmitting || (showOtpField && !isOtpVerified)"
                :label="showOtpField && !isOtpVerified ? 'Verify OTP First' : 'Register'"
                icon="pi pi-check"
                class="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:bg-gray-400"
              />
            </div>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="mt-6">
            <div
              :class="[
                'p-4 rounded-lg',
                submitSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
              ]"
            >
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OTP Verification Component -->
    <div v-if="showOtpVerificationComp">
      <OtpVerification 
        @verified="handleEmailVerified"
        @error="handleEmailErrored"
        ref="otpComponent"
      />
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <!-- Newsletter Section -->
        <div class="text-center mb-8">
          <h4 class="text-xl font-semibold mb-2">Join Our Newsletter</h4>
          <p class="text-gray-300 mb-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              v-model="newsletterEmail"
              placeholder="Enter your email"
              class="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button
              type="submit"
              label="Subscribe"
              class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            />
          </form>
        </div>

        <!-- Footer Links -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">WCFF</h3>
            <div class="space-y-2 text-gray-300">
              <p>CHENNAI, TAMILNADU || PUNE, MAHARASTRA</p>
              <p><strong>Phone:</strong> +91 79040 07861</p>
              <p><strong>Email:</strong> clientworkwcff@gmail.com</p>
            </div>
          </div>

          <!-- Useful Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Useful Links</h4>
            <ul class="space-y-2 text-gray-300">
              <li><router-link to="/" class="hover:text-white transition-colors">Home</router-link></li>
              <li><router-link to="/about" class="hover:text-white transition-colors">About</router-link></li>
              <li><router-link to="/services" class="hover:text-white transition-colors">Services</router-link></li>
              <li><router-link to="/contact" class="hover:text-white transition-colors">Contact Us</router-link></li>
            </ul>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <p class="text-gray-300 mb-4">Stay connected with us on social media for the latest updates and news.</p>
            <div class="flex gap-4">
              <a href="https://www.instagram.com/webcraftersfoundation2025" class="text-gray-300 hover:text-white transition-colors">
                <i class="pi pi-facebook text-xl"></i>
              </a>
              <a href="https://www.instagram.com/webcraftersfoundation2025" class="text-gray-300 hover:text-white transition-colors">
                <i class="pi pi-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/web-crafters-foundation-llp/" class="text-gray-300 hover:text-white transition-colors">
                <i class="pi pi-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center pt-8 border-t border-gray-700 text-gray-300">
          <p>© <span class="font-semibold">WCFF</span> All Rights Reserved</p>
          <p class="text-sm mt-1">Designed by BootstrapMade</p>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch, inject } from 'vue'
import { createClient } from '@supabase/supabase-js'
import Button from 'primevue/button'

import OtpVerification from '@/components/registration/OtpVerification.vue';

const props = defineProps({
  editMode: {
    type: Boolean,
    default: false
  }
})



const emit = defineEmits(['verified', 'error']);
let oldreg=false;
const handleEmailVerified = (data) => {

  console.log("User data:", data.user_data, data.user_data.available_period.split(' to '))
  const user_data = data.user_data;
  if (!user_data.certificate_type) {
    oldreg = true;
  }
  // 1. Direct mappings
  formData.fullname          = user_data.name
  formData.email             = user_data.email
  formData.phone             = user_data.mobile_number
  formData.college           = user_data.college || ''
  formData.domain            = user_data.domain
  formData.department        = user_data.department || ''
  formData.mode              = user_data.mode
  formData.certificateType   = user_data.certificate_type || ''

  // 2. Split the available_period into fromMonth / toMonth
  const [from, to] = user_data.available_period.split(' to ')
  formData.fromMonth = from.trim()
  formData.toMonth   = to.trim()

  // 3. Payment screenshot URL
  formData.paymentScreenshotUrl = user_data.payment_screenshot || ''

  // 4. If you treat “otherDepartment” specially:
  if ((user_data.department || '').toLowerCase() === 'other') {
    formData.otherDepartment = user_data.department || ''
    formData.department = ''
  }
  isEmailVerified.value = true
  showOtpVerificationComp.value = false
}

const handleEmailErrored = (error) => {
  console.error('Email verification error:', error)
  
}


let filepath;
// API endpoint for registration (Netlify Function)
const apiUrl = '/.netlify/functions/reg-data'

// Supabase config for newsletter
const SUPABASE_URL = 'https://msqgqddktvaoadeiecpa.supabase.co'
const SUPABASE_ANON_KEY = '<YOUR_SUPABASE_ANON_KEY>'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Newsletter state
const newsletterEmail = ref('')
const newsletterError = ref('')
const isSubmittingNewsletter = ref(false)
const newsletterMessage = ref('')
const newsletterSuccess = ref(false)
const showUpiSection = ref(false)
const showOtpField = ref(false)
const otpValue = ref('')
const isOtpVerified = ref(false)
const uploadedFileName = ref('')
// for edit registration
const showOtpVerificationComp = inject('showOtpVerificationComp')
const isEmailVerified = ref(false)

console.log('Edit Mode:', props.editMode)
if (props.editMode) {
  showOtpVerificationComp.value = true
}

// UPI Configuration
const upiId = 'rockyraghav45@ptyes' // Replace with your actual UPI ID
const merchantName = 'Ragavan S(Founder of WCFF)'

// Computed amount based on certificate type
const amount = computed(() => {
  return formData.certificateType === 'digital' ? 199 : 299
})

// Copy UPI ID to clipboard
const copyUpiId = async () => {
  try {
    await navigator.clipboard.writeText(upiId)
    // You can add a toast notification here
    alert('UPI ID copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy UPI ID:', err)
  }
}

// Registration state
const formData = reactive({ 
  fullname: '', 
  email: '', 
  phone: '', 
  college: '',
  domain: '', 
  department: '',
  otherDepartment: '',
  fromMonth: '', 
  toMonth: '', 
  mode: '',
  certificateType: '',
  paymentScreenshot: null,
  paymentScreenshotUrl: ''
})

const errors = reactive({ 
  fullname: '', 
  email: '', 
  phone: '', 
  college: '',
  domain: '', 
  department: '',
  otherDepartment: '',
  period: '', 
  mode: '',
  certificateType: '',
  paymentScreenshot: '',
  paymentScreenshotUrl: ''

})


// Watch for certificate type changes to show UPI section
watch(() => formData.certificateType, (newVal) => {
  if (newVal) {
    showUpiSection.value = true
  }
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const fileError = ref('')
const otpmsg = ref({
  message: '',
  status: '' // 'processing' | 'success' | 'error'
})

// Domain options example
const domainOptions = [
  { value: 'web-dev', text: 'Web Development' },
  { value: 'data-science', text: 'Data Science' },
  { value: 'design', text: 'Design' }
]

// Months array
const months = ['July', 'August', 'September', 'October', 'November', 'December' ]

// Computed period
const period = computed(() => {
  if (formData.fromMonth && formData.toMonth) {
    const fromIdx = months.indexOf(formData.fromMonth)
    const toIdx = months.indexOf(formData.toMonth)
    return fromIdx <= toIdx ? `${formData.fromMonth} to ${formData.toMonth}` : ''
  }
  return ''
})



// Modified file upload handler
const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  fileError.value = ''
  
  if (!file) return
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    fileError.value = 'Please upload an image file (PNG, JPG, etc.)'
    event.target.value = ''
    return
  }
  
  // Validate file size (2MB limit)
  if (file.size > 2 * 1024 * 1024) {
    fileError.value = 'File size must be less than 2MB'
    event.target.value = ''
    return
  }
  
  formData.paymentScreenshot = file
  
  // Send OTP after successful image upload
  await sendotp()

}
let filePath;
// OTP Verification
const verifyOtp = async () => {
  if (!otpValue.value.trim()) {
    fileError.value = 'Please enter OTP'
    return
  }
  console.log(formData.paymentScreenshot)
  
  try {
    const response = await fetch('/.netlify/functions/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: formData.email, 
        otp: otpValue.value,
        filename: `${formData.certificateType}-${formData.email}.${formData.paymentScreenshot.name.split('.').pop()}`,
      })
    })

    const { success, url, filename } = await response.json()
    console.log(success, url, filename)
    if (response.status !== 200) {
      throw new Error('OTP verification failed. Please try again.')
    }
    if (!success) {
      throw new Error('OTP verified successfully, but file upload failed. Please try again.')
    }
    if (response.ok && url) {
      isOtpVerified.value = true
      uploadedFileName.value = filename
      submitMessage.value = 'OTP verified successfully! You can now complete your registration.'
      submitSuccess.value = true
      fileError.value = ''
      filePath = `payment-screenshot/${filename}`;

      fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': formData.paymentScreenshot.type },
        body: formData.paymentScreenshot,
      }).then(response => {
        if (!response.ok) {
          throw new Error('File upload failed. Please try again.')
        } else {
          formData.paymentScreenshotUrl = `${SUPABASE_URL}/storage/v1/object/public/${filePath}`;
      console.log('File uploaded successfully:', formData.paymentScreenshotUrl)
      console.log(`${SUPABASE_URL}/storage/v1/object/public/${filePath}`)
    
        }
      })

      } else {
      throw new Error(data.error || 'Something went wrong please try again.')
    }
  } catch (error) {
    otpmsg.value.message = error.message
    submitSuccess.value = false
  }
}

const sendotp = async () => {
  try {
  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { new Error('Valid email is required.'); }
    showOtpField.value = true
  otpmsg.value.message = 'OTP IS BEING SENT TO YOUR EMAIL. PLEASE WAIT...'
  otpmsg.value.status = 'processing';
    const response = await fetch('/.netlify/functions/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: formData.email.trim(),editmode: isEmailVerified.value })
    })

    const res = await response.json()
    if (response.ok) {
      otpmsg.value.message = `OTP sent to your email ${formData.email}.`
      otpmsg.value.status = 'success'
    } else if (response.status === 400 && res.isreal === true) {
      otpmsg.value.message = res.error
      otpmsg.value.status = 'error'
    } else {
      throw new Error('Failed to send OTP')
    }
  } catch (error) {
    console.error('Error sending OTP:', error)
    otpmsg.value.message = 'Failed to send OTP. Please check your email and try again.'
    otpmsg.value.status = 'error'
  }
}

function removeFile() {
  formData.paymentScreenshot = null
  fileError.value = ''
  // Reset the file input
  const fileInput = document.getElementById('paymentScreenshot')
  if (fileInput) {
    fileInput.value = ''
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Handle newsletter submit (using Supabase)
async function handleNewsletterSubmit() {
  newsletterError.value = ''
  newsletterMessage.value = ''
  newsletterSuccess.value = false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.value)) {
    newsletterError.value = 'Please enter a valid email.'
    return
  }
  isSubmittingNewsletter.value = true
  try {
    const { error } = await supabase.from('newsletter').insert([{ email: newsletterEmail.value.trim() }])
    if (error) throw error
    newsletterSuccess.value = true
    newsletterMessage.value = 'Subscribed successfully!'
    newsletterEmail.value = ''
  } catch (err) {
    newsletterSuccess.value = false
    newsletterMessage.value = err.message || 'Subscription failed.'
  } finally {
    isSubmittingNewsletter.value = false
  }
}

// Clear errors
function clearErrors() {
  Object.keys(errors).forEach(key => { errors[key] = '' })
  submitMessage.value = ''
  fileError.value = ''
}

// Validate registration form
function validateForm() {
  clearErrors()
  let valid = true
  
  if (!formData.fullname.trim()) { errors.fullname = 'Name is required.'; valid = false }
  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { errors.email = 'Valid email is required.'; valid = false }
  if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) { errors.phone = 'Valid phone number is required.'; valid = false }
  if (!formData.college.trim()) { errors.college = 'College is required.'; valid = false }
  if (!formData.domain) { errors.domain = 'Please select a domain.'; valid = false }
  if (!formData.department) { errors.department = 'Please select a department.'; valid = false }
  if (formData.department === 'Other' && !formData.otherDepartment.trim()) { errors.otherDepartment = 'Please specify your department.'; valid = false }
  if (!formData.fromMonth || !formData.toMonth || !period.value) { errors.period = 'Please select a valid period.'; valid = false }
  if (!formData.mode) { errors.mode = 'Please select a mode.'; valid = false }
  if (!isEmailVerified.value || oldreg) {
    console.log("isEmailVerified.value", isEmailVerified.value, "oldreg", oldreg)
    if (!formData.certificateType) { errors.certificateType = 'Please select certificate type.'; valid = false }
    if (!formData.paymentScreenshot) { errors.paymentScreenshot = 'Payment screenshot is required.'; valid = false }
    if (showOtpField.value && !isOtpVerified.value) {
      errors.paymentScreenshot = 'Please verify OTP first.';
      valid = false
    }
  }

  // Setting up invalid month error
  if (formData.fromMonth && formData.toMonth && months.indexOf(formData.fromMonth) > months.indexOf(formData.toMonth)) {
    errors.period = 'Please select a valid period.';
    valid = false;
  }
  return valid
}

// Modified form submission
const handleSubmit = async () => {
  console.log("called handleSubmit")
  if (!validateForm()) {
    console.log("Form validation failed");
    console.log(errors)
    return
  }

  if (!isOtpVerified.value && !isEmailVerified.value) {
    console.log("OTP not verified");
    submitMessage.value = 'Please verify OTP first';
    submitSuccess.value = false;
    return;
  }
  
  isSubmitting.value = true
  try {
    const formDataToSend = {
  name: formData.fullname,
  email: formData.email,
  mobile_number: formData.phone,
  college: formData.college,
  domain: formData.domain,
  department: formData.department === 'Other' ? formData.otherDepartment : formData.department,
  available_period: period.value,
  mode: formData.mode,
  certificate_type: formData.certificateType,
  payment_screenshot: formData.paymentScreenshotUrl
};

    Object.entries(formDataToSend).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
    })

    console.log("serious problem")
    // Your existing API call code here...
    const res = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ payload: formDataToSend, update_form: isEmailVerified.value, filename: formData.paymentScreenshotUrl ? formData.paymentScreenshotUrl.split('/').pop() : '' }),
      });
  
    const resData = await res.json();
    if (!res.ok) {
      console.error('API error:', resData.error);
      if (res.status === 23505) {
        submitSuccess.value = false
        submitMessage.value = 'You have already registered for this internship.'
      } else {
        submitSuccess.value = false
        submitMessage.value = resData.error.message || 'Registration failed. Please try again.'
      }
      return;
    }
    submitSuccess.value = true
    submitMessage.value = 'Registration successful!'
    
    // Reset form including new fields
    Object.assign(formData, { 
      fullname: '', 
      email: '', 
      phone: '', 
      college: '',
      domain: '', 
      department: '',
      otherDepartment: '',
      fromMonth: '', 
      toMonth: '', 
      mode: '',
      certificateType: '',
      paymentScreenshot: null,
      paymentScreenshotUrl: ''
    })
    
    // Reset new fields
    showUpiSection.value = false
    showOtpField.value = false
    otpValue.value = ''
    isOtpVerified.value = false
    uploadedFileName.value = ''
    
    // Reset file input
    const fileInput = document.getElementById('paymentScreenshot')
    if (fileInput) {
      fileInput.value = ''
    }
    
  } catch (err) {
    submitSuccess.value = false
    submitMessage.value = err.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Custom styles for the internship registration page */
.container {
  max-width: 1200px;
}

/* Form focus states */
input:focus,
select:focus {
  outline: none;
}

/* Button hover effects */
.p-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Smooth transitions */
* {
  transition: all 0.2s ease;
}

/* Custom radio button styling */
input[type="radio"]:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

/* Custom select styling */
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1rem;
  padding-right: 2.5rem;
}

/* File upload area styling */
.border-dashed:hover {
  background-color: #f8fafc;
}
</style>