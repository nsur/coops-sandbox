<template>
  <header>
    <h1 v-text="title"></h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Coops",
    },
  },
};
</script>
