<template>
    <div class="container mx-auto px-4">
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
</script>

<style>
    :root {
        --header-height: 4rem;
        --background: 255 255 255;
        --foreground: var(--color-gray-700);
        --muted: var(--color-gray-500);
        --highlight: var(--color-gray-900);
        --accent: var(--color-primary-500);
        --border: var(--color-gray-200);
    }

    .dark {
        --background: var(--color-gray-900);
        --foreground: var(--color-gray-200);
        --muted: var(--color-gray-400);
        --highlight: 255 255 255;
        --accent: var(--color-primary-400);
        --border: var(--color-gray-800);
    }

    body {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: rgb(var(--background)/1);
        background-color: rgb(var(--background)/var(--tw-bg-opacity));
        color: rgb(var(--foreground)/1);
        color: rgb(var(--foreground)/var(--tw-text-opacity));
        font-family: Inter,Inter fallback,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    }

    a {
        color: rgb(var(--accent)/1);
        color: rgb(var(--accent)/var(--tw-text-opacity));
        text-decoration: none;
    }
</style>
