<template>
  <section class="container">
    <form>
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
    </form>
  </section>
</template>

<script>
import InputVue from "../../components/Input.vue";
import SelectVue from "../../components/Select.vue";
export default {
  name: "HelloWorld",
  components: {
    InputVue,
    SelectVue,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
