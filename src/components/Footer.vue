<template>
  <footer>
    <router-link :to="{ name: 'customers' }">
      &copy; 2024 Compricer
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
