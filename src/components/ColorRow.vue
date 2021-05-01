<template>
    <tr
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
    >
        <td>{{ color }}</td>
        <td>
            <icon-button
                :classes="['change-fill-onHover', 'invert']"
                :hoverStyle="fillStyle"
                :iconName="'md-delete'"
                :iconScale="1.35"
                @btn-click="$emit('remove-color', color)"
            ></icon-button>
        </td>
    </tr>
</template>

<script>
import IconButton from "./IconButton";

export default {
    name: "ColorRow",
    components: {
        IconButton,
    },
    props: {
        colors: Array,
    },
    emits: ["remove-color"],
    computed: {
        fillStyle() {
            return {
                "--fill-color-hover": "rgb(255, 85, 85)",
            };
        },
    },
};
</script>

<style scoped>
td {
    padding: 0.55rem;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
}

tr td:first-child {
    mix-blend-mode: difference;
}

tr:last-of-type td:nth-last-child(1) {
    border-bottom-right-radius: 5px;
}

tr:last-of-type td:nth-last-child(2) {
    border-bottom-left-radius: 5px;
}
</style>
