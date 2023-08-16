<template>
  <!-- <Navbar /> -->

  <div class="container">
    <div class="container-2 justify-content-center flex align-items-center">
      <div
        class="content p-8 gap-5 flex flex-column align-content-center justify-content-center"
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
          <h3
            class="text-base font-medium text-center"
            style="color: var(--linear-light-grey, #a8b8d8)"
          >
            สมัครผู้ใช้งาน
          </h3>
          <div class="flex flex-column gap-2">
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
              v-model="name"
              aria-describedby="username-help"
            />
            <small class="text-white" id="username-help"
              >Enter your username to reset your password.</small
            >
          </div>
          <div class="flex flex-row gap-3">
            <div class="block">
              <div>
                <label class="text-white opacity-50" for="username"
                  >รหัสผ่าน</label
                >
              </div>
              <div>
                <InputText
                  type="password"
                  class="border-round-lg text-primary h-3rem"
                  style="
                    background-color: rgba(255, 255, 255, 0.1);
                    border: rgba(255, 255, 255, 0.1);
                  "
                  id="password"
                  v-model="password"
                  aria-describedby="username-help"
                />
              </div>
            </div>
            <div class="block">
              <div>
                <label class="text-white opacity-50" for="username"
                  >ยืนยันรหัสผ่าน</label
                >
              </div>
              <div>
                <InputText
                  type="password"
                  class="border-round-lg text-primary h-3rem"
                  style="
                    background-color: rgba(255, 255, 255, 0.1);
                    border: rgba(255, 255, 255, 0.1);
                  "
                  id="username"
                  v-model="confirmPassword"
                  aria-describedby="username-help"
                />
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <div>
              <div
                class="card flex flex-wrap gap-3 justify-content-center h-3rem"
              >
                <div class="flex align-items-center">
                  <Checkbox
                    v-model="selectedGender"
                    :disabled="isMaleSelected"
                    inputId="ingredient1"
                    name="pizza"
                    value="male"
                  />
                  <label for="ingredient1" class="ml-2 text-white">
                    เงื่อนไงและข้อกำหนดการใช้บริการ
                  </label>
                  <Button style="color: #1D4ED8; background-color: none; background: none; border: none; text-decoration: underline;" label="เพิ่มเติม" severity="secondary" @click="visible = true" />
                  <Dialog
                    v-model:visible="visible"
                    header="Privacy Policy"
                    showHeader = "true"
                    modal
                    :style="{ width: '50vw' }"
                  >
                  <Privacy/>
                    <!-- <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p> -->
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="button-group w-full flex flex-column gap-5">
          <div class="buttone-group-2 w-full">
            <Button
              @click="signUp"
              class="w-full border-round-lg"
              style="
                height: 50px;
                background: rgba(28, 112, 250, 0.7);
                border: rgba(28, 112, 250, 0.7);
              "
              label="Sign up"
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
@import url("../../styles/register/index.css");
</style>

<script>
import Privacy from '~/components/Privacy.vue'

export default {
  components: {
    Privacy
  },

  data() {
    return {
      name: "",
      citizenId: "",
      birthday: "",
      password: "",
      confirmPassword: "",
      sex: "",
      visible: false,
      // pdfUrl: '../../assets/pdpa/privacy.pdf'
    };
  },
  methods: {
    get(target) {
      return document.querySelector(target);
    },
    signUp: async function (event) {
      try {
        console.log(
          "name:",
          this.name,
          "citizenId:",
          this.citizenId,
          "birthday:",
          this.birthday,
          "sex:",
          this.sex,
          "password:",
          this.password,
          "confirm password:",
          this.confirmPassword,
          "gender:",
          this.selectedGender,
          this.isFemaleSelected
        );

        // let responseData = await axios.post(`http://localhost:5000/auth/customer/signup`,
        // {
        //   citizenId: this.citizenId,
        //   birthday: this.birthday,
        //   sex: this.sex,
        //   name: this.name,
        //   confirmPassword: this.confirmPassword,
        //   password: this.password
        // },
        // { withCredentials: true }
        // )
      } catch (error) {
        console.error("Error: " + error);
      }
    },
  },
};
</script>
