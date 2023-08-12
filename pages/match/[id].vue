<template>
    <div>
        <h1>Match {{ id }}</h1>
        <ChessBoard />
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    // definePageMeta({
    //     layout: 'match',
    // })
</script>

<style scoped>
</style>
