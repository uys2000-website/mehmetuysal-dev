<template>
  <div class="drawer-side">
    <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="w-80 bg-base-300 h-full">
      <TheNav />
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    TheNav: defineAsyncComponent(() => import("@/components/shared/TheNav.vue"))
  }
}
</script>
