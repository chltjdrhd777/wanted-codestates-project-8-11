<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  props: {
    surveyData: Object,
  },
  mounted() {
    // negativeObj: 양 옆으로 그래프가 표시되도록 userSurvey는 음수 값으로 변경하였습니다.
    let userObj = [Object.values(this.surveyData.userSurvey)]; 
    let companyObj = [Object.values(this.surveyData.companySurvey.samsungSurvey)]; 
    let negativeUserObj = userObj[0].map((i)=> i>=5 ? i*(-1) : 10 - i );
    let negativeCompanyObj = companyObj[0].map((i)=> i>=5 ? i*(-1) : 10 - i );
    this.renderChart(
      {
        labels: ["","","","",""], // 테이블 만들어지면 지울 것
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#6E3CF9",
            data: [...negativeUserObj],
          },
          {
            label: "Data two",
            backgroundColor: "#FFC24A",
            data: [...negativeCompanyObj],
          },
        ],
      },
      { 
        responsive: true,
        maintainAspectRatio: false,
        legend: { 
          display: false 
        },
        tooltips:{
          callbacks: {
            label:function(tooltipItem){
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          yAxes: [
            {
              barPercentage: 0.5,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 20,
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                min: -10,
                max: 10,
                stepSize: 20,
              },
            },
          ],
        },
      }
    );
  }
};
</script>
