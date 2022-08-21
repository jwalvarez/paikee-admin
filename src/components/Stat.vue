<template>
  <v-card :color="color + '10'" class="stack-container py-4">
    <v-card-title class="py-0 text-body-1 font-weight-bold">
      <div class="d-flex">
        <v-icon
          class="pa-2 rounded-xl mr-4 mb-auto"
          :style="'background-color: ' + color + '30'"
          :color="color"
          size="34"
        >
          mdi-account-multiple-outline
        </v-icon>
        <div class="my-auto">
          <h4 class="font-weight-black text-h5 lighten-4">{{ amount }}</h4>
          <p class="text-caption font-weight-bold">{{ title }}</p>
        </div>
      </div>
    </v-card-title>
    <v-spacer class="mb-0"></v-spacer>

    <v-card-subtitle
      class="text-body-2 py-0"
      v-text="subtitle"
    ></v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Stat",
  props: {
    title: {
      type: String,
      default: "Título",
    },
    color: {
      type: String,
      default: "primary",
    },
    subtitle: {
      type: String,
      default: "Subtítulo",
    },
    amount: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({}),
  components: {},
};
</script>
<style scoped>
.stack-container {
  height: 100%;
  border: 1px solid #eeeeee !important;
  border-radius: 12px !important;
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.05) !important;
}
</style>
