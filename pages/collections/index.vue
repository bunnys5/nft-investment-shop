<template>
  
  <Navbar />
  <div class="container-1">
    <div class="tab-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M228 104a12 12 0 0 1-24 0V69l-59.51 59.51a12 12 0 0 1-17-17L187 52h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm-44 24a12 12 0 0 0-12 12v64H52V84h64a12 12 0 0 0 0-24H48a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-68a12 12 0 0 0-12-12Z"/></svg>
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
