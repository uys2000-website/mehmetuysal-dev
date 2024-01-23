<template>
    <div class="w-full h-full flex flex-col flex-nowrap items-center">

        <Head>
            <title>Mehmet Uysal: Home Page of Portfolio</title>
            <Meta name="description" content="Home Page of Portfolio" />
        </Head>
        <div class="h-full w-px bg-white"></div>
        <header class="w-full h-20 shrink-0 flex flex-col align-middle content-center justify-center items-center">
            <h1>
                <RouterLink to="/">Mehmet Uysal</RouterLink>
            </h1>
        </header>
        <div class="h-full w-px bg-white"></div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    name: "HomePage",
})
</script>