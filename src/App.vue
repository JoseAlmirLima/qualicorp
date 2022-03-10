<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div>
      <Form />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Form from "./assets/views/Form.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
