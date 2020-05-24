<template>
    <div>
        <go-top :boundary="200" bg-color="#19ceaf" :size="50" :bottom="40" :right="25" :radius="100" box-shadow="none" :max-width="0" weight="bold" :has-outline="false">asfa</go-top>
    </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top';

    export default {
        components: {
            GoTop
        }
    }
</script>

<style>
    .vue-go-top {
        background-size: 30% !important;
    }
</style>