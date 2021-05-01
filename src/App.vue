<template>
    <main :style="{ backgroundColor: currentColor }">
        <div class="display-and-save">
            <color-displayed :color="currentColor"></color-displayed>
            <icon-button
                v-if="isSaved"
                :classes="['invert']"
                :iconName="'oi-heart-fill'"
                @btn-click="removeColor"
            ></icon-button>
            <icon-button
                v-else
                :iconName="'oi-heart'"
                :classes="['invert']"
                @btn-click="saveColor"
            ></icon-button>
        </div>
        <action-panel @change-color="changeColor"></action-panel>
        <colors-list
            :colors="[...savedColors]"
            @remove-color="removeColor"
        ></colors-list>
    </main>
</template>

<script>
import ColorDisplayed from "./components/ColorDisplayed";
import ActionPanel from "./components/ActionPanel";
import IconButton from "@/components/IconButton";
import ColorsList from "@/components/ColorsList";

export default {
    name: "App",
    components: {
        ColorDisplayed,
        ActionPanel,
        IconButton,
        ColorsList,
    },
    data() {
        return {
            currentColor: this.createColor(),
            savedColors: this.getLocalStorage({ key: "colors" }) ?? new Set(),
        };
    },
    methods: {
        getLocalStorage({ key }) {
            return localStorage.hasOwnProperty(key)
                ? new Set(JSON.parse(localStorage.getItem(key)))
                : undefined;
        },

        setLocalStorage({ key, value }) {
            localStorage.setItem(key, JSON.stringify(value));
        },

        // https://stackoverflow.com/a/5092846/15178180
        createColor() {
            return (
                "#" +
                ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
            );
        },

        changeColor() {
            this.currentColor = this.createColor();
        },

        saveColor() {
            this.savedColors.add(this.currentColor);
            this.setLocalStorage({
                key: "colors",
                value: [...this.savedColors],
            });
        },

        removeColor(color) {
            this.savedColors.delete(color ?? this.currentColor);
            this.setLocalStorage({
                key: "colors",
                value: [...this.savedColors],
            });
        },
    },
    computed: {
        isSaved() {
            return this.savedColors.has(this.currentColor);
        },
    },
    mounted() {
        window.addEventListener(
            "keydown",
            (e) => {
                if (e.code.toLowerCase() === "arrowdown") this.changeColor();
            },
            false
        );
    },
};
</script>

<style>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
main {
    width: 100%;
    min-height: 100vh;
}

body {
    font-family: sans-serif;
    letter-spacing: 0.12rem;
}

main {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: all 250ms ease;
}

.display-and-save {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
</style>
