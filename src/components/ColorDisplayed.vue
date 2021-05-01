<template>
    <div class="wrapper">
        <h1 id="color">
            Background Color: <span :style="{ color: color }">{{ color }}</span>
        </h1>
    </div>
</template>

<script>
export default {
    name: "ColorDisplayed",
    props: {
        color: String,
    },
};
</script>

<style scoped>
.wrapper {
    padding: 1rem;
    background-color: #222;
    border-radius: 7.5px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}

#color {
    font-size: clamp(1.5rem, 5vw, 2.75rem);
    color: snow;
    display: inline;
}
</style>
