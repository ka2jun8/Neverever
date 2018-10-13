<template>
    <div>
        <label for="json-text"></label>
        <input id="json-text" type="text" v-on:change="handleInput" name="kawanakyayokatta" autocomplete="kawanakyayokatta">
        <button v-on:click="handleClick">import</button>
    </div>
</template>

<script>
export default {
  name: "ImportButton",
  data() {
    return {
      data: "",
    };
  },
  methods: {
    handleInput(e) {
      this.data = e.target.value;
    },
    handleClick() {
      try {
        let bought = JSON.parse(this.data);
        bought.forEach(item => (item.title = item.product.substring(0, 15)));
        this.$store.commit("onChangeBoughtList", bought);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
</style>
