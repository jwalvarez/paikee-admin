<template>
  <v-card class="circular-card">
    <div class="d-flex justify-center pa-4">
      <v-progress-circular
        :rotate="270"
        :size="size"
        :width="width"
        :value="ProgressCircularValue"
        :color="color"
        class="progress-circular"
      >
        <h3 class="mb-0 font-weight-bold text-h6">
          {{ ProgressCircularValue }}
        </h3>
        <strong> % </strong>
      </v-progress-circular>
    </div>

    <h3 class="text-center text-caption font-weight-bold">
      <v-badge dot inline left :color="color"></v-badge> {{ title }}
    </h3>
  </v-card>
</template>

<script>
export default {
  name: "ProgressCircular",
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 120,
    },
    width: {
      type: Number,
      default: 8,
    },
    color: {
      type: String,
      default: "red",
    },
  },
  data: () => ({
    ProgressCircularValue: 0,
  }),
  mounted() {
    setInterval(() => {
      this.ProgressCircularValue = this.value;
    }, 300);
  },
  components: {},
};
</script>

<style>
.v-progress-circular__overlay {
  stroke-linecap: round;
}

.circular-card {
  cursor: default;
  background-color: rgba(255, 255, 255, 0.3) !important;
  padding: 10px;
  border-radius: 12px !important;
  border: 1px solid rgb(236, 236, 236);
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.05) !important;
  transition: all;
  transition-duration: 0.3s;
}

.circular-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.1) !important;
}
</style>
