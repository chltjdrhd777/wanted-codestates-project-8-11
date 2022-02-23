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
          <BarChart width="80" height="230" />
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
import BarChart from "./BarChar.vue";
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
  mounted() {},
  components: {
    BarChart,
  },
  data() {
    return {
      data: userSurvey,
      MAX_SCORE,
      userObj: userObj,
      personalityArray: personalityArray,
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
  width: calc(100% - 40px);
  font-size: 10px;
  text-align: center;
  margin: 0 20px;
}
.chart {
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
