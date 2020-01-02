import Vue from "vue";
import Vuex from "vuex";
import { action } from "@storybook/addon-actions";
import { defaultTasksData } from "./BaseTaskList.stories";
import BaseInboxScreen from "./BaseInboxScreen";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData
  },
  actions: {
    pinTask(context, id) {
      action("pinTask")(id);
    },
    archiveTask(context, id) {
      action("archiveTask")(id);
    }
  }
});

export default {
  title: "BaseInboxScreen",
  component: BaseInboxScreen,
  excludeStories: /.*store$/
};

export const Default = () => ({
  components: { BaseInboxScreen },
  template: `<base-inbox-screen/>`,
  store
});

export const Error = () => ({
  components: { BaseInboxScreen },
  template: `<base-inbox-screen :error="true"/>`
});
