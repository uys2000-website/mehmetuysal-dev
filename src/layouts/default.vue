<template>
    <div class="w-full h-screen flex flex-col justify-center content-center flex-nowrap items-center"
        style="height: 100svh !important;">
        <LayoutNavigation />
        <LayoutArticle>
            <slot />
        </LayoutArticle>
    </div>
</template>