<template></template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue";

export default {
  components: {
    Head,
    Link,
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
};
</script>
