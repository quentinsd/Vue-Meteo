<template>
  <input
    type="text"
    name="city"
    v-model="city"
    @keyup.enter="addLocation(city)"
    class="h-15 w-15 text-center"
  />
</template>

<script>
  import Vuex from "vuex";

  global.v = Vuex;

  export default {
    data() {
      return {
        city: "reims",
      };
    },
    methods: {
      ...Vuex.mapActions(["addLocation"]),
    },
    computed: {
      ...Vuex.mapGetters(["location"]),
    },
  };
</script>
