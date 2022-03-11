<template>
  <div>
    <div>
      <NavBar />
    </div>
    <main class="container-fluid">
      <div class="row">
        <section class="col-lg-8 col-sm-12">
          <h1 class="mt-5">Faça sua cotação com a gente!</h1>
          <h4>E aproveite todos nossos beneficios</h4>
          <p>Informe os dados abaixo e confira!</p>

          <Form />
        </section>
        <section class="col-lg-4 col-sm-12 mt-5">
          <article class="imgFamilia">
            <img
              src="./assets/img/familia.jpg"
              class="img-fluid"
              alt="Responsive image"
            />
          </article>
        </section>
      </div>
    </main>
    <div></div>
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

.imgFamilia {
  padding: 20px;
  box-shadow: 0px 0px 26px 6px rgb(0 0 0 / 8%);
}
</style>
