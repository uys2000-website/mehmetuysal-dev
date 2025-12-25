<template>
  <main>
    <Landing />
  </main>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Landing: defineAsyncComponent(() => import("@/components/sections/LandingSection.vue"))
  }
}
</script>
