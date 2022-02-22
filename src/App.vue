<template>
  <main class="flex-center">
    <section class="container">
      <RadarChart :chartData="chartData" :options="options" />
      <BarChart :options="options2" />
    </section>
  </main>
</template>

<script>
import { surveyData } from "@/data";
import BarChart from "./components/BarChart.vue";
import RadarChart from "./components/RadarChart.vue";

export default {
  name: "App",
  components: {
    RadarChart,
    BarChart,
  },

  data() {
    const {
      userSurvey,
      companySurvey: { lgSurvey },
    } = surveyData;

    const chartData = {
      labels: [...Object.keys(userSurvey)],
      datasets: [
        {
          backgroundColor: "rgba(255, 193, 74, 0.32)",
          borderColor: "#FFD335",
          borderWidth: 2,
          borderRadius: 1,
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointRadius: 0,
          data: [...Object.values(lgSurvey)],
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

    const image = new Image();
    image.src = "./assets/cat.png";

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
      },
      plugins: [
        {
          id: "customImage",
          beforeDraw: (chart) => {
            if (image.complete) {
              const ctx = chart.ctx;
              const { top, left, width, height } = chart.chartArea;
              const x = left + width - image.width;
              const y = top + height - image.height;
              ctx.drawImage(image, x, y);
            } else {
              image.onload = () => chart.draw();
            }
          },
        },
      ],
    };

    const options2 = {
      legend: {
        display: false,
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y-axis-0",
            borderWidth: 4,
            label: {
              enabled: false,
              content: "Test label",
            },
          },
        ],
      },
    };

    return {
      chartData,
      options,
      options2,
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

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
