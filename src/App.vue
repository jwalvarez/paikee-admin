<template>
  <v-app>
    <v-navigation-drawer
      v-if="isAuthenticated"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      class="navigation-drawer-left"
      width="260"
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
      v-if="isAuthenticated"
      app
      clipped
      right
      floating
      width="300"
      color="transparent"
      style="padding: 0 16px 0px 8px"
    >
      <div class="calendar-container mt-4">
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
          <div v-show="true">
            <v-divider></v-divider>

            <v-card outlined class="mb-4 mt-2 rounded-lg transparent" color="">
              <v-list-item three-line class="pa-0">
                <v-row>
                  <v-col cols="4">
                    <!-- <div class="light-blue lighten-1 rounded-lg mb-16"></div> -->
                    <v-list-item-content
                      class="light-blue lighten-1 rounded-lg mb-16"
                    >
                      <v-icon color="white"> mdi-forum-outline </v-icon>
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
      <v-card class="mb-4 mt-2 rounded-lg transparent" elevation="0">
        <v-card-actions>
          <h4>Reservadas</h4>

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
    </v-navigation-drawer>
    <!-- :color="appBarColor" -->
    <v-app-bar
      v-if="isAuthenticated"
      app
      clipped-right
      flat
      height="90"
      class="appBarColor"
    >
      <v-col>
        <v-row>
          <v-toolbar-title>
            <h1 class="text-h5 font-weight-bold" style="color: #323335">
              Bienvenido, Jhon 🎉
            </h1>
          </v-toolbar-title>
        </v-row>
        <v-row class="text-subtitle" style="color: #3b3d3f">
          <small>Administrador</small>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field
        class="mx-4 rounded-lg text-subtitle-2"
        hide-details
        prepend-inner-icon="mdi-magnify"
        flat
        solo
        single-line
        dense
        placeholder="Busca por nombre, tutor, clase, etc."
      >
      </v-text-field>

      <v-avatar size="40">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <v-menu
        open-on-hover
        offset-y
        left
        dark
        transition="slide-x-reverse-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dense class="py-0">
          <v-list-item
            color="primary"
            v-for="(option, index) in perfilMenu"
            :key="index"
            @click="closeSession"
          >
            <v-list-item-title>{{ option.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <div class="pa-4">
        <!-- If using vue-router -->
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    show: false,
    isAuth: false,
    selectedItemPerfilMenu: -1,
    // appBarColor: "#E6EDF3",
    drawer: true,
    perfilMenu: [
      {
        name: "Cerrar sesión",
      },
      {
        name: "Cerrar sesión",
      },
      {
        name: "Cerrar sesión",
      },
    ],
    items: [
      { title: "Resumen", icon: "mdi-home-outline", url: "/" },
      {
        title: "Usuarios",
        icon: "mdi-account-multiple-outline",
        url: "/users",
      },
      { title: "Clases", icon: "mdi-school-outline", url: "/classes" },
      {
        title: "Estadisticas de Paikee",
        icon: "mdi-chart-box-outline",
        url: "/statistics",
      },
      { title: "Promociones", icon: "mdi-sale-outline", url: "/promos" },
      {
        title: "Notificaciones",
        icon: "mdi-bell-outline",
        url: "/notifications",
      },
      {
        title: "Historial de Pagos",
        icon: "mdi-history",
        url: "/payment-history",
      },
    ],
    mini: false,
    selectedRoute: 0,
    date: new Date(),
    //
  }),
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.$store.state.user = user;
      this.$router.push("/");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {
    closeSession() {
      localStorage.removeItem("user");
      this.$store.state.user = {};
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.appBarColor {
  background: #ffffff20 !important;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.v-text-field {
  opacity: 0.6;
}

.navigation-drawer-left {
  background-color: #e6edf300 !important;
}

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
