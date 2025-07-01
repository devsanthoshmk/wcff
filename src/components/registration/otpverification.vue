<template>
    <div class="otp-verification-container">
      <!-- Email Input Section -->
      <div class="pt-[8rem] pb-[4rem] bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-blue-900 mb-4">Email Verification</h3>
        
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email-input" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div class="flex gap-2">
            <input
              id="email-input"
              type="email"
              v-model="emailValue"
              placeholder="Enter your email address"
              :disabled="isProcessing"
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100"
              :class="{ 'border-red-500': emailError }"
              @input="onEmailChange"
              @keyup.enter="sendOtp"
            />
            <Button
              type="button"
              @click="sendOtp"
              :disabled="isProcessing || resendCooldown > 0 || !emailValue.trim()"
              :loading="isProcessing && !otpSent"
              :label="otpSent ? (resendCooldown > 0 ? `Resend (${resendCooldown}s)` : 'Resend OTP') : 'Send OTP'"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            />
          </div>
          
          <!-- Email Error Message -->
          <div v-if="emailError" class="mt-2">
            <p class="text-sm text-red-600">{{ emailError }}</p>
          </div>
        </div>
  
        <!-- OTP Input Section (shown only after OTP is sent) -->
        <div v-if="otpSent && !isVerified" class="mb-4">
          <div class="mb-4">
            <p class="text-sm text-gray-600 mb-2">
              An OTP has been sent to: <span class="font-medium text-blue-700">{{ emailValue }}</span>
            </p>
          </div>
  
          <!-- OTP Input -->
          <div class="mb-4">
            <label for="otp-input" class="block text-sm font-medium text-gray-700 mb-2">
              Enter 4-digit OTP *
            </label>
            <div class="flex gap-2">
              <input
                id="otp-input"
                type="text"
                v-model="otpValue"
                placeholder="Enter 4-digit OTP"
                maxlength="4"
                :disabled="isProcessing"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100"
                @keyup.enter="verifyOtp"
              />
              <Button
                type="button"
                @click="verifyOtp"
                :disabled="isProcessing || !otpValue.trim()"
                :loading="isProcessing && otpSent"
                label="Verify"
                class="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors"
              />
            </div>
          </div>
  
          <!-- Instructions -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 class="font-medium text-yellow-800 mb-2">Instructions:</h4>
            <ul class="text-sm text-yellow-700 space-y-1">
              <li>• Check your email inbox for the OTP</li>
              <li>• Enter the 4-digit code in the field above</li>
              <li>• Click "Verify" to confirm your email</li>
              <li>• If you don't receive the OTP, click "Resend OTP"</li>
            </ul>
          </div>
        </div>
  
        <!-- Status Message -->
        <div v-if="statusMessage" class="mb-4">
          <p 
            class="text-sm p-3 rounded-lg"
            :class="{
              'text-blue-700 bg-blue-100 border border-blue-200': status === 'processing',
              'text-green-700 bg-green-100 border border-green-200': status === 'success',
              'text-red-700 bg-red-100 border border-red-200': status === 'error'
            }"
          >
            {{ statusMessage }}
          </p>
        </div>
      </div>
  
      <!-- Success Message -->
      <div v-if="isVerified" class="p-4 bg-green-50 border border-green-200 rounded-lg mx-4">
        <div class="flex items-center gap-2">
          <i class="pi pi-check-circle text-green-600"></i>
          <span class="text-green-800 font-medium">Email verified successfully!</span>
        </div>
        <p class="text-sm text-green-700 mt-1">You can now proceed with your registration.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onUnmounted } from 'vue'
  import Button from 'primevue/button'
  
  // Emits
  const emit = defineEmits(['verified', 'error'])
  
  // Reactive data
  const emailValue = ref('')
  const emailError = ref('')
  const otpValue = ref('')
  const isProcessing = ref(false)
  const isVerified = ref(false)
  const otpSent = ref(false)
  const statusMessage = ref('')
  const status = ref('') // 'processing' | 'success' | 'error'
  const resendCooldown = ref(0)
  let cooldownTimer = null
  
  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  // Handle email input change
  const onEmailChange = () => {
    // Clear email error when user starts typing
    if (emailError.value) {
      emailError.value = ''
    }
    
    // If email changes after OTP was sent, reset OTP flow
    if (otpSent.value) {
      resetOtpFlow()
    }
  }
  
  // Reset OTP flow (when email changes)
  const resetOtpFlow = () => {
    otpSent.value = false
    otpValue.value = ''
    statusMessage.value = ''
    status.value = ''
    resendCooldown.value = 0
    if (cooldownTimer) {
      clearInterval(cooldownTimer)
    }
  }
  
  // Send OTP function
  const sendOtp = async () => {
    // Validate email first
    if (!emailValue.value.trim()) {
      emailError.value = 'Email address is required'
      return
    }
    
    if (!validateEmail(emailValue.value)) {
      emailError.value = 'Please enter a valid email address'
      return
    }
    
    // Clear email error if validation passes
    emailError.value = ''
    
    try {
      isProcessing.value = true
      statusMessage.value = 'Sending OTP to your email...'
      status.value = 'processing'
  
      const response = await fetch('/.netlify/functions/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue.value, editmode: true})
      })
      const payload = await response.json()
      console.log("send otp response", payload)
      if (response.ok) {
        otpSent.value = true
        statusMessage.value = `OTP sent to ${emailValue.value}. Please check your inbox.`
        status.value = 'success'
        startResendCooldown()
      } else if (payload.isreal) {
          statusMessage.value = payload.error
          status.value = 'error'
      } else {

        throw new Error('Failed to send OTP')
      }
      
    } catch (error) {
      statusMessage.value = 'Failed to send OTP. Please try again.'
      status.value = 'error'
      emit('error', { message: 'Failed to send OTP', error })
    } finally {
      isProcessing.value = false
    }
  }
  
  // Verify OTP function
  const verifyOtp = async () => {
    if (!otpValue.value.trim()) {
      statusMessage.value = 'Please enter the OTP'
      status.value = 'error'
      return
    }
    
    try {
      isProcessing.value = true
      statusMessage.value = 'Verifying OTP...'
      status.value = 'processing'
      
      const response = await fetch('/.netlify/functions/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: emailValue.value, 
          otp: otpValue.value,
          getData: true 
        })
      })
  
      const {success, user_data, error} = await response.json()

      if (response.ok && success) {
        isVerified.value = true
        statusMessage.value = 'Email verified successfully!'
        status.value = 'success'
        console.log("user data", JSON.stringify(user_data, null, 2), user_data.available_period.split(' to '))
        emit('verified', {user_data: user_data })
      } else {
        throw new Error(error || 'OTP verification failed')
      }
    } catch (error) {
      statusMessage.value = error.message || 'OTP verification failed. Please try again.'
      status.value = 'error'
      emit('error', { message: 'OTP verification failed', error })
    } finally {
      isProcessing.value = false
    }
  }
  
  // Start resend cooldown
  const startResendCooldown = () => {
    resendCooldown.value = 30
    cooldownTimer = setInterval(() => {
      resendCooldown.value--
      if (resendCooldown.value <= 0) {
        clearInterval(cooldownTimer)
      }
    }, 1000)
  }
  
  // Reset component state
  const reset = () => {
    emailValue.value = ''
    emailError.value = ''
    otpValue.value = ''
    isProcessing.value = false
    isVerified.value = false
    otpSent.value = false
    statusMessage.value = ''
    status.value = ''
    resendCooldown.value = 0
    if (cooldownTimer) {
      clearInterval(cooldownTimer)
    }
  }
  
  // Expose methods for parent component
  defineExpose({
    sendOtp,
    verifyOtp,
    reset,
    isVerified
  })
  
  // Lifecycle hooks
  onUnmounted(() => {
    if (cooldownTimer) {
      clearInterval(cooldownTimer)
    }
  })
  </script>
  
  <style scoped>
  .otp-verification-container {
    width: 100%;
  }
  
  /* Ensure consistent button styling */
  .p-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  .p-button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* Input focus styles */
  input:focus {
    outline: none;
  }
  
  /* Smooth transitions */
  * {
    transition: all 0.2s ease;
  }
  </style>