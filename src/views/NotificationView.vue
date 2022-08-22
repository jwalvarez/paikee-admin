<!-- TODO: Trying to implement dinamic timeline component -->
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
      </v-dialog>

      <v-dialog v-model="dialogDelete" max-width="500px" persistent>
        <v-card>
          <v-card-title class="text-h7 d-flex justify-center">
            ¿Está Seguro que desea eliminar esta notificación?
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
    <v-timeline dense clipped>
      <v-timeline-item fill-dot class="white--text mb-12" color="black" large>
        <template v-slot:icon>
          <span>JL</span>
        </template>
        <div class="new-notification-card pa-6">
          <v-text-field
            background-color="transparent"
            class="rounded-b-0 text-subtitle-2"
            flat
            hide-details
            placeholder="Título Notificación"
            single-line
            solo
            v-model="new_notification.title"
          >
          </v-text-field>
          <v-textarea
            :auto-grow="false"
            background-color="transparent"
            class="rounded-0 text-subtitle-2"
            flat
            hide-details
            height="100"
            placeholder="Escriba el texto de la notificación..."
            solo
            v-model="new_notification.text"
          >
          </v-textarea>
          <v-text-field
            background-color="transparent"
            class="rounded-0 text-subtitle-2"
            flat
            hide-details
            placeholder="Tag Notificación"
            single-line
            solo
            v-model="new_notification.tag"
          >
          </v-text-field>
          <v-dialog
            :return-value.sync="date"
            persistent
            ref="dialog"
            v-model="modal"
            width="300px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormattedMomentjs"
                background-color="transparent"
                class="rounded-t-0"
                flat
                label="Picker in dialog"
                prepend-inner-icon="mdi-calendar"
                readonly
                solo
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <div class="d-flex justify-end">
            <v-btn
              class="mx-0 text-none"
              depressed
              color="primary"
              @click="saveNotification"
            >
              Crear Notificación
            </v-btn>
          </div>
        </div>
      </v-timeline-item>

      <v-slide-x-transition group>
        <v-timeline-item
          v-for="notification in timeline"
          :key="notification.id"
          class="mb-4"
          color="blue"
          small
        >
          <!-- <v-row justify="space-between">
            <v-col cols="7" v-text="event.text"></v-col>
            <v-col class="text-right" cols="5" v-text="event.time"></v-col>
          </v-row> -->
          <v-row justify="space-between">
            <v-col cols="12">
              <v-alert class="rounded-lg" color="#A1C4D924">
                <div class="d-flex align-center mb-2">
                  <v-chip class="white--text ml-0 mr-2" color="blue lighten-2">
                    {{ notification.tag }}
                  </v-chip>
                  <div class="text-h6">{{ notification.title }}</div>
                </div>
                <div v-text="notification.text"></div>
                <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

                <v-row align="center" no-gutters>
                  <v-col class="grow text-subtitle-2">
                    Fecha de envio:
                    <span class="text-primary">notification.date</span>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="shrink">
                    <v-btn color="info" class="text-capitalize" outlined>
                      Enviar ahora
                    </v-btn>
                  </v-col>
                </v-row>
              </v-alert>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item class="mb-6" hide-dot>
        <span><strong>HOY</strong></span>
      </v-timeline-item>

      <v-timeline-item v-for="i in 5" class="mb-4" color="grey" small>
        <v-row justify="space-between">
          <v-col cols="12">
            <v-alert class="rounded-lg" color="#A1C4D924">
              <div class="d-flex align-center mb-2">
                <v-chip class="white--text ml-0 mr-2" color="blue lighten-2">
                  Regreso a clases
                </v-chip>
                <div class="text-h6">Epoca de examenes</div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                tristique nam montes, ultrices. Gravida vel senectus lacus urna
                fusce bibendum morbi accumsan.
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
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "NotificationView",
  data: () => ({
    // Review this
    events: [],
    input: null,
    nonce: 0,
    // end review
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    rules: [(v) => v.length <= 100 || "Máximo 100 caracteres"],
    new_notification: {},
    dialog: false,
    dialogDelete: false,
    sortBy: -1,
    new_notification_dialog: false,
    notification_id: 2,
    notifications: [
      {
        id: 1,
        tag: "Examen",
        title: "Notificación 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique nam montes, ultrices. Gravida vel senectus lacus urna fusce bibendum morbi accumsan.",
        date: "Agosto 5, 2022 - 18:30 pm",
      },
    ],
  }),
  computed: {
    timeline() {
      return this.notifications.slice().reverse();
    },
    computedDateFormattedMomentjs() {
      moment.locale("es");
      return this.date ? moment(this.date).format("MMMM D, YYYY") : "";
    },
    // computedDateFormattedDatefns() {
    //   return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
    // },
  },

  methods: {
    saveNotification() {
      const newNotification = {
        id: this.notification_id,
        title: this.new_notification.title,
        text: this.new_notification.text,
        tag: this.new_notification.tag,
        date: "Fecha estática",
      };
      this.notification_id++;
      this.notifications.push(newNotification);
      console.log(this.notifications);
      this.closeNotificationDialog();
    },
    closeNotificationDialog() {
      this.new_notification_dialog = false;
      this.initNotificationForm();
    },
    initNotificationForm() {
      this.new_notification = {
        title: "",
        text: "",
        tag: "",
      };
    },

    // Review this part
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(" ")
              .map((v) => v.charAt(0))
              .join("")}`;
          }
        ),
      });

      this.input = null;
    },
  },
};
</script>
<style scoped>
.new-notification-card {
  padding: 10px;
  border-radius: 10px;
  background-color: #a1c4d924;
}
</style>
