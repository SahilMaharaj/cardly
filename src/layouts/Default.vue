<template>
  <div>
    <Header />
    <slot/>
    <BackToTop />
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
import BackToTop from '~/components/BackToTop.vue'

  export default {
    components: {
      Header,
      Footer,
      BackToTop
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

*, *::before, *::after {
  box-sizing: border-box;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.btt-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #19ceaf;
  width: 50px;
  height: 50px;
  border-radius: 100px;
}
</style>
