<template>
  <div id="index">
    <Navbar />
    <Middle />
    <Footer />
  </div>
</template>

<script>
  const Navbar =()=> import('@/popup/router/components/Navbar.vue')
  const Middle =()=> import('@/popup/router/components/Middle.vue')
  const Footer =()=> import('@/popup/router/components/Footer.vue')
export default {
  data() {
    return {};
  },
  components: {
    Navbar, Middle, Footer
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
