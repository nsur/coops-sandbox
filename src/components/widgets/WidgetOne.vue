<template>
  <div class="widget">
    <h3 v-text="title"></h3>
    <p>Widget One</p>
  </div>
</template>

<script>
export default {
  name: "WidgetOne",
  props: {
    title: {
      type: String,
      required: true,
    },
    mainColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.widget {
  --main-color: v-bind(mainColor);

  background-color: var(--main-color);
  color: #fff;
  font-size: 20px;
  padding: 20px;
}
</style>
