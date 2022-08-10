<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="d-flex justify-start my-auto">
        <h3>Notificaciones Pop-ups</h3>
        <v-spacer></v-spacer>
      </div>
      <v-dialog
        transition="slide-y-transition"
        v-model="new_notification_dialog"
        persistent
        max-width="400px"
      >
        <!-- <v-btn color="primary" @click="initialize"> Reset </v-btn> -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            class="text-capitalize mr-5"
            elevation="0"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Crear Notificación
          </v-btn>
        </template>

        <v-card class="new-user-card">
          <v-row class="ma-0 pa-0">
            <v-col cols="12" class="text-center">
              <v-card-title>
                <span class="text-h6 font-weight-bold">
                  Crear nueva notificación Pop up
                </span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        class="rounded-lg text-subtitle-2"
                        dense
                        flat
                        hide-details
                        placeholder="Título Notificación"
                        single-line
                        solo
                        v-model="notification_title"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        class="rounded-lg text-subtitle-2"
                        flat
                        placeholder="Escribe aqui tu notificación"
                        solo
                        counter
                        :rules="rules"
                        v-model="notification_text"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="text-capitalize mr-5 px-5"
                  color="primary"
                  outlined
                  @click="closeNotificationDialog"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="primary"
                  class="text-capitalize mr-5 px-5"
                  elevation="0"
                  dark
                  @click="saveNotification"
                >
                  Guardar notifiación
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDelete" max-width="500px" persistent>
        <v-card>
          <v-card-title class="text-h7 d-flex justify-center">
            ¿Está Seguro que desea eliminar este usuario?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click=""> Cancelar </v-btn>
            <v-btn color="blue darken-1" text @click=""> OK </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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
export default {
  name: "NotificationView",
  data: () => ({
    rules: [(v) => v.length <= 100 || "Máximo 100 caracteres"],
    notification_text: "",
    notification_title: "",
    dialog: false,
    dialogDelete: false,
    sortBy: -1,
    new_notification_dialog: false,
  }),
  methods: {
    saveNotification() {
      const newNotification = {
        title: this.notification_title,
        text: this.notification_text,
      };
      console.log(newNotification);
      this.closeNotificationDialog();
    },
    closeNotificationDialog() {
      this.new_notification_dialog = false;
      this.initNotificationForm();
    },
    initNotificationForm() {
      this.notification_text = "";
      this.notification_title = "";
    },
  },
};
</script>
<style></style>
