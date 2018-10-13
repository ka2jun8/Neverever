<template>
    <div id="kanban">
        <board message="買った" boardname="bought" :items="bought" class="board"></board>
        <board message="買ってよかった" boardname="good" :items="good" :showMedal="true" class="board"></board>
        <board message="買わなきゃよかった" boardname="bad" :items="bad" :showMedal="true" class="board"></board>
    </div>
</template>

<script>
import Board from "./Board";

export default {
  name: "Kanban",
  components: {
    board: Board,
  },
  computed: {
    bought() {
      return this.$store.state.bought;
    },
    good() {
      return this.$store.state.good;
    },
    bad() {
      return this.$store.state.bad;
    },
  },
};
</script>

<style scoped>
#kanban {
  display: flex;
  justify-content: center;
  text-align: center;
}
.board {
  width: 30%;
  border: #eee;
  margin: 10px;
}
</style>
