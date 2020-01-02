import BaseTaskList from "./BaseTaskList";
import { taskData, actionsData } from "./Task.stories";

const paddedList = () => ({
  template: '<div style="padding: 3rem;"><story/></div>'
});

export default {
  title: "BaseTaskList",
  component: BaseTaskList,
  excludeStories: /.*Data$/,
  decorators: [paddedList]
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" }
];

export const withPinnedTasks = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

export const Default = () => ({
  components: { BaseTaskList },
  template: `<base-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  data: () => ({
    tasks: defaultTasksData
  }),
  methods: actionsData
});

export const WithPinnedTasks = () => ({
  components: { BaseTaskList },
  template: `<base-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  data: () => ({
    tasks: withPinnedTasks
  }),
  methods: actionsData
});

export const Loading = () => ({
  components: { BaseTaskList },
  template: `<base-task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData
});

export const Empty = () => ({
  components: { BaseTaskList },
  template: `<base-task-list  @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData
});
