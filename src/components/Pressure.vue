<template>
  <p>{{ pressure }}</p>
</template>

<script>
  import Vuex from "vuex";
  export default {
    computed: {
      ...Vuex.mapGetters(["pressure"]),
    },
  };
</script>
