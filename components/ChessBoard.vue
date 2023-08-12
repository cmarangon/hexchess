<template>
    <div>
        <div class="board flex flex-wrap-reverse grid-cols-8 grid-rows-8">
            <div v-for="i in 64"
                :key="i"
                :class="tileBackground(i)"
                class="tile rounded-sm aspect-[1/1] flex grow shrink-0 items-center justify-center relative hover:scale-110 transition"
                @click="showMoves(i)">
                <em class="absolute top-0 right-0 text-xs select-none">{{ i }}</em>
            </div>
        </div>
    </div>
</template>

<script setup>
const tileBackground = function(i) {
    const color = (i + Math.floor((i - 1) / 8)) % 2 === 0 ? 'Black' : 'White';
    return `bg${color}`;
};
const showMoves = function(i) {
    console.log(i);
};
const placePieces = function() {
};
onMounted(placePieces);
</script>

<style scoped>
.board {
    --gap: .75rem;
    gap: var(--gap);
}
.tile {
    flex-basis: calc((100% / 8) - var(--gap));
    background-color: var(--tile_background);
}

.dark {
    & .bgBlack {
        --tile_background: rgb(var(--background));
    }
    & .bgWhite {
        --tile_background: rgb(var(--foreground));
    }
}
.light {
    & .bgBlack {
        --tile_background: rgb(var(--foreground));
    }
    & .bgWhite {
        --tile_background: rgb(var(--background));
    }
}

</style>
