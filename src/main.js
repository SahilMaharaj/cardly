import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import BackToTop from 'vue-backtotop'

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo, {
    duration: 1500,
    easing: "ease-in-out"
  })
  Vue.use(BackToTop)
  Vue.component('Layout', DefaultLayout)
  head.link.push ({
    rel: 'stylesheet preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
  })
}
