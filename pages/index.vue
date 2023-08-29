<template>
  <Navbar />
  <div class="div-content">
    <div class="div-content-2">
      <div class="content-2-1">
        <div class="content-text-1">NFT</div>
        <div class="content-text-2">INVESTMENT</div>
        <div class="content-text-3">
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </div>
        <div class="content-button">
          <Button
            label="Connect Wallet"
            rounded
            style="border-radius: 30px; font-family: 'Inter'"
          />
          <div class="button-arrow">
            <Button
              severity="info"
              text
              style="
                border-radius: none;
                background: none;
                border: none;
                font-family: 'Inter'  display: flex;
                justify-content: center;
                align-items: center;
                color: #15BFFD;
                font-weight: 500;
              "
              >Create NFTs<Icon
                name="uil:arrow-right"
                size="22px"
                color="#15BFFD"
            /></Button>
          </div>
        </div>
      </div>
      <div class="content-2-2">
        <img
          src="../assets/pic/296733381_479755600820572_3130169505043210404_n 33.png"
          alt=""
          style="width: 500px"
        />
      </div>
    </div>
    <div class="div-content-2-2">
      <div class="content-2-2">
        <img
          src="../assets/pic/296733381_479755600820572_3130169505043210404_n 33.png"
          alt=""
          style="width: 500px"
        />
      </div>
      <div class="content-2-1">
        <div class="content-text-2-1">Why choose us?</div>
        <div class="content-text-2-2">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          semper. Eros suspendisse varius enim ultrices isque et quis ctumst.
          Feugiat amet velit faucibus amet Eu feugiat adipiscing viverrfeugiat.
          Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.
        </div>
        <div class="content-button">
          <Button
            label="Connect Wallet"
            rounded
            style="border-radius: 30px; font-family: 'Inter'"
          />
        </div>
      </div>
    </div>
    <div class="div-content-3-2">
      <div class="div-content-text-3">
        <div class="text-top-3">TOP COLLECTIONS ยอดฮิตที่ได้รับความนิยม</div>
      </div>
      <div class="card">
        <Carousel
          :value="data1"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
        >
          <template #item="slotProps">
            <div class="py-5 px-5 h-auto">
              <!-- <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' 
                    + slotProps.data.image
                  "
                  :style="{ width: '100%' }"
                  
                  class="shadow-2 border-round"
                />
              </div> -->
              <div
                class="h-auto p-3"
                style="
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: center;
                  border-radius: 15px;
                  background: rgba(255, 255, 255, 0.04);
                "
              >
                <h4
                  class=""
                  style="color: white; font-family: 'Prompt'; font-weight: 500"
                >
                  Collection: {{ slotProps.data.name }}
                </h4>
                <Tag />
                <div class="d-flex">
                  <h4
                    class=""
                    style="
                      color: white;
                      font-family: 'Prompt';
                      font-weight: 500;
                    "
                  >
                    มูลค่า Collection: {{ slotProps.data.max_price }}
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
                <div class="d-flex">
                  <h4
                    class=""
                    style="
                      color: white;
                      font-family: 'Prompt';
                      font-weight: 500;
                    "
                  >
                    เงินขั้นต่ำ {{ slotProps.data.cap_price }}
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
                <div class="flex justify-content-center">
                  <Button style="font-family: 'Prompt'" label="ดูรายละเอียด" />
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    <div class="div-content-3-2">
      <div class="div-content-text-3">
        <div class="text-top-3">COLLECTIONS ใกล้ฉัน</div>
      </div>
      <div class="card">
        <Carousel
          :value="data2"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
        >
          <template #item="slotProps">
            <div class="py-5 px-5 h-auto">
              <!-- <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' 
                    + slotProps.data.image
                  "
                  :style="{ width: '100%' }"
                  
                  class="shadow-2 border-round"
                />
              </div> -->
              <div
                class="h-auto p-3"
                style="
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: center;
                  border-radius: 15px;
                  background: rgba(255, 255, 255, 0.04);
                "
              >
                <h4
                  class=""
                  style="color: white; font-family: 'Prompt'; font-weight: 500"
                >
                  Collection: {{ slotProps.data.name }}
                </h4>
                <Tag />
                <div class="d-flex">
                  <h4
                    class=""
                    style="
                      color: white;
                      font-family: 'Prompt';
                      font-weight: 500;
                    "
                  >
                    มูลค่า: {{ slotProps.data.max_price }} บาท
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
                <div class="d-flex">
                  <h4
                    class=""
                    style="
                      color: white;
                      font-family: 'Prompt';
                      font-weight: 500;
                    "
                  >
                    เงินขั้นต่ำ {{ slotProps.data.cap_price }} บาท
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
                <div class="flex justify-content-center">
                  <NuxtLink :to="`/collections/${slotProps.data.id}`">
                    <Button
                      style="font-family: 'Prompt'"
                      label="ดูรายละเอียด"
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    <div class="div-content-3-2">
      <div class="div-content-text-3">
        <div class="text-top-3">COLLECTIONS ที่ยังว่างอยู่</div>
      </div>
      <div class="card">
        <Carousel
          :value="data3"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
        >
          <template #item="slotProps">
            <div class="py-5 px-5 h-auto">
              <!-- <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' 
                    + slotProps.data.image
                  "
                  :style="{ width: '100%' }"
                  
                  class="shadow-2 border-round"
                />
              </div> -->
              <div
                class="h-auto p-3"
                style="
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: center;
                  border-radius: 15px;
                  background: rgba(255, 255, 255, 0.04);
                "
              >
                <h4
                  class=""
                  style="color: white; font-family: 'Prompt'; font-weight: 500"
                >
                  Collection: {{ slotProps.data.name }}
                </h4>
                <Tag />
                <div class="d-flex">
                  <h4
                    class=""
                    style="
                      color: white;
                      font-family: 'Prompt';
                      font-weight: 500;
                    "
                  >
                    มูลค่า: {{ slotProps.data.max_price }} บาท
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
                <div class="d-flex">
                  <h4
                    class=""
                    style="
                      color: white;
                      font-family: 'Prompt';
                      font-weight: 500;
                    "
                  >
                    เงินขั้นต่ำ {{ slotProps.data.cap_price }} บาท
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
                <div class="flex justify-content-center">
                  <Button style="font-family: 'Prompt'" label="ดูรายละเอียด" />
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style>
@import url(../styles/main.css);
</style>

<script>
import { ProductService } from "~/services/ProductServices";
import axiosConfig from "~/config/axiosConfig";
import { ref } from "vue";

export default {
  data() {
    return {
      data1: null,
      data2: null,
      data3: null,
      products: null,
      lat: ref(0),
      long: ref(0),

      responsiveOptions: [
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "991px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },

  mounted() {
    this.topCollections();
    this.nearCollections();
    this.noneCollections();

    ProductService.getProductsSmall().then(
      (data) => (this.products = data.slice(0, 9))
    );
  },

  methods: {
    topCollections: async function () {
      try {
        var config = {
          method: "get",
          url: "http://localhost:3000/pools?invest=popular",
        };
        const responseData = (await axiosConfig(config)).data.data;
        this.data1 = responseData;
      } catch (error) {
        console.log("Catch Error", error);
      }
    },
    nearCollections: async function () {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
            return this.lat, this.long;
          });
        }
        var config = {
          method: "get",
          url:
            "http://localhost:3000/pools?lat=" +
            this.lat +
            "&long=" +
            this.long,
        };
        const responseData = (await axiosConfig(config)).data;
        this.data2 = responseData.data;
      } catch (error) {}
    },
    noneCollections: async function () {
      try {
        var config = {
          method: "get",
          url: "http://localhost:3000/pools?invest=none",
        };
        const responseData = (await axiosConfig(config)).data.data;
        this.data3 = responseData;
        console.log(this.data3);
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
};

// onMounted(() => {
//   ProductService.getProductsSmall().then(
//     (data) => (products.value = data.slice(0, 9))
//   );
// });

// const products = ref();
// const responsiveOptions = ref([
//   {
//     breakpoint: "1199px",
//     numVisible: 3,
//     numScroll: 3,
//   },
//   {
//     breakpoint: "991px",
//     numVisible: 2,
//     numScroll: 2,
//   },
//   {
//     breakpoint: "767px",
//     numVisible: 1,
//     numScroll: 1,
//   },
// ]);

// const getSeverity = (status) => {
//   switch (status) {
//     case "INSTOCK":
//       return "success";

//     case "LOWSTOCK":
//       return "warning";

//     case "OUTOFSTOCK":
//       return "danger";

//     default:
//       return null;
//   }
// };
</script>
