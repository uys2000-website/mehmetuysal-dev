<template>
  <article>
    <slot />
  </article>
</template>

<script lang="ts">
export default {

}
</script>
<style scoped>
article {
  height: 80vh;
  height: 80svh;
  width: 80%;
  border-top: white solid 1px;
  border-bottom: white solid 1px;
  margin: 20px 0;
  background-image: url("/logo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>