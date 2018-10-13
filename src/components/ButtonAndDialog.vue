<template>
    <div>
        <el-button class="item" type="text" @click="onItemSelect">
            <span v-if="showMedal && index<3" class="medal">{{displayMedalIcon(this.index)}}</span>
            <img class="icon" v-if="!!item.asin" :src="createImageURL(item.asin)"/>
            <span>{{this.item.title}}</span>
        </el-button>
        <el-dialog
                :title="this.editingItem.title"
                :visible.sync="this.dialogVisible"
                width="30%"
                :before-close="handleClose">
            <div class="content">
                <img class="thumbnail" :src="createImageURL(editingItem.asin)" alt="thumbnail">
                <a :href="this.editingItem.href">{{this.editingItem.product}}</a>
                <label for="memo">memo</label>
                <input id="memo" type="text" :value="this.editingItem.memo" @change="onChangeInput"/>
            </div>
            <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">Cancel</el-button>
            <el-button type="primary" @click="onConfirm">Confirm</el-button>
            <el-button type="danger" @click="onRemove">Remove</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "ButtonAndDialog",
  props: {
    boardname: String,
    item: Object,
    index: Number,
    showMedal: Boolean,
  },
  data() {
    return {
      dialogVisible: false,
      editingItem: { ...this.item },
    };
  },
  mounted() {
    this.item.type = this.boardname;
  },
  methods: {
    onItemSelect() {
      this.editingItem = { ...this.item };
      this.dialogVisible = true;
    },
    createImageURL(asin) {
      return `http://images-jp.amazon.com/images/P/${asin}.09.MZZZZZZZ`;
    },
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
    onRemove() {
      this.$store.commit("removeItem", this.editingItem);
      this.dialogVisible = false;
    },
    onConfirm() {
      this.$store.commit("onChangeItem", this.editingItem);
      this.dialogVisible = false;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    onChangeInput(e) {
      this.editingItem.memo = e.target.value;
    },
  },
  watch: {
    item() {
      this.item.type = this.boardname;
    },
  },
};
</script>

<style scoped>
.item {
  width: 80%;
  margin: 10px;
}
.icon {
  width: 15px;
  max-height: 15px;
  margin: 0 2px;
}
.thumbnail {
  width: 30px;
  max-height: 50px;
  margin: 0 10px;
}
.medal {
  margin: 0 10px;
}
.content {
  display: flex;
  flex-direction: column;
}
</style>
