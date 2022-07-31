<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      color="grey lighten-3"
      width="300"
      floating
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <!-- <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img> -->
          <v-img
            :src="require('./assets/paikee-logo.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-list-item-avatar>

        <v-list-item-title>
          <v-img
            :src="require('./assets/paikee-name.png')"
            class="my-3"
            contain
          />
        </v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group v-model="selectedRoute" mandatory color="blue">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.url"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      clipped
      right
      floating
      width="300"
      color="transparent"
      style="padding: 0 10px"
    >
      <vc-date-picker is-expanded mode="date" v-model="date" />
    </v-navigation-drawer>

    <v-app-bar app clipped-right flat height="90" color="transparent">
      <div>
        <v-toolbar-title><h1>Dashboard</h1></v-toolbar-title>
        <small>Admnistrador</small>
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        prepend-inner-icon="mdi-magnify"
        single-line
        solo
        dense
      ></v-text-field>

      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main class="ma-2">
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,
    items: [
      { title: "Inicio", icon: "mdi-home-city", url: "/" },
      { title: "Usuarios", icon: "mdi-home-city", url: "/users" },
      { title: "Clases", icon: "mdi-home-city", url: "/classes" },
      { title: "Estadisticas", icon: "mdi-home-city", url: "/statistics" },
      { title: "Promociones", icon: "mdi-home-city", url: "/promos" },
      { title: "Notificaciones", icon: "mdi-home-city", url: "/notifications" },
      {
        title: "Historial de Pagos",
        icon: "mdi-home-city",
        url: "/pay-history",
      },
    ],
    mini: true,
    selectedRoute: 0,
    date: new Date(),
    //
  }),
};
</script>
<style>
.vc-pane-container {
  background: rgba(161, 196, 217, 0.14);
}
</style>
