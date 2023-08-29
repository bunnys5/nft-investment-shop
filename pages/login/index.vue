<template>
  <!-- <Navbar /> -->

  <div class="container">
    <div class="container-2 justify-content-center flex align-items-center">
      <div
        class="content p-8 gap-7 flex flex-column align-content-center justify-content-center"
      >
        <div
          class="title flex justify-content-center flex-column align-items-center"
        >
          <div class="text-white text-5xl">
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
              v-model="name"
              class="border-round-lg text-primary h-3rem"
              type="username"
              style="
                background: rgba(255, 255, 255, 0.1);
                border: rgba(255, 255, 255, 0.1);
              "
              id="username"
              aria-describedby="username-help"
            />
            <small id="wrong_Email" class="text-white"
              >Enter your username to reset your password.</small
            >
          </div>
          <div class="flex flex-column gap-2">
            <label class="text-white opacity-50" for="username">รหัสผ่าน</label>
            <InputText
              v-model="password"
              type="password"
              class="border-round-lg text-primary h-3rem"
              style="
                background-color: rgba(255, 255, 255, 0.1);
                border: rgba(255, 255, 255, 0.1);
              "
              id="username"
              aria-describedby="username-help"
            />
            <small id="wrong_Password" class="text-white"
              >Enter your username to reset your password.</small
            >
          </div>
        </div>
        <div class="button-group w-full flex flex-column gap-5">
          <div class="buttone-group-2 w-full">
            <Button
              @click="login"
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
              @click="loginSSO"
              type="button"
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
            Don't have an account yet?
            <NuxtLink class="no-underline" style="color: #0f7dff" to="./"
              >Sign up</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../../styles/login/index.css");
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },

  methods: {
    login: async function (event) {
      try {
        var password_check = document.getElementById("wrong_Password");
        var display_name = document.getElementById("wrong_Email");

        if (this.name == "")
          return (display_name.innerHTML = "อีเมลไม่ถูกต้อง");
        else display_name.innerHTML = "";
        if (this.password == "")
          return (password_check.innerHTML = "รหัสผ่านไม่ถูกต้อง");
        else password_check.innerHTML = "";

        const userNameCheck = /^[A-Za-z0-9]+$/.test(this.name);
        const passwordCheck = /^[A-Za-z0-9]+$/.test(this.password);

        if (userNameCheck) {
          display_name.innerHTML = "ชื่อผู้ใช้งานไม่ถูกต้อง";
        }

        if (passwordCheck) {
          password_check.innerHTML = "รหัสผ่านไม่ถูกต้อง";
        }

        if (userNameCheck) {
          let responseData = (
            await axios.post(
              `http://localhost:3000/auth/customer/signin`,
              {
                name: this.name,
                password: this.password,
              },
              { withCredentials: true }
            )
          ).data;
          console.log(responseData);

          // localStorage.setItem("cookie", responseData.cookie);
          // // location.href = location.origin + `/customer`;
          // console.log(localStorage.getItem("cookie"));
          navigateTo("./");
        }
      } catch (e) {
        console.log("Error: " + e.message);
      }
    },
    loginSSO: async function (event) {
      try {
        let responseData = (
          await axios.get(`http://localhost:5000/auth/cyberpay`)
        ).data;
        const reponseDataBefore = responseData.public_key.toString();
        console.log(reponseDataBefore);

        let responseDataAfter = await axios.post(
          `http://localhost:5000/auth/signin/cyberpay/`,
          { public_key: responseData.public_key},
          { withCredentials: true }
        );
        console.log(responseDataAfter);

        // localStorage.setItem("cookie", responseData.cookie);
        // // location.href = location.origin + `/customer`;
        // console.log(localStorage.getItem("cookie"));
      } catch (e) {
        console.log("Error: " + e.message);
      }
    },
  },
};
</script>
