<template>
    <header class="py-4">
        <div class="container mx-auto flex justify-between align-middle">
            <NuxtLink to="/" class="group"><Icon name="mingcute:chess-fill" color="var(--foreground)" size="2rem" class="group-hover:animate-bounce_reversed" /></NuxtLink>
            <nav class="">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/match/create">Create</NuxtLink></li>
                    <li><NuxtLink to="/match/find">Find</NuxtLink></li>
                    <li><NuxtLink to="/match/index">Index</NuxtLink></li>
                </ul>
            </nav>
            <div>
                <ul class="toolbar">
                    <div>
                        <ClientOnly>
                            <UButton
                                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                                color="gray"
                                variant="ghost"
                                aria-label="Theme"
                                @click="isDark = !isDark"
                            />

                            <template #fallback>
                                <div class="w-8 h-8" />
                            </template>
                        </ClientOnly>
                    </div>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
    const colorMode = useColorMode()

    const isDark = computed({
    get () {
        return colorMode.value === 'dark'
    },
    set () {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
    })
</script>

<style scoped>
    a {
        color: rgb(var(--primary)/1);
        color: rgb(var(--primary)/var(--tw-text-opacity));
    }
</style>
