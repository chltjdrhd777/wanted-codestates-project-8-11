<template>
  <main class="flex-center">
    <section class="container">
      <div class="radar-wrapper">
        <img src="./assets/cat.png" alt="cat thumb" class="thumb" />
        <RadarChart :surveyData="surveyData" />
      </div>
      <BarChartWrapper :surveyData="surveyData" />
    </section>
  </main>
</template>

<script>
import { surveyData } from "@/data";
import RadarChart from "./components/RadarChart.vue";
import BarChartWrapper from "./components/BarChartWrapper.vue";

export default {
  name: "App",
  components: {
    RadarChart,
    BarChartWrapper,
  },
  data() {
    return {
      surveyData,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Noto Sans", sans-serif;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
}
main {
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
}

.container {
  width: 360px;
  height: 785px;
  background-color: #fff;
}

.container .radar-wrapper {
  position: relative;
  width: 360px;
  height: 381px;
}

.container .radar-wrapper > img {
  width: 54px;
  height: 54px;
  border-radius: 160px;
  overflow: hidden;
  position: absolute;
  left: 42.22%;
  right: 42.78%;
  top: 43.57%;
  bottom: 42.26%;
  background-color: white;
  object-fit: cover;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
