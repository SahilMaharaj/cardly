<template>
    <div>
        <div :class="'accordion ' + [active ? 'active' : '']">
            <div class="acc-question" @click="toggle">
                <div class="plus-toggle"><g-image src="~/assets/images/plus-symbol.svg"></g-image></div> {{ question }}
            </div>
            <div class="acc-answer">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            question: String
        },
        data () {
            return {
                active: false
            }
        },
        methods: {
            toggle () {
                this.active = !this.active
            }
        }
    }
</script>

<style scoped>
    .accordion {
        max-width: 1200px;
        margin: 0 auto;
        border-bottom: 1px solid rgba(0, 0, 0, 0.07);
        margin-top: 10px;
    }

    .acc-question {
        display: flex;
        align-items: center;
        color: #2e2e3d;
        font-size: 18px;
        font-weight: 500;
        padding: 12px 15px 12px 0;
        background: none;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .acc-answer {
        color: #7e828f;
        font-size: 18px;
        line-height: 1.5;
        overflow: hidden;
        transition: .3s ease all;
    }

    .accordion.active .acc-answer{
        max-height: 10em;
        padding-bottom: 40px;
    }

    .accordion.active .acc-question .plus-toggle img {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition-duration: 0.3s;
        -moz-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: -webkit-transform;
        -moz-transition-property: -moz-transform;
        -o-transition-property: -o-transform;
        transition-property: transform;
    }

    .plus-toggle img {
        -webkit-transition-duration: 0.3s;
        -moz-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: -webkit-transform;
        -moz-transition-property: -moz-transform;
        -o-transition-property: -o-transform;
        transition-property: transform;
    }

    .accordion .acc-answer {
        max-height: 0;
    }

    .plus-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        margin-right: 20px;
        padding: 8px;
        border-radius: 8px;
        background-color: #e8faf7;
    }
</style>