<template>
    <div>
        <h1>Welcome to the homepage</h1>
    </div>

    <button @click="isShowing = !isShowing">Toggle</button>
    <TransitionRoot :show="isShowing" enter="transition-opacity duration-750" enter-from="opacity-0" enter-to="opacity-100"
        leave="transition-opacity duration-1500" leave-from="opacity-100" leave-to="opacity-0">
        test
    </TransitionRoot>
</template>

<script setup>
  import { ref } from 'vue'
  import { TransitionRoot } from '@headlessui/vue'

  const isShowing = ref(true)
</script>

<style>
</style>
