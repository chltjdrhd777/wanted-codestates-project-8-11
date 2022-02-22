<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    options: {
      type: Object,
      default: null,
    },
  },

  handler(chart) {
    console.log(chart);
    chart.options.scales.x.position = "center";
    chart.options.scales.y.position = "center";
    chart.update();
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      },
      this.options
    );
  },
};
</script>
