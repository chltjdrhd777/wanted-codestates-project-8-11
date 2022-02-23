<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  props: {
    surveyData: Object,
  },
  mounted() {
    // negativeObj: 양 옆으로 그래프가 표시되도록 userSurvey는 음수 값으로 변경하였습니다.
    let obj = [Object.values(this.surveyData.userSurvey)];
    let negativeObj = obj[0].map(i => i*-1);
    this.renderChart(
      {
        labels: [...Object.keys(this.surveyData.userSurvey)], // 테이블 만들어지면 지울 것
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [...negativeObj]
          },
          {
            label: "Data two",
            backgroundColor: "#f87979",
            data: [...Object.values(this.surveyData.companySurvey.samsungSurvey)]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false,
      legend: {
        display: false,
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart'
      }
    }
      }
    );
  }
};
</script>
