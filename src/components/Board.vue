<template>
    <div class="board">
        <div class="title">
            <h2>{{message}}</h2>
        </div>
        <draggable element="el-collapse" :list="items" class="dragArea" :options="{group:'product'}" @change="handleChange">
            <el-collapse-item v-for="(e, index) in items" :name="e.title" :key="e.title+e.date">
            <template slot="title">
              <span v-if="showMedal && index<3" class="medal">{{displayMedalIcon(index)}}</span>
              <img class="icon" :src="createImageURL(e.asin)"/>
              {{e.title}}
            </template>
            <div>
              <img class="thumbnail" :src="createImageURL(e.asin)"/>
              <a :href="e.href">{{e.product}}</a>
            </div>
            </el-collapse-item>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Board",
  components: {
    draggable,
  },
  props: {
    message: String,
    items: Array,
    showMedal: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    displayMedalIcon(index) {
      if (index === 0) {
        return "🥇";
      } else if (index === 1) {
        return "🥈";
      } else if (index === 2) {
        return "🥉";
      }
      return null;
    },
    createImageURL(asin) {
      return `http://images-jp.amazon.com/images/P/${asin}.09.MZZZZZZZ`;
    },
    handleChange(e) {
      const event = Object.keys(e)[0];
      console.log("changed", { event, e });
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
.icon {
  width: 15px;
  max-height: 15px;
  margin: 0 2px;
}
.dragArea {
  min-height: 10px;
}
.thumbnail {
  width: 30px;
  max-height: 50px;
  margin: 0 10px;
}
.medal {
  margin: 0 10px;
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
