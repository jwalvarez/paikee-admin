<template>
  <div>
    <div class="v-container">
      <BarChart></BarChart>
    </div>
    <v-container class="px-0">
      <v-row>
        <v-col v-for="i in 4" :key="i">
          <Stat />
        </v-col>
      </v-row>
    </v-container>
    <v-spacer class="mb-2"></v-spacer>
    <h3>Notificaciones Pop-ups</h3>
    <h4>Hoy</h4>
    <div v-for="i in 3" :key="i">
      <v-alert class="rounded-lg" color="#A1C4D924">
        <div class="text-h6">Epoca de examenes</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          tristique nam montes, ultrices. Gravida vel senectus lacus urna fusce
          bibendum morbi accumsan.
        </div>
        <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

        <v-row align="center" no-gutters>
          <v-col class="grow text-subtitle-2">
            Fecha de envio:
            <span class="text-primary">Agosto 5, 2022 - 18:30 pm</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="shrink">
            <v-btn color="info" class="text-capitalize" outlined>
              Enviar ahora
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
      <v-spacer class="mb-2"></v-spacer>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";
import Stat from "../components/Stat.vue";

export default {
  name: "Home",

  components: {
    BarChart,
    Stat,
  },
};
</script>

<style>
.v-container {
  background: #eaf0f5;
  padding: 40px;
  border-radius: 7px;
  border: 1px solid rgba(137, 137, 137, 0.2);
}
</style>
