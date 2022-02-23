<template>
  <section>
    <div class="section-header">
      <h4>MY RESULT</h4>
      <h3>나의 결과는?</h3>
    </div>
    <table>
      <tr>
        <td>{{ data.aggressive }}/{{ MAX_SCORE }}</td>
        <td>적극성</td>
        <td rowspan="5" class="chart">
          <BarChart width="80px" height="230px" />

        </td>
        <td>수동성</td>
        <td>{{ MAX_SCORE - data.aggressive }}/{{ MAX_SCORE }}</td>
      </tr>
      <tr>
        <td>{{ data.confident }}/{{ MAX_SCORE }}</td>
        <td>자신감</td>
        <!-- <td></td> -->
        <td>신중함</td>
        <td>{{ MAX_SCORE - data.confident }}/{{ MAX_SCORE }}</td>
      </tr>
      <tr>
        <td>{{ data.responsible }}/{{ MAX_SCORE }}</td>
        <td>책임감</td>
        <!-- <td></td> -->
        <td>무심함</td>
        <td>{{ MAX_SCORE - data.responsible }}/{{ MAX_SCORE }}</td>
      </tr>
      <tr>
        <td>{{ data.indivisual }}/{{ MAX_SCORE }}</td>
        <td>개인적</td>
        <!-- <td></td> -->
        <td>조직서향</td>
        <td>{{ MAX_SCORE - data.indivisual }}/{{ MAX_SCORE }}</td>
      </tr>
      <tr>
        <td>{{ data.horizontal }}/{{ MAX_SCORE }}</td>
        <td>수평사고</td>
        <!-- <td></td> -->
        <td>위계사고</td>
        <td>{{ MAX_SCORE - data.horizontal }}/{{ MAX_SCORE }}</td>
      </tr>
    </table>
  </section>
</template>
<script>
import BarChart from "./BarChar.vue";
import { surveyData } from "@/data";

const { userSurvey } = surveyData;
const MAX_SCORE = 10;

export default {
  mounted() {
    console.log("bar", this.options);
  },
  components: {
    BarChart,
  },
  data() {
    return {
      data: userSurvey,
      MAX_SCORE,
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
}
.chart {
  /* display: flex;
  justify-content: center;
  align-items: center; */

}
</style>
