<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <City />
  </div>
</template>

<script>
  import City from "./components/City";
  export default {
    name: "App",
    components: { City },
  };
</script>

<style></style>
