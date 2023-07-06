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
    <div class="div-content-3">
      <div class="div-content-text-3">
        <div class="text-top-3">TOP COLLECTIONS ยอดฮิตที่ได้รับความนิยม</div>
      </div>
      <div class="content-3">
        <div class="content-3-1">
          <Card
            style="
              width: 300px;
              height: 350px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.04);
            "
          >
            <template #header>
              <img alt="user header" src="../assets/pic/2.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle>Collections</template>
            <template>Collections </template>
          </Card>
        </div>
        <div class="content-3-1">
          <Card
            style="
              width: 300px;
              height: 350px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.04);
            "
          >
            <template #header>
              <img alt="user header" src="../assets/pic/2.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle>Collections</template>
            <template>Collections </template>
          </Card>
        </div>
        <div class="content-3-1">
          <Card
            style="
              width: 300px;
              height: 350px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.04);
            "
          >
            <template #header>
              <img alt="user header" src="../assets/pic/2.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle>Collections</template>
            <template>Collections </template>
          </Card>
        </div>
      </div>
    </div>
    <div class="div-content-3">
      <div class="div-content-text-3">
        <div class="text-top-3">COLLECTIONS ที่อยู่ใกล้คุณ</div>
      </div>
      <div class="content-3">
        <div class="content-3-1">
          <Card
            style="
              width: 300px;
              height: 350px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.04);
            "
          >
            <template #header>
              <img alt="user header" src="../assets/pic/2.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle>Collections</template>
            <template>Collections </template>
          </Card>
        </div>
        <div class="content-3-1">
          <Card
            style="
              width: 300px;
              height: 350px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.04);
            "
          >
            <template #header>
              <img alt="user header" src="../assets/pic/2.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle>Collections</template>
            <template>Collections </template>
          </Card>
        </div>
        <div class="content-3-1">
          <Card
            style="
              width: 300px;
              height: 350px;
              border-radius: 15px;
              background: rgba(255, 255, 255, 0.04);
            "
          >
            <template #header>
              <img alt="user header" src="../assets/pic/2.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle>Collections</template>
            <template>Collections </template>
          </Card>
        </div>
      </div>
    </div>
    <div class="div-content-3">
      <div class="card">
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <div
              class="border-1 surface-border border-round m-2 text-center py-5 px-3"
            >
              <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' +
                    slotProps.data.image
                  "
                  :alt="slotProps.data.name"
                  class="w-6 shadow-2"
                />
              </div>
              <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                />
                <div class="mt-5">
                  <Button icon="pi pi-search" rounded class="mr-2" />
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
