import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import Task from "./Task";

export default {
  title: "Task",
  component: Task,
  decorators: [withKnobs],
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

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`;

export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: object("task", { ...taskData })
    }
  },
  methods: actionsData
});

export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: {
        ...taskData,
        state: "TASK_PINNED"
      }
    }
  },
  methods: actionsData
});

Pinned.story = {
  parameters: { notes: "testing search" }
};

export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: {
        ...taskData,
        state: "TASK_ARCHIVED"
      }
    }
  },
  methods: actionsData
});

export const LongTitle = () => {
  const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

  return {
    components: { Task },
    template: taskTemplate,
    props: {
      task: {
        default: {
          ...taskData,
          title: longTitle
        }
      }
    },
    methods: actionsData
  };
};
