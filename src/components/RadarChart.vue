<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    console.log(this.options)
    this.renderChart(this.chartData, this.options);
  },
};
</script>