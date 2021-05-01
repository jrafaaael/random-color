<template>
    <button :style="hoverStyle" :class="classes" @click="$emit('btn-click')">
        <v-icon :name="iconName" :scale="iconScale" :fill="iconFill"></v-icon>
    </button>
</template>

<script>
export default {
    name: "IconButton",
    props: {
        classes: Array,
        hoverStyle: Object,
        iconName: String,
        iconScale: {
            type: Number,
            default: 2,
        },
        iconFill: {
            type: String,
            default: "white",
        },
    },
    emits: ["btn-click"],
};
</script>

<style scoped>
:focus {
    outline-color: white;
    outline-offset: 5px;
    transition: outline-offset 0.25s ease;
}

.invert svg {
    mix-blend-mode: difference;
}

.change-fill-onHover:hover svg {
    fill: var(--fill-color-hover);
    mix-blend-mode: normal;
}
</style>
