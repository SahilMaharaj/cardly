<template>
  <div>
    <Header />
    <slot/>
    <vue-backTop :height="200" :bottom="40" :right="25">
      <span><g-image src="~/assets/images/chevron.png"></g-image></span>
    </vue-backTop>
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

*, *::before, *::after {
  box-sizing: border-box;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.vue-backTop {
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #19ceaf;
  display: flex;
}

.vue-backTop span img {
  align-items: center;
  justify-content: center;
}
</style>
