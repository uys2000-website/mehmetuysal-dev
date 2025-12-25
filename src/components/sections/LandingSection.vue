<template>
  <section>
    <Hero>
      <div>
        <p>Welcome to <span>mehmetuysal.dev</span></p>
        <img src="/img/me.webp" alt="" />
      </div>
    </Hero>
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Hero: defineAsyncComponent(() => import('@/components/common/HeroComp.vue')),
  },
}
</script>
<style scoped>
@reference "@/assets/main.css";

section {
  @apply flex justify-center items-center;
  height: 100vh;
  height: 100dvh;
}

div {
  @apply flex flex-col lg:flex-row items-center justify-center;
  @apply bg-base-200 rounded-box;
  @apply p-4 gap-4;
}

p {
  @apply text-xl w-max text-nowrap order-1 lg:order-2;
}

span {
  @apply font-bold;
}

/* prettier-ignore */
img {
  @apply w-[min(50%,200px)] rounded-full;
}
</style>
