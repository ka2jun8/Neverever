<template>
    <div class="board">
        <div class="title">
            <h2>{{message}}</h2>
        </div>
        <draggable
                :list="items"
                class="dragArea"
                :options="{group:'product'}"
                @change="handleChange">
            <div v-for="(e, index) in items" :key="index">
                <button-dialog :boardname="boardname" :item="e" :index="index" :showMedal="showMedal"></button-dialog>
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import ButtonAndDialog from "./ButtonAndDialog";

export default {
  name: "Board",
  components: {
    draggable,
    "button-dialog": ButtonAndDialog,
  },
  // props: ["boardname", "message", "items", "showModal"],
  props: {
    boardname: {
      type: String,
      required: true,
      default: "",
    },
    message: String,
    items: Array,
    showMedal: Boolean,
  },
  methods: {
    handleChange(e) {
      const event = Object.keys(e)[0];
      this.$store.commit(event, e);
    },
  },
};
</script>

<style scoped>
.board {
  width: 30%;
  border: #eee;
  margin: 10px;
}
.title {
  border: 1px solid #222;
  margin: 10px;
}
.dragArea {
  min-height: 10px;
}
ul {
  list-style: none;
  width: 100%;
  height: 70%;
  padding: 20px;
  margin: 20px;
  border: 1px solid #222;
  border-radius: 5px;
}
li {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #222;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
