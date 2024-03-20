<template>
  <div class="palette">
    <Header :title="customerName"></Header>
    <main>
      <router-link
        :to="{ name: 'widget', params: { customer: customer, widgetId: 1 } }"
        >Widget 1</router-link
      >
      <br />
      <router-link
        :to="{ name: 'widget', params: { customer: customer, widgetId: 2 } }"
        >Widget 2</router-link
      >
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "WidgetsList",
  components: {
    Header,
    Footer,
  },
  props: {
    customer: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      customerName: "Customer " + this.customer.toUpperCase() + " Widgets",
    };
  },
  computed: {
    mainColor() {
      let mainColor = "blue";
      if (this.customer === "a") {
        mainColor = "green";
      } else {
        mainColor = "red";
      }
      return mainColor;
    },
  },
};
</script>

<style scoped>
.palette {
  --main-color: v-bind(mainColor);
}

header,
footer {
  background-color: var(--main-color);
}
</style>
