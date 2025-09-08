<template>
  <div class="drawer">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <TheHeader />
      <RouterView v-slot="{ Component }">
        <Transition name="layout">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <TheDrawer />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, Transition } from 'vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView, Transition,
    TheHeader: defineAsyncComponent(() => import('@/components/shared/TheHeader.vue')),
    TheDrawer: defineAsyncComponent(() => import('@/components/shared/TheDrawer.vue'))
  }
}
</script>