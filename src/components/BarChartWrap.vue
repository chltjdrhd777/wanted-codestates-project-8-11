<template>
  <section>
    <div class="section-header">
      <h4>MY RESULT</h4>
      <h3>나의 결과는?</h3>
    </div>
    <table>
      <tr>
        <td>8/10</td>
        <td>적극성</td>
        <td rowspan="5" class="chart">
          <BarChart width="80px" height="230px" />
        </td>
        <td>수동성</td>
        <td>2/10</td>
      </tr>
      <tr>
        <td>10/10</td>
        <td>자신감</td>
        <!-- <td></td> -->
        <td>신중함</td>
        <td>0/10</td>
      </tr>
      <tr>
        <td>6/10</td>
        <td>책임감</td>
        <!-- <td></td> -->
        <td>무심함</td>
        <td>4/10</td>
      </tr>
      <tr>
        <td>3/10</td>
        <td>개인적</td>
        <!-- <td></td> -->
        <td>조직서향</td>
        <td>7/10</td>
      </tr>
      <tr>
        <td>5/10</td>
        <td>수평사고</td>
        <!-- <td></td> -->
        <td>위계사고</td>
        <td>5/10</td>
      </tr>
    </table>
  </section>
</template>
<script>
import BarChart from "./BarChar.vue";

export default {
  mounted() {
    console.log("bar", this.options);
  },
  components: {
    BarChart,
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
  font-size: 15px;
}
h3 {
  font-size: 30px;
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
  /* background-color: red; */
}
</style>
