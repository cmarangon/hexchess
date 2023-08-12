<template>
    <div>
        <h1>Create new game</h1>
        <form @submit.prevent="createMatch">
            <div class="inline-flex w-full">
                <USelectMenu v-slot="{ open }" v-model="match.mode" :options="modes" class="min-w-200">
                    <UButton color="gray">
                    {{ match.mode }}

                    <UIcon name="i-heroicons-chevron-right-20-solid" class="w-5 h-5 transition-transform" :class="[open && 'transform rotate-90']" />
                    </UButton>
                </USelectMenu>
            </div>
            <button type="submit">Create</button>
        </form>
    </div>
</template>

<script setup>
    const modes = [
        'Standard',
        'Speed',
        'Hex',
        'Speed Hex',
    ];

    let match = ref({
        mode: modes[0],
    });

    const createMatch = async function() {
        const { data: _match } = await useFetch('/api/matches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(match.value),
        });
        navigateTo(`/match/${_match.value._id}`);
    };
</script>

<style scoped>
</style>
