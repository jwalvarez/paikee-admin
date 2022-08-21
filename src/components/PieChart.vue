<template>
  <div class="pie-container">
    <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 310,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Buenos Aires", "Cordoba", "Mendoza", "Neuquen"],
        datasets: [
          {
            backgroundColor: ["#7C4DFF", "#84FFFF", "#4527A0", "#FF9E80"],
            data: [40, 20, 80, 10],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style scoped>
.pie-container {
  border: 1px solid rgb(248, 248, 248) !important;
  cursor: default;
  background-color: rgba(255, 255, 255, 0.3) !important;
  padding: 10px;
  border-radius: 12px !important;
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.05) !important;
}
</style>
