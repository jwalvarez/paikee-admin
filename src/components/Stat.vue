<template>
  <v-card color="#EAF0F5">
    <v-card-title
      class="py-0 font-weight-black"
      v-text="items[0].title"
    ></v-card-title>
    <div class="d-flex pa-2">
      <v-avatar class="my-auto rounded-0" size="50">
        <v-icon color="black" large> mdi-account-multiple-outline </v-icon>
      </v-avatar>
      <div>
        <v-card-subtitle
          class="text-caption grey--text py-3"
          v-text="items[0].subtitle"
        ></v-card-subtitle>
        <div class="d-flex justify-start my-auto px-4">
          <h4 class="font-weight-black text-h4 cyan--text lighten-4">625</h4>
        </div>
        <!-- <v-card-subtitle class="ma-2 d-flex justify-end">
          <v-chip small color="#FFE2E5" label text-color="red">
            <v-icon left> mdi-label </v-icon>
            <strong> 1.97% </strong>
          </v-chip>
        </v-card-subtitle> -->
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Stat",
  props: {
    name: {
      type: String,
      default: "Nombre",
    },
  },
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Profesores",
        subtitle: "Profesores nuevos",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        subtitle: "Ellie Goulding",
      },
    ],
  }),
  components: {},
};
</script>
