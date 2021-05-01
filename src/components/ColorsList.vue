<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Color</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <color-row
                    :colors="colors"
                    @remove-color="$emit('remove-color', $event)"
                ></color-row>
            </tbody>
        </table>
    </div>
</template>

<script>
import ColorRow from "./ColorRow";

export default {
    name: "SavedColors",
    components: {
        ColorRow,
    },
    props: {
        colors: Array,
    },
    emits: ["remove-color"],
};
</script>

<style scoped>
.container {
    width: 100%;
    max-height: 250px;
    overflow: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    color: snow;
    text-align: center;
    table-layout: fixed;
}

thead {
    background-color: #222;
}

thead th:nth-child(1) {
    border-top-left-radius: 5px;
}

thead th:nth-last-child(1) {
    border-top-right-radius: 5px;
}

th {
    padding: 0.55rem;
}

@media all and (min-width: 600px) {
    .container {
        width: 450px;
    }

    table {
        width: calc(450px - 7px);
        margin-right: auto;
    }
}

@media (hover) {
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 1px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #777;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #666;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #444;
    }
}

@media (hover) and (min-width: 600px) {
    .container {
        overflow: hidden;
    }

    .container:hover {
        overflow-y: auto;
    }
}
</style>
