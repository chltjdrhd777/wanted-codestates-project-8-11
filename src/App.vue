<template>
  <main class="flex-center">
    <section class="container">
      <TopHeader />
      <SearchBar
        :searchValue="searchValue"
        :setSearchValue="setSearchValue"
        :deleteSearchvalue="deleteSearchvalue"
      />

      <div class="radar-wrapper">
        <img src="./assets/cat.png" alt="cat thumb" class="thumb" />
        <RadarChart :chartData="chartData" :options="options" />
      </div>
      <BarChart :surveyData="surveyData" />
    </section>

    <Modal v-if="searchValue === null" />
  </main>
</template>

<script>
import { surveyData } from "@/data";
import RadarChart from "./components/RadarChart.vue";
import BarChart from "./components/BarChart.vue";
import TopHeader from "./components/TopHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import Modal from "./components/ModalView.vue";

export default {
  name: "App",
  components: {
    RadarChart,
    BarChart,
    TopHeader,
    SearchBar,
    Modal,
  },
  data() {
    const {
      userSurvey,
      companySurvey: { samsungSurvey },
    } = surveyData;
    const chartData = {
      labels: [
        ["적극적인", "Aggressive", ""],
        ["  자신있는", "Confident", ""],
        ["", "    책임있는", "Responsible"],
        ["", "개인주의  ", "Indivisual"],
        ["수평적인   ", "Horizontal", ""],
      ],
      datasets: [
        {
          backgroundColor: "rgba(255, 193, 74, 0.32)",
          borderColor: "#FFD335",
          borderWidth: 2,
          borderRadius: 1,
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointRadius: 0,
          pointHitRadius: 0,
          order: 1,
          data: [...Object.values(samsungSurvey)],
        },
        {
          backgroundColor: "rgba(110, 60, 249, 0.32)",
          borderColor: "#6E3CF9",
          borderWidth: 2,
          borderRadius: 1,
          pointRadius: 0,
          pointHitRadius: 0,
          order: 2,
          data: [...Object.values(userSurvey)],
        },
        {
          backgroundColor: "rgba(244, 244, 244, 0.32)",
          borderColor: "#B2B2B2",
          borderWidth: 1,
          pointBackgroundColor: [
            "rgba(237, 168, 154, 0.7)",
            "rgba(182, 197, 248, 0.7)",
            "rgba(164, 214, 227, 0.7)",
            "rgba(238, 184, 207, 0.7)",
            "rgba(183, 220, 171, 0.7)",
          ],
          pointBorderColor: ["#EDA89A", "#B6C5F8", "#A4D6E3", "#EEB8CF", "#B7DCAB"],
          pointRadius: 16,
          pointHitRadius: -16,
          order: 0,
          data: [10, 10, 10, 10, 10],
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
          fontFamily: "Noto Sans",
          fontStyle: "bold",
          fontColor: "black",
          fontSize: 14,
        },
        ticks: {
          max: 10,
          min: 0,
          stepSize: 2.5,
          display: false,
        },
        gridLines: {
          borderDash: [5, 5],
        },
      },
    };
    return {
      chartData,
      options,
      surveyData,
      searchValue: "",
      companyList: ["삼성", "카카오", "lg"],
    };
  },
  methods: {
    setSearchValue(value) {
      value = value.toLowerCase();
      if (!this.companyList.includes(value)) {
        this.searchValue = null;
        setTimeout(() => {
          this.searchValue = "";
        }, 1000);
      } else {
        this.searchValue = value;
      }
    },
    deleteSearchvalue() {
      console.log("hello");
      this.searchValue = "";
    },
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
  height: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;
}

.container {
  width: 360px;
  /* height: 785px; */
  min-height: 785px;
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
  left: 43%;
  top: 49%;
  background-color: white;
  object-fit: cover;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
