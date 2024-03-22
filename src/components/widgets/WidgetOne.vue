<template>
  <div class="widget">
    <h3 v-text="title"></h3>
    <p>Widget One</p>
    <img v-if="dataReceived" :src="imageUrl" alt="Cat Image" class="cat" />
    <p v-else>Loading...</p>
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
  data() {
    return {
      dataReceived: false,
      imageUrl: null,
    };
  },
  mounted() {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&breed_id=ragd",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.dataReceived = true;
        this.imageUrl = result[0].url;
      })
      .catch((error) => console.log("error", error));
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

.cat {
  width: 100%;
  max-width: 400px;
  height: auto;
}
</style>
