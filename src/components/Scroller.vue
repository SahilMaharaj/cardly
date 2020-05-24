<template>
    <div>
        <scroll-up :scroll-duration="1000" :scroll-y="250"></scroll-up>
    </div>
</template>

<script>
import ScrollUp from 'vue-scroll-up'

export default {
    components: {
        ScrollUp
    }
}
</script>

<style>
    .vue-scroll-up {
        z-index: 99;
        height: 50px;
        width: 50px;
        position: fixed;
        border: none;
        background-color: #19ceaf;
        color: #fff;
        border-radius: 100px;
        right: 25px;
        bottom: 40px;
        cursor: pointer;
        outline: 0;
    }
    .vue-scroll-up:before {
        content: "\02C4";
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }
</style>