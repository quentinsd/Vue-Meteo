<template>
  <p>{{ windSpeed }}</p>
</template>

<script>
  import Vuex from "vuex";
  export default {
    computed: {
      ...Vuex.mapGetters(["windSpeed"]),
    },
  };
</script>
