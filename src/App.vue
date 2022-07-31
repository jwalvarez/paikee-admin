<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      color="white"
      width="320"
      floating
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <!-- <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img> -->
          <v-img
            :src="require('./assets/paikee-logo.png')"
            class="my-3"
            contain
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

      <v-list dense nav>
        <v-list-item-group v-model="selectedRoute" mandatory color="primary">
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
      style="padding: 0 6px"
    >
      <div class="calendar-container">
        <!-- <h3>Calendario</h3> -->
        <vc-date-picker is-expanded mode="date" v-model="date" />
      </div>
      <v-divider class="my-3"></v-divider>
      <h3>Clases de Hoy</h3>
      <v-card class="mb-4 mt-2 rounded-lg transparent" elevation="0">
        <v-card-actions>
          <h4>Finalizadas</h4>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{
              show ? "mdi-eye-off-outline" : "mdi-eye-outline"
            }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card outlined class="mb-4 mt-2 rounded-lg transparent" color="">
              <v-list-item three-line class="pa-0">
                <v-row>
                  <v-col cols="4">
                    <!-- <div class="light-blue lighten-1 rounded-lg mb-16"></div> -->
                    <v-list-item-content
                      class="light-blue lighten-1 rounded-lg mb-16"
                    >
                      <v-icon color="white"> mdi-twitter </v-icon>
                    </v-list-item-content>
                  </v-col>
                  <v-col cols="8">
                    <v-list-item-content class="pr-6">
                      <div class="text-overline mb-4 d-flex justify-end">
                        8:00 am
                      </div>

                      <v-list-item-subtitle>
                        <strong> Clase: </strong> Speaking
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <strong> Tutor: </strong> Tomas Ortiz
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <strong> Tipo: </strong> Individual
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <strong> # Alumnos: </strong> 24
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-card>
          </div>
        </v-expand-transition>
      </v-card>
      <div class="today-classes" overflow>
        <h4>Reservadas</h4>
        <v-card outlined class="mb-4 mt-2 rounded-lg transparent" color="">
          <v-list-item three-line class="pa-0">
            <v-row>
              <v-col cols="4">
                <!-- <div class="light-blue lighten-1 rounded-lg mb-16"></div> -->
                <v-list-item-content
                  class="light-blue lighten-1 rounded-lg mb-16"
                >
                  <v-icon color="white"> mdi-twitter </v-icon>
                </v-list-item-content>
              </v-col>
              <v-col cols="8">
                <v-list-item-content class="pr-6">
                  <div class="text-overline mb-4 d-flex justify-end">
                    8:00 am
                  </div>

                  <v-list-item-subtitle>
                    <strong> Clase: </strong> Speaking
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong> Tutor: </strong> Tomas Ortiz
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong> Tipo: </strong> Individual
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong> # Alumnos: </strong> 24
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </v-card>
      </div>
    </v-navigation-drawer>

    <v-app-bar app clipped-right flat height="90" :color="appBarColor">
      <v-col>
        <v-row>
          <v-toolbar-title><h1>Dashboard</h1></v-toolbar-title>
        </v-row>
        <v-row class="mt-0">
          <small>Admnistrador</small>
        </v-row>
      </v-col>

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
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    show: false,
    // appBarColor: "#E6EDF3",
    appBarColor: "transparent",
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
    mini: false,
    selectedRoute: 0,
    date: new Date(),
    //
  }),
};
</script>
<style>
.calendar-container {
  background: #e6edf3;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid rgba(137, 137, 137, 0.2);
}
.vc-pane-container {
  background-color: #e6edf3;
}

.vc-container {
  border: none !important;
}

.vc-arrows-container {
  padding: 8px 10px !important;
}
</style>
