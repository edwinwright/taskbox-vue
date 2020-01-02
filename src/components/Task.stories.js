import { action } from "@storybook/addon-actions";
import Task from "./Task";

export default {
  title: "Task",
  component: Task,
  excludeStories: /.*Data$/
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

export const Default = () => {
  return {
    components: { Task },
    template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ task: taskData }),
    methods: actionsData
  };
};

export const Pinned = () => {
  return {
    components: { Task },
    template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ task: { ...taskData, state: "TASK_PINNED" } }),
    methods: actionsData
  };
};

Pinned.story = {
  parameters: { notes: "testing search" }
};

export const Archived = () => {
  return {
    components: { Task },
    template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ task: { ...taskData, state: "TASK_ARCHIVED" } }),
    methods: actionsData
  };
};
