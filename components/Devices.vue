<template>
  <div class="card">
    <DataView :value="products" :layout="layout">
      

      <template #list="slotProps">
        <div class="col-12">
          <div
            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
          >
            <img
              class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
              :alt="slotProps.data.name"
            />
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            >
              <div
                class="flex flex-column align-items-center sm:align-items-start gap-3"
              >
                <div class="text-2xl font-bold text-900">
                  {{ slotProps.data.name }}
                </div>
                <Rating
                  :modelValue="slotProps.data.rating"
                  readonly
                  :cancel="false"
                ></Rating>
                <div class="flex align-items-center gap-3">
                  <span class="flex align-items-center gap-2">
                    <i class="pi pi-tag"></i>
                    <span class="font-semibold">{{
                      slotProps.data.category
                    }}</span>
                  </span>
                  <Tag
                    :value="slotProps.data.inventoryStatus"
                    :severity="getSeverity(slotProps.data)"
                  ></Tag>
                </div>
              </div>
              <div
                class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
              >
                <span class="text-2xl font-semibold"
                  >${{ slotProps.data.price }}</span
                >
                <Button
                  icon="pi pi-shopping-cart"
                  rounded
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div
          class="col-12 sm:col-6 lg:col-12 xl:col-3 p-2"
          style="background: #080b2a"
        >
          <div class="p-4" style="background-color: none">
            <div
              class="flex flex-wrap align-items-center justify-content-between gap-2"
            >
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data)"
              ></Tag>
            </div>
            <div class="flex flex-column align-items-center gap-3 py-3">
              <img
                class="w-12 shadow-2 border-round"
                :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
                :alt="slotProps.data.name"
              />

              <Rating
                value="{product.rating}"
                readonly
                :cancel="false"
              ></Rating>
            </div>
            <div
              class="flex flex-column border-round-lg p-3 gap-2"
              style="border-radius: 15px; background: rgba(255, 255, 255, 0.04)"
            >
              <div class="text-sm font-bold text-white text-left w-4">
                Test1234
              </div>

              <div class="flex align-items-center gap-2">
                <div class="flex align-items-center">
                  <span class="text-xs font-semibold text-white"
                    >มุลค่า: </span
                  >
                  <!-- <Button
                  icon="pi pi-shopping-cart"
                  rounded
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                ></Button> -->
                </div>
                <div class="text-white text-xs"> $10,000</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<style scoped></style>

<script setup>
import Button from "primevue/button";
import { ref, onMounted } from "vue";
import { ProductService } from "~/services/ProductServices";
import "primeflex/primeflex.css";

onMounted(() => {
  ProductService.getProducts().then(
    (data) => (products.value = data.slice(0, 12))
  );
});

const products = ref();
const layout = ref("grid");

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
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
