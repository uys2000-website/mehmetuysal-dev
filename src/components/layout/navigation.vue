<template>
  <nav>
    <ul class="flex w-full justify-center relative">
      <li>
        <RouterLink to="/">
          <IconHome class="icon fill-white w-10 h-10" />
        </RouterLink>
      </li>
      <li class="active">
        <RouterLink to="/codes">
          <IconCode class="icon fill-white w-10 h-10" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about">
          <IconUser class="icon fill-white w-10 h-10" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">
          <IconEnvelope class="icon fill-white w-10 h-10" />
        </RouterLink>
      </li>
      <div class="icon cursor" :style="`transform: translateX(${page * 100}%);`">

      </div>
    </ul>
  </nav>
</template>
<script lang="ts">
export default {
  data() {
    return { cursor: 0 }
  },
  computed: {
    page() {
      const path = this.$route.path
      if (path == "/") return 0
      else if (path == "/codes") return 1
      else if (path == "/about") return 2
      else if (path == "/contact") return 3
      return 0
    }
  }
}

</script>
<style scoped>
ul li {
  margin: 0 10px;
}

.icon {
  max-height: 10vh;
  max-height: 10svh;
  max-width: 10vw;
  max-width: 10svw;
}

.cursor {

  max-height: calc(10vh + 20px);
  max-height: calc(10svh + 20px);
  max-width: calc(10vw + 20px);
  max-width: calc(10svw + 20px);
  height: 5px;
  width: calc(2.5rem + 20px);
  position: absolute;
  background: white;
  left: 0;
  bottom: -.5rem;
  transition: .5s;
  border-radius: 10px;
}
</style>