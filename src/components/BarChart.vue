<template>
  <div>
    <Bar
      v-if="showBarChartType"
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
    <LineChartGenerator
      v-else
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
import { Bar } from "vue-chartjs";
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  LineElement,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "BarChart",
  components: { Bar, LineChartGenerator },
  props: {
    // TODO: Change this value through state props
    showBarChartType: {
      type: Boolean,
      default: true,
    },
    chartId: {
      type: String,
      // default: "bar-chart",
      default: "chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 200,
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
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showBarChartType: true,
      chartData: {
        labels: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
        datasets: [
          {
            label: "Grupales",
            backgroundColor: "#22598C",
            data: [15, 10, 22, 13, 19, 30, 48, 20, 10, 15, 20, 30],
          },
          {
            label: "Individuales",
            backgroundColor: "#31CAEC",
            data: [10, 12, 18, 18, 29, 34, 33, 31, 28, 30, 30, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Clases dictadas ~ 2022",
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  },
};
</script>
