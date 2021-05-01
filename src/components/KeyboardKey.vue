<template>
    <div :class="`${keyType} key-wrapper`">
        <div class="key">
            <span>
                {{ keyContent }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "KeyboardKey",
    props: {
        keyContent: String,
        keyType: String,
    },
};
</script>

<style scoped>
* {
    font-family: "Source Sans Pro";
}

.key-wrapper {
    position: relative;
}

.key-wrapper::before {
    content: "";
    height: 50px;
    background: linear-gradient(to top right, #fbfbfc 0%, #b6b6b6 100%);
    border: 1px solid #131313;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.key-wrapper.special,
.key-wrapper.special::before {
    width: 94px;
}

.key-wrapper.normal,
.key-wrapper.normal::before,
.key-wrapper.arrow,
.key-wrapper.arrow::before {
    width: 64px;
}

.key {
    height: 40px;
    margin: auto;
    background: linear-gradient(to right, #e5e5e5 0%, #f3f3f3 100%);
    border: 1px solid #f1f1f1;
    border-radius: 8px;
    color: #666;
    font-weight: bold;
    position: relative;
    z-index: 2;
}

.special .key {
    width: 75px;
}

.normal .key,
.arrow .key {
    width: 45px;
}

.key span {
    font-size: 15px;
    text-shadow: 0 1px #fff;
    position: absolute;
    top: 4px;
    left: 6px;
}

.arrow .key span {
    font-size: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (hover:none) {
    * {
        display: none;
    }
}
</style>
