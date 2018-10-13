import Vue from "vue";
import Vuex from "vuex";
import ElementUI from "element-ui";

import lang from "element-ui/lib/locale/lang/ja";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(ElementUI, { lang });

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bought: [
      {
        title: "task1",
        product: "task1",
        price: "1",
        date: "",
        description: "test1",
      },
      {
        title: "task2",
        product: "task2",
        price: "2",
        date: "",
        description: "test2",
      },
      {
        title: "task3",
        product: "task3",
        price: "3",
        date: "",
        description: "test3",
      },
    ],
    good: [
      {
        title: "task4",
        product: "task4",
        price: "4",
        date: "",
        description: "test4",
      },
      {
        title: "task5",
        product: "task5",
        price: "5",
        date: "",
        description: "test5",
      },
      {
        title: "task6",
        product: "task6",
        price: "6",
        date: "",
        description: "test6",
      },
    ],
    bad: [
      {
        title: "task7",
        product: "task7",
        price: "7",
        date: "",
        description: "test7",
      },
      {
        title: "task8",
        product: "task8",
        price: "8",
        date: "",
        description: "test8",
      },
      {
        title: "task9",
        product: "task9",
        price: "9",
        date: "",
        description: "test9",
      },
    ],
  },
  mutations: {
    moved: (state, e) => {
      console.log("moved", { state, e });
    },
    added: state => {
      console.log("added", state);
    },
    removed: state => {
      console.log("removed", state);
    },
    onChangeBoughtList: (state, e) => {
      state.bought = e;
    },
  },
  actions: {
    onChangeBoughtList(context) {
      console.log("actions", context);
      context.commit("onChangeBoughtList");
    },
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
