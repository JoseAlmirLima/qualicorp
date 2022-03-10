<template>
  <section class="container">
    <form class="mt-5">
      <div class="row">
        <div class="col-3">
          <SelectVue />
        </div>
        <div class="col-3">
          <SelectVue />
        </div>
        <div class="col-3">
          <InputVue />
        </div>
        <div class="col-3">
          <InputVue />
        </div>
        <div class="col-3">
          <InputVue />
        </div>
      </div>
      <div class="row">
        <ButtonVue />
      </div>
    </form>
  </section>
</template>

<script>
import InputVue from "../../components/Input.vue";
import SelectVue from "../../components/Select.vue";
import ButtonVue from "../../components/Button.vue";
export default {
  name: "HelloWorld",
  components: {
    InputVue,
    SelectVue,
    ButtonVue,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  padding: 21px;
  box-shadow: 0px 0px 12px -1px #00000024;
  border-radius: 10px;
}
</style>
