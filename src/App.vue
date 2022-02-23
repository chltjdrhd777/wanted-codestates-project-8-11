<template>
  <main class="flex-center">
    <section class="container">
      <div class="radar-wrapper">
        <img src="./assets/cat.png" alt="cat thumb" class="thumb" />
        <RadarChart :chartData="chartData" :options="options" />
      </div>
      <BarChart :surveyData="surveyData" />
    </section>
  </main>
</template>

<script>
import { surveyData } from "@/data";
import RadarChart from "./components/RadarChart.vue";
import BarChart from "./components/BarChart.vue";

export default {
  name: "App",
  components: {
    RadarChart,
    BarChart,
  },
  data() {
    const {
      userSurvey,
      companySurvey: { samsungSurvey },
    } = surveyData;
    const chartData = {
      labels: [["적극적인", "Aggressive"],
        ["자신있는", "Confident"],
        ["책임있는", "Responsible"],
        ["개인주의", "Indivisual"],
        ["수평적인", "Horizontal"],],
      datasets: [
        {
          backgroundColor: "rgba(255, 193, 74, 0.32)",
          borderColor: "#FFD335",
          borderWidth: 2,
          borderRadius: 1,
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointRadius: 0,
          data: [...Object.values(samsungSurvey)],
        },
        {
          backgroundColor: "rgba(110, 60, 249, 0.32)",
          borderColor: "#6E3CF9",
          borderWidth: 2,
          borderRadius: 1,
          pointRadius: 0,
          z: 1,
          data: [...Object.values(userSurvey)],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      layout: {
        padding: 20,
      },
      scale: {
        pointLabels: {
          fontColor: "black",
          fontSize: 15,
        },
        ticks: {
          max: 10,
          min: 0,
          stepSize: 2.5,
          display: false,
        },
      },
    };
    return {
      chartData,
      options,
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
