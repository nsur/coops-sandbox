<template>
  <div class="palette">
    <WidgetOne
      v-if="widgetId === '1'"
      :title="widgetTitle"
      :main-color="mainColor"
    ></WidgetOne>
    <WidgetTwo
      v-if="widgetId === '2'"
      :title="widgetTitle"
      :main-color="mainColor"
    ></WidgetTwo>
  </div>
</template>

<script>
import WidgetOne from "../components/widgets/WidgetOne.vue";
import WidgetTwo from "../components/widgets/WidgetTwo.vue";

export default {
  name: "WidgetPage",
  components: {
    WidgetOne,
    WidgetTwo,
  },
  props: {
    customer: {
      type: String,
      required: true,
    },
    widgetId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      widgetTitle:
        this.customer.charAt(0).toUpperCase() +
        this.customer.slice(1) +
        " - Widget " +
        this.widgetId,
    };
  },
  computed: {
    mainColor() {
      let mainColor = "blue";
      if (this.customer === "abba") {
        mainColor = "green";
      } else {
        mainColor = "red";
      }
      return mainColor;
    },
  },
};
</script>
