<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial, sans-serif;
}

header,
footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

footer a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 20px;
}
</style>
