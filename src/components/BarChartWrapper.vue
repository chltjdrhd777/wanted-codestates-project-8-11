<template>
  <section>
    <div class="section-header">
      <h4>MY RESULT</h4>
      <h3>나의 결과는?</h3>
    </div>
    <table>
      <tr v-for="(list, i) in userObj" v-bind:key="list">
        <td
          :style="[data[list] >= 5 ? { color: 'green' } : { color: 'black' }]"
        >
          {{ data[list] }}/{{ MAX_SCORE }}
        </td>
        <td
          :style="[
            data[list] >= 5
              ? { color: 'green', fontWeight: 700, fontSize: '12px' }
              : { color: 'black' },
          ]"
        >
          {{ personalityArray[i][0] }}
        </td>
        <td v-if="i === 0" rowspan="5" class="chart">
          <BarChart
            :chartValue="chartValue"
            v-bind:style="{ width: '165px', height: '230px' }"
          />
        </td>
        <td
          :style="[
            data[list] < 5
              ? { color: 'green', fontWeight: 700, fontSize: '12px' }
              : { color: 'black ' },
          ]"
        >
          {{ personalityArray[i][1] }}
        </td>
        <td :style="[data[list] < 5 ? { color: 'green' } : { color: 'black' }]">
          {{ MAX_SCORE - data[list] }}/{{ MAX_SCORE }}
        </td>
      </tr>
    </table>
  </section>
</template>
<script>
// script 태그
import BarChart from "./BarChart.vue";
import { surveyData } from "@/data";
const { userSurvey } = surveyData;
const MAX_SCORE = 10;
const userObj = [...Object.keys(userSurvey)];
const personalityArray = [
  ["적극성", "수동성"],
  ["자신감", "신중함"],
  ["책임감", "무심함"],
  ["개인 성향", "조직 성향"],
  ["수평사고", "위계사고"],
];
export default {
  props: {
    chartValue: Object,
  },
  mounted() {},
  components: {
    BarChart,
  },
  data() {
    return {
      data: this.chartValue.user,
      MAX_SCORE,
      userObj,
      personalityArray,
    };
  },
};
</script>
<style scoped>
.section-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h4 {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5em;
  margin-bottom: 10px;
}
h3 {
  font-size: 35px;
  margin-bottom: 10px;
}
table {
  width: 100%;
  font-size: 10px;
  text-align: center;
  padding: 0 20px;
}
</style>
