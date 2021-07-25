<template>
  <p>{{ temp }}°c</p>
</template>

<script>
  import Vuex from "vuex";
  export default {
    computed: {
      ...Vuex.mapGetters(["temp"]),
    },
  };
</script>
