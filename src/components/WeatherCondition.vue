<template>
  <p>{{ weatherCondition }}</p>
</template>

<script>
  import Vuex from "vuex";
  export default {
    computed: {
      ...Vuex.mapGetters(["weatherCondition"]),
    },
  };
</script>
