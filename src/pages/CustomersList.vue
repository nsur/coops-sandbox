<template>
  <div>
    <Header></Header>
    <main>
      <router-link :to="{ name: 'widgets', params: { customer: 'abba' } }"
        >Customer Abba</router-link
      >
      <br />
      <router-link :to="{ name: 'widgets', params: { customer: 'boneym' } }"
        >Customer BoneyM</router-link
      >
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "CustomersList",
  components: {
    Header,
    Footer,
  },
};
</script>
