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
    editingItem: null,
    bought: [
      {
        title: "task1",
        product: "task1",
        price: "1",
        asin: "1",
        date: "",
        memo: "test1",
      },
      {
        title: "task2",
        product: "task2",
        price: "2",
        asin: "2",
        date: "",
        memo: "test2",
      },
      {
        title: "task3",
        product: "task3",
        price: "3",
        asin: "3",
        date: "",
        memo: "test3",
      },
    ],
    good: [
      {
        title: "task4",
        product: "task4",
        price: "4",
        asin: "4",
        date: "",
        memo: "test4",
      },
      {
        title: "task5",
        product: "task5",
        price: "5",
        asin: "5",
        date: "",
        memo: "test5",
      },
      {
        title: "task6",
        product: "task6",
        price: "6",
        asin: "6",
        date: "",
        memo: "test6",
      },
    ],
    bad: [
      {
        title: "task7",
        product: "task7",
        price: "7",
        asin: "7",
        date: "",
        memo: "test7",
      },
      {
        title: "task8",
        product: "task8",
        price: "8",
        asin: "8",
        date: "",
        memo: "test8",
      },
      {
        title: "task9",
        product: "task9",
        price: "9",
        asin: "9",
        date: "",
        memo: "test9",
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
    editItem: (state, item) => {
      state.editingItem = item;
    },
    removeItem: (state, item) => {
      state[item.type] = state[item.type].filter(e => e.asin !== item.asin);
    },
    onChangeBoughtList: (state, e) => {
      state.bought = e;
    },
    onChangeItem(state, item) {
      state[item.type] = state[item.type].map(e => {
        if (e.asin === item.asin) {
          return item;
        } else {
          return e;
        }
      });
    },
    onLoad(state, loadedState) {
      console.log("onLoad", { state, loadedState });
      state.bought = loadedState.bought;
      state.good = loadedState.good;
      state.bad = loadedState.bad;
    },
  },
  actions: {
    onChangeBoughtList(context) {
      console.log("actions", context);
      context.commit("onChangeBoughtList");
    },
  },
});

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
