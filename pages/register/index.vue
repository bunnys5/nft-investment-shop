<template>
  <div class="container">
    <div class="container-2 justify-content-center flex align-items-center">
      <div
        class="content p-8 gap-7 flex flex-column align-content-center justify-content-center"
      >
        <div
          class="title flex justify-content-center flex-column align-items-center"
        >
          <div class="text-white text-4xl">
            Asset<span class="X" style="color: #0f7dff">X</span>
          </div>
          <div class="flex flex-column align-items-center gap-2">
            <h3
              class="text-base font-medium"
              style="color: var(--linear-light-grey, #a8b8d8)"
            >
              ยินดีต้อนรับ
            </h3>
          </div>
        </div>
        <div class="input-group flex flex-column gap-3">
          <div class="flex flex-column gap-2">
            <h3
              class="text-base font-medium text-center"
              style="color: var(--linear-light-grey, #a8b8d8)"
            >
              เข้าสู่ระบบ
            </h3>
            <label class="text-white opacity-50" for="username"
              >ผู้ใช้งาน</label
            >
            <InputText
              class="border-round-lg text-primary h-3rem"
              type="username"
              style="
                background: rgba(255, 255, 255, 0.1);
                border: rgba(255, 255, 255, 0.1);
              "
              id="username"
              v-model="value"
              aria-describedby="username-help"
            />
            <small class="text-white" id="username-help"
              >Enter your username to reset your password.</small
            >
          </div>
          <div class="flex flex-column">
            
            
          </div>
          
        </div>
        <div class="button-group w-full flex flex-column gap-5">
          <div class="buttone-group-2 w-full">
            <Button
              class="w-full border-round-lg"
              style="
                height: 50px;
                background: rgba(28, 112, 250, 0.7);
                border: rgba(28, 112, 250, 0.7);
              "
              label="Sign in"
            />
          </div>
          <div class="button-group-3 w-full">
            <Button
              class="w-full border-round-lg"
              style="
                height: 50px;
                background: rgba(28, 112, 250, 0.7);
                border: rgba(28, 112, 250, 0.7);
              "
              label="Sign in with Cyberpay"
            />
          </div>
        </div>
        <div class="w-full align-items-center">
          <p class="text-white text-center">
            Already have an account ?
            <NuxtLink class="no-underline" style="color: #0f7dff" to="./"
              >Sign In</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url(../../styles/register/index.css);
</style>

<script></script>
