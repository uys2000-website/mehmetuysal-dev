<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
@reference "@/assets/main.css";

div {
  @apply flex justify-center items-center;
  @apply flex-col lg:flex-row;
  @apply w-screen h-screen;
  height: 100dvh;
  width: 100dvw;
}
</style>
