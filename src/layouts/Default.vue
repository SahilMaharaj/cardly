<template>
  <div>
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  font-family: 'DM Sans', sans-serif !important;
  margin:0;
  padding:0;
  line-height: 1.5;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>
