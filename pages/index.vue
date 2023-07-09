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
          :value="products"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
        >
          <template #item="slotProps">
            <div class="py-5 px-8">
              <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' +
                    slotProps.data.image
                  "
                  :style="{ width: '100%' }"
                  :alt="slotProps.data.name"
                  class="shadow-2 border-round"
                />
              </div>
              <div
                style="
                  height: 75px;
                  padding-left: 20px;
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
                  style="color: white; font-family: 'Inter'; font-weight: 500"
                >
                  Collection:
                </h4>

                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                />
                <div class="d-flex">
                  <h4
                    class=""
                    style="color: white; font-family: 'Inter'; font-weight: 500"
                  >
                    มูลค่า Collection:
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    <div class="div-content-3-2">
      <div class="div-content-text-3">
        <div class="text-top-3">COLLECTIONS ที่อยู่ใกล้คุณ</div>
      </div>
      <div class="card">
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
        >
          <template #item="slotProps">
            <div class="py-5 px-8">
              <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' +
                    slotProps.data.image
                  "
                  :style="{ width: '100%' }"
                  :alt="slotProps.data.name"
                  class="shadow-2 border-round"
                />
              </div>
              <div
                style="
                  height: 75px;
                  padding-left: 20px;
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
                  style="color: white; font-family: 'Inter'; font-weight: 500"
                >
                  Collection:
                </h4>

                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                />
                <div class="d-flex">
                  <h4
                    class=""
                    style="color: white; font-family: 'Inter'; font-weight: 500"
                  >
                    มูลค่า Collection:
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
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
          :value="products"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
        >
          <template #item="slotProps">
            <div class="py-5 px-8">
              <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' +
                    slotProps.data.image
                  "
                  :style="{ width: '100%' }"
                  :alt="slotProps.data.name"
                  class="shadow-2 border-round"
                />
              </div>
              <div
                style="
                  height: 75px;
                  padding-left: 20px;
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
                  style="color: white; font-family: 'Inter'; font-weight: 500"
                >
                  Collection:
                </h4>

                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                />
                <div class="d-flex">
                  <h4
                    class=""
                    style="color: white; font-family: 'Inter'; font-weight: 500"
                  >
                    มูลค่า Collection:
                  </h4>
                  <!-- <Button icon="pi pi-search" rounded class="mr-2" /> -->
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

<script setup>
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import { ProductService } from "~/services/ProductServices";

onMounted(() => {
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  );
});

const products = ref();
const responsiveOptions = ref([
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
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
