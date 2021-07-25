<template>
  <p>{{ humidity }}</p>
</template>

<script>
  import Vuex from "vuex";
  export default {
    computed: {
      ...Vuex.mapGetters(["humidity"]),
    },
  };
</script>
