<template>
  
  <Navbar />
  <div class="container-1">
    <div class="tab-menu">
      <TabMenu
        v-model:activeIndex="active"
        :model="items"
        :pt="{
          action: ({ props, state, context }) => ({
            class:
              context.order === state.d_activeIndex ? 'bg-primary' : undefined,
          }),
        }"
      />
      <router-view />
    </div>
    <Collectionsall />
  </div>
  <Footer />
</template>

<style>
@import url(../../styles/collections/index.css);

html,
body {
  height: 100% !important;
}
</style>

<script setup>
import { ref } from "vue";

const active = ref(0);
const items = ref([
  {
    label: "All",
    to: "/",
  },
  {
    label: "Top Collections",
    to: "/calendar",
  },
  {
    label: "Near",
    to: "/edit",
  },
  {
    label: "Avaliable",
    to: "/documentation",
  },
]);
</script>
