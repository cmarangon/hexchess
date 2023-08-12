<template>
    <div>
        <h1>Find</h1>
        <div class="grid grid-cols-4 gap-5" v-for="match in matches">
            <NuxtLink :to="`/match/${match._id}`">{{ match.mode }}</NuxtLink>
            <span>created <time :datetime="match.date">{{ dayjs(match.date).fromNow() }}</time></span>
        </div>
    </div>
</template>

<script setup>
    const dayjs = useDayjs();
    const { data: matches } = await useFetch('/api/matches');
</script>

<style scoped>
</style>
