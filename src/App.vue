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
        <RadarChart :chartValue="chartData" />
      </div>
      <div class="tab-wrapper">
        <TabGroup
          :selectedTab="selectedTab"
          :tabItems="tabItems"
          @onTabClick="onTabClick"
        />
      </div>
      <BarChartWrapper :chartValue="chartData" />
    </section>

    <Modal v-if="searchValue === null" />
  </main>
</template>

<script>
import { surveyData } from "@/data";
import RadarChart from "./components/RadarChart.vue";
import BarChartWrapper from "./components/BarChartWrapper.vue";
import TopHeader from "./components/TopHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import Modal from "./components/ModalView.vue";
import TabGroup from "./components/TabGroup.vue";

export default {
  name: "App",
  components: {
    RadarChart,
    BarChartWrapper,
    TopHeader,
    SearchBar,
    Modal,
    TabGroup,
  },
  data() {
    const tabItems = [
      {
        title: "모두",
      },
      {
        title: "본인",
      },
      {
        title: "회사",
      },
    ];

    return {
      chartData: {
        user: surveyData.userSurvey,
        company: null,
      },
      companyData: {},
      selectedTab: 0,
      searchValue: "",
      companyList: ["삼성", "카카오", "lg"],
      tabItems,
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
        this.setChartData();
      }
    },
    deleteSearchvalue() {
      this.searchValue = "";
      this.companyData = {};
    },

    setChartData() {
      switch (this.searchValue) {
        case "카카오":
          this.chartData = {
            ...this.chartData,
            company: surveyData.companySurvey.kakaoSurvey,
          };
          this.companyData = surveyData.companySurvey.kakaoSurvey;
          break;
        case "삼성":
          this.chartData = {
            ...this.chartData,
            company: surveyData.companySurvey.samsungSurvey,
          };
          this.companyData = surveyData.companySurvey.samsungSurvey;
          break;
        case "lg":
          this.chartData = {
            ...this.chartData,
            company: surveyData.companySurvey.lgSurvey,
          };
          this.companyData = surveyData.companySurvey.lgSurvey;
          break;
        default:
          return;
      }
    },

    onTabClick(key) {
      this.selectedTab = key;

      switch (this.selectedTab) {
        case 0:
          this.chartData = {
            user: surveyData.userSurvey,
            company: this.companyData,
          };
          break;
        case 1:
          this.chartData = {
            user: surveyData.userSurvey,
            company: null,
          };
          break;
        case 2:
          this.chartData = {
            user: null,
            company: this.companyData,
          };
          break;
        default:
          return;
      }
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

.tab-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
}
</style>
