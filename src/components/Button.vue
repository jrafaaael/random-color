<template>
    <button @click="$emit('btn-click')">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: {
            type: String,
            default: "Click Me",
        },
    },
};
</script>

<style scoped>
button {
    padding: 0.5rem 1rem;
    border: 2px solid #222222;
    border-radius: 5px;
    font-size: clamp(0.75rem, 5vw, 1.5rem);
    font-weight: 700;
    outline: none;
    transition: all 250ms ease;
}

button:hover,
button:focus {
    background-color: #222222;
    color: snow;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
