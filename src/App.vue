<template>
  <div id="app">
      <div id="title">
          <h2>買わなきゃよかった</h2>
      </div>
      <div id="saveAndLoad">
        <el-button @click="onLoad">Load</el-button>
        <el-button @click="onSave">Save</el-button>
      </div>
      <kanban></kanban>
      <div id="import">
        <import-button></import-button>
      </div>
  </div>
</template>

<script>
import Kanban from "./components/Kanban";
import ImportButton from "./components/ImportButton";

export default {
  name: "app",
  components: {
    kanban: Kanban,
    "import-button": ImportButton,
  },
  methods: {
    onLoad() {
      const stateStr = window.localStorage.getItem("neverer");
      const state = JSON.parse(stateStr);
      console.log({ state });
      this.$store.commit("onLoad", state);
    },
    onSave() {
      const { bought, good, bad } = this.$store.state;
      console.log({ bought, good, bad });
      window.localStorage.setItem(
        "neverer",
        JSON.stringify({ bought, good, bad })
      );
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#title {
  text-align: center;
  margin: 30px;
}
#saveAndLoad {
  margin: 10px 0 0 0;
}
#import {
  margin: 10px 0 0 0;
}
</style>
