<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart(
      {
        labels: ["", "", "", "", ""],
        datasets: [
          {
            label: "two",
            backgroundColor: "#6E3CF9",
            data: [-8, -8, -6, 8, -4],
            borderWidth: 4,
          },
          {
            label: "one ",
            backgroundColor: "#FFC24A",
            data: [-10, -10, -10, 2, -6],
            borderWidth: 4,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
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
  },
};
</script>
