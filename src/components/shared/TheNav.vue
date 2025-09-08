<template>
  <ul class="menu w-full" :class="{ 'menu-horizontal': horizontal }">
    <!-- Navbar menu content here -->
    <li><a>Navbar Item 1</a></li>
    <li><a>Navbar Item 2</a></li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
