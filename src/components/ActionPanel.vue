<template>
    <div class="action-panel">
        <Button @btn-click="$emit('change-color')"></Button>
        <p>or</p>
        <div class="action-keys">
            <keyboard-key :keyContent="'⇩'" :keyType="'arrow'"></keyboard-key>
        </div>
    </div>
</template>

<script>
import Button from "./Button";
import KeyboardKey from "./KeyboardKey";

export default {
    name: "ActionPanel",
    components: {
        Button,
        KeyboardKey,
    },
};
</script>

<style scoped>
.action-panel,
.action-keys {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.action-keys {
    gap: 0.5rem;
}

p {
    font-size: 1.2rem;
}

@media (hover:none) {
    p {
        display: none;
    }
}
</style>
