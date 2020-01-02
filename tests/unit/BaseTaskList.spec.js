import Vue from "vue";
import BaseTaskList from "../../src/components/BaseTaskList.vue";
import { withPinnedTasks } from "../../src/components/BaseTaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(BaseTaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasks }
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
