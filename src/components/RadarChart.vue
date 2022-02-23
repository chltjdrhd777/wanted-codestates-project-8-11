<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    surveyData: Object,
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          ["적극적인", "Aggressive"],
          ["자신있는", "Confident"],
          ["책임있는", "Responsible"],
          ["개인주의", "Indivisual"],
          ["수평적인", "Horizontal"],
        ],
        datasets: [
          {
            backgroundColor: "rgba(255, 193, 74, 0.32)",
            borderColor: "#FFD335",
            borderWidth: 2,
            borderRadius: 1,
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointRadius: 0,
            data: [...Object.values(this.surveyData.companySurvey.samsungSurvey)],
          },
          {
            backgroundColor: "rgba(110, 60, 249, 0.32)",
            borderColor: "#6E3CF9",
            borderWidth: 2,
            borderRadius: 1,
            pointRadius: 0,
            z: 1,
            data: [...Object.values(this.surveyData.userSurvey)],
          },
        ],
      },
      {
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
            fontColor: "blue",
            fontSize: 15,
          },
          ticks: {
            max: 10,
            min: 0,
            stepSize: 2.5,
            display: false,
          },
        },
      }
    );
  },
};
</script>