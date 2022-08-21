<template>
  <div>
    <v-container class="pa-0 ma-0">
      <v-row>
        <v-col cols="4">
          <Stat
            :amount="7819"
            color="#7C4DFF"
            subtitle="840 usuarios"
            title="Total usuarios"
          />
        </v-col>
        <v-col cols="4">
          <Stat
            :amount="6001"
            color="#FF9E80"
            subtitle="240 usuarios nuevos esta semana"
            title="Profesores"
          />
        </v-col>
        <v-col cols="full">
          <Stat
            :amount="1801"
            color="#0091EA"
            subtitle="600 usuarios nuevos esta semana"
            title="Alumnos"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-spacer class="mb-4"></v-spacer>
    <div class="v-container">
      <BarChart></BarChart>
    </div>
    <v-spacer class="mb-4"></v-spacer>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <ProgressCircular
              title="Crecimiento último mes"
              :width="20"
              :value="50"
              :size="140"
              color="pink"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <ProgressCircular
              title="Clases grupales"
              :value="30"
              :size="80"
              color="#22598C"
            />
          </v-col>
          <v-col cols="6">
            <ProgressCircular
              title="Clases individuales"
              :value="20"
              :size="80"
              color="#31CAEC"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <PieChart class="pa-10" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import Stat from "../components/Stat.vue";
import ProgressCircular from "../components/ProgressCircular.vue";
import PieChart from "@/components/PieChart.vue";

export default {
  name: "ChartsView",

  components: {
    BarChart,
    Stat,
    ProgressCircular,
    PieChart,
  },
};
</script>

<style scoped>
.v-container {
  background-color: rgba(255, 255, 255, 0.3) !important;
  padding: 10px;
  border-radius: 12px !important;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.05) !important;
  padding: 40px;
}
</style>
