<template>
    <footer class="container">
        <div class="pt-8 pb-4 mx-auto justify-between md:flex-row flex-col-reverse flex mt-4 md:mt-0">
            <div class="">
                <p class="text-center">© {{ year }} by vandalis, built with <a href="https://nuxt.com/">Nuxt</a></p>
            </div>
            <div class="flex gap-4 justify-center">
                <NuxtLink to="https://github.com/cmarangon" class="p-2"><Icon name="mingcute:github-line" size="1.25rem" class="hover:opacity-70" /></NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const year = new Date().getFullYear();
</script>
