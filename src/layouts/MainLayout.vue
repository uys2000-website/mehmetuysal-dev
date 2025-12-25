<template>
  <div id="layout">
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <Transition name="layout">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, Transition } from 'vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView, Transition,
    TheHeader: defineAsyncComponent(() => import('@/components/shared/TheHeader.vue')),
  }
}
</script>
