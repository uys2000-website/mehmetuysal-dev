<template>
  <NuxtLayout :name="mainStore.getLayout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script>

export default defineComponent({
  data() {
    return {
      mainStore: useMainStore()
    }
  }
})
</script>
<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
  filter: blur(.5rem);
  opacity: 0;
}
</style>