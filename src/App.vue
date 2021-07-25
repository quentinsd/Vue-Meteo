<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <City />
    <WeatherCondition />
    <Temp />
    <Humidity />
    <Pressure />
    <Wind />
  </div>
</template>

<script>
  import City from "./components/City";
  import WeatherCondition from "./components/WeatherCondition";
  import Temp from "./components/Temp";
  import Humidity from "./components/Humidity";
  import Pressure from "./components/Pressure";
  import Wind from "./components/Wind";

  export default {
    name: "App",
    components: { City, WeatherCondition, Temp, Humidity, Pressure, Wind },
  };
</script>

<style></style>
