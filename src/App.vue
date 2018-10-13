<template>
  <div id="app">
      <div id="title">
          <h2>買わなきゃよかった</h2>
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
#import {
  margin: 200px 0 0 0;
}
</style>
