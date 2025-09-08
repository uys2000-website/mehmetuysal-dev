<template>
  <RouterView v-slot="{ Component }">
    <Transition name="layout">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script lang="ts">
import { Transition } from 'vue';
import { RouterView } from 'vue-router'

export default {
  components: { RouterView, Transition },
  data() {
    return {

    }
  }
}
</script>
