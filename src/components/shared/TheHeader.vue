<template>
  <header>
    <div>
      <h1>mehmetuysal.dev</h1>
    </div>
  </header>
</template>

<script lang="ts">

export default {
  components: {
  }
}
</script>

<style scoped>
@reference "@/assets/main.css";

header {
  @apply fixed top-0 left-0 p-4 w-full;
}

div {
  @apply bg-base-300 shadow;
  @apply p-4 rounded-box;
}

h1 {
  @apply text-xl font-bold;
}
</style>
