<template>
    <div>
        <transition name="back-to-top-fade">
    <div 
      class="vue-back-to-top" 
      v-show="visible" 
      @click="backToTop">
      <slot>
        <div class="default">
          <span>
            <g-image src="~/assets/images/chevron.png"></g-image>
          </span>
        </div>
      </slot>
    </div>
  </transition>
    </div>
</template>

<script>
    export default {
        props: {
            visibleoffset: {
                type: [String, Number],
                default: 200,
            },
            visibleoffsetbottom: {
                type: [String, Number],
                default: 0,
            },
            scrollFn: {
                type: Function,
                default: function (eventObject) {},
            }
        },
        data () {
            return {
                visible: false
            }
        },
        mounted () {
            window.smoothscroll = () => {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
            if (currentScroll > 0) {
                window.requestAnimationFrame(window.smoothscroll)
                window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
                }
            }
            window.addEventListener('scroll', this.catchScroll)
        },
        destroyed () {
            window.removeEventListener('scroll', this.catchScroll)
        },
        methods: {
            /**
            * Catch window scroll event 
            * @return {void}
            */
           catchScroll () {
                const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
                const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
                this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
                this.scrollFn(this)
            },
            /**
            * The function who make the magics
            * @return {void}
            */
           backToTop () {
                window.smoothscroll()
                 this.$emit('scrolled')
            }
        }
    }
</script>

<style scoped>
    .back-to-top-fade-enter-active, 
    .back-to-top-fade-leave-active {
        transition: opacity .7s;
    }
    .back-to-top-fade-enter, 
    .back-to-top-fade-leave-to {
        opacity: 0;
    }

    .vue-back-to-top {
        cursor:pointer;
        position: fixed;
        bottom: 40px;
        right: 25px;
        z-index: 1000;
    }

    .vue-back-to-top .default {
        background-color: #19ceaf;
        border-radius: 100px;
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>