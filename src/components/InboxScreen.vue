<template>
  <div>
    <base-inbox-screen :error="error" />
  </div>
</template>

<script>
import BaseInboxScreen from "./BaseInboxScreen";
import { mapState } from "vuex";

export default {
  name: "inbox-screen",
  components: {
    BaseInboxScreen
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>
