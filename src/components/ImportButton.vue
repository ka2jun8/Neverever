<template>
    <div>
        <div id="drop-box" @dragover="handleDragOver" @drop="handleDrop">ここにファイルをおいてください</div>
    </div>
</template>

<script>
export default {
  name: "ImportButton",
  methods: {
    readFile(e) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.addEventListener("load", () => {
        try {
          let bought = JSON.parse(reader.result);
          bought.forEach(item => (item.title = item.product.substring(0, 12)));
          bought.filter(item => !bought.includes(item));
          this.$store.commit("onChangeBoughtList", bought);
        } catch (e) {
          console.error(e);
        }
      });
    },
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      this.readFile(e);
    },
    handleDragOver(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
#drop-box {
  width: 80%;
  border: 1px dotted #222;
  padding: 20px;
  margin: auto;
}
</style>
