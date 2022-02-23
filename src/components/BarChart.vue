<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  props: {
    chartValue: Object,
  },

  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
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
      },
    };
  },

  methods: {
    getData(value) {
      // negativeObj: 양 옆으로 그래프가 표시되도록 userSurvey는 음수 값으로 변경하였습니다.
      let userObj =
        value.user !== null ? Object.values(value.user) : [0, 0, 0, 0, 0];
      let negativeUserObj = userObj.map((i) => (i >= 5 ? i * -1 : 10 - i));

      let companyObj =
        value.company !== null ? Object.values(value.company) : [0, 0, 0, 0, 0];
      let negativeCompanyObj = companyObj.map((i) =>
        i >= 5 ? i * -1 : 10 - i
      );

      const data = {
        labels: ["", "", "", "", ""], // 테이블 만들어지면 지울 것
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#6E3CF9",
            data: negativeUserObj,
          },
          {
            label: "Data two",
            backgroundColor: "#FFC24A",
            data: negativeCompanyObj,
          },
        ],
      };
      return data;
    },
  },

  mounted() {
    console.log("123123321");
    this.renderChart(this.getData(this.chartValue), this.options);
  },

  watch: {
    chartValue() {
      this.renderChart(this.getData(this.chartValue), this.options);
    },
    deep: true,
  },
};
</script>
