<template>
  <div>
    <base-task-list
      :tasks="tasks"
      @archiveTask="archiveTask"
      @pinTask="pinTask"
    />
  </div>
</template>

<script>
import BaseTaskList from "./BaseTaskList";
import { mapState, mapActions } from "vuex";

export default {
  name: "task-list",
  components: {
    BaseTaskList
  },
  methods: {
    ...mapActions(["archiveTask", "pinTask"])
  },
  computed: {
    ...mapState(["tasks"])
  }
};
</script>
