<template>
  <div class="users">
    <div class="d-flex justify-start mb-6">
      <v-btn disabled class="text-capitalize">Usuarios</v-btn>
      <div class="mx-2"></div>
      <v-btn color="primary" class="text-capitalize">Profesores</v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-0 transparent"
      :sort-by="headers[sortBy]?.value"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-text': 'Usuarios por página',
        'items-per-page-all-text': 'Todos',
        'page-text': '{0}-{1} de {2}',
      }"
    >
      <template v-slot:[`header.actions`]="{ header }">
        <div class="text-right">
          <v-menu
            transition="slide-x-transition"
            open-on-click
            offset-y
            left
            rounded="lg"
          >
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on" class="pb-2">
                {{ header.text }} {{ headers[sortBy]?.text || "Ninguna" }}
                <v-icon color="grey" dark> mdi-chevron-down </v-icon>
              </span>
            </template>

            <v-list flat dense left>
              <v-list-item-group v-model="sortBy" color="primary">
                <v-list-item v-for="(item, i) in filteredHeader" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </template>

      <template v-slot:item="{ item }">
        <tr class="data-table-row">
          <td>{{ item.name }}</td>
          <td>
            <v-checkbox dense hide-details v-model="singleSelect"></v-checkbox>
          </td>
          <td>
            <v-checkbox dense hide-details v-model="singleSelect"></v-checkbox>
          </td>
          <td>
            <v-checkbox dense hide-details v-model="singleSelect"></v-checkbox>
          </td>

          <!-- <td class="actions-col">
            <v-btn
              @click="deleteItem(item)"
              class="mx-2 square delete-btn"
              dark
              color="#A1C4D924"
              elevation="4"
            >
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
            <v-btn
              @click="editItem(item)"
              class="mx-2 square bordered edit-btn"
              dark
              color="white"
              elevation="4"
            >
              <v-icon dark color="black"> mdi-pencil </v-icon>
            </v-btn>
          </td> -->
        </tr>
      </template>

      <template v-slot:no-data>
        <div class="mt-10">
          <h2>No hay datos para mostrar</h2>
          <v-img
            class="mx-auto mt-4"
            max-width="250"
            src="../assets/no-data.png"
          ></v-img>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "UsersView",
  data: () => ({
    switch1: true,
    dialog: false,
    dialogDelete: false,
    sortBy: -1,
    rolOptions: [
      { text: "Alumno", value: "student" },
      { text: "Profesor", value: "teacher" },
      { text: "Administrador", value: "admin" },
    ],
    headers: [
      {
        text: "Usuarios",
        align: "start",
        value: "name",
        sortable: false,
      },
      { text: "Cupones", value: "class", sortable: false },
      { text: "Descuentos", value: "students", sortable: false },
      {
        text: "Clases Gratis",
        value: "protein",
        width: "220px",
        sortable: false,
      },
      // {
      //   text: "Ordenar por",
      //   value: "actions",
      //   sortable: false,
      //   align: "right",
      // },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      class: "",
      fat: "",
      students: "",
      protein: 0,
    },
    defaultItem: {
      name: "",
      class: 0,
      fat: 0,
      students: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Crear nuevo usuario" : "Editar usuario";
    },
    getDate() {
      moment.locale("es");
      const date = new Date();
      return moment(this.date).format("MMMM D, YYYY");
    },
    filteredHeader() {
      return this.headers.filter((item, index) => {
        return index <= 3;
      });
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    getChipColor(value) {
      if (value > 0 && value < 25) {
        return "#E42C6480";
      } else if (value >= 25 && value < 50) {
        return "#A1C4D924";
      } else if (value >= 50) {
        return "#24BBDC80";
      }
    },

    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          class: "Speaking",
          fat: 6.0,
          students: 24,
          protein: 4.0,
        },
        {
          name: "Ice Cream Sandwich",
          class: "Speaking",
          fat: 4.0,
          students: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          class: "Speaking",
          fat: 6.0,
          students: 26,
          protein: 4.0,
        },
        {
          name: "Cupcake",
          class: "Vocabulay",
          fat: 4.3,
          students: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          class: "Grammar",
          fat: 16.0,
          students: 49,
          protein: 4.9,
        },
        {
          name: "Jelly Bean",
          class: "Vocabulay",
          fat: 0.0,
          students: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          class: "Vocabulay",
          fat: 0.2,
          students: 98,
          protein: 0.0,
        },
        {
          name: "Honeycomb",
          class: "Grammar",
          fat: 3.2,
          students: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          class: "Grammar",
          fat: 25.0,
          students: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          class: "Vocabulay",
          fat: 26.0,
          students: 65,
          protein: 7.0,
        },
        {
          name: "Nougat",
          class: "Grammar",
          fat: 37.0,
          students: 49,
          protein: 20.0,
        },
        {
          name: "Oreo",
          class: "Grammar",
          fat: 18.0,
          students: 63,
          protein: 4.0,
        },
        {
          name: "Marshmallow",
          class: "Grammar",
          fat: 0.2,
          students: 81,
          protein: 4.3,
        },
        {
          name: "Chocolate",
          class: "Grammar",
          fat: 30.0,
          students: 70,
          protein: 3.6,
        },
        {
          name: "Cupcake",
          class: "Vocabulay",
          fat: 4.3,
          students: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          class: "Grammar",
          fat: 16.0,
          students: 49,
          protein: 4.9,
        },
        {
          name: "Jelly Bean",
          class: "Vocabulay",
          fat: 0.0,
          students: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          class: "Vocabulay",
          fat: 0.2,
          students: 98,
          protein: 0.0,
        },
        {
          name: "Honeycomb",
          class: "Grammar",
          fat: 3.2,
          students: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          class: "Grammar",
          fat: 25.0,
          students: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          class: "Vocabulay",
          fat: 26.0,
          students: 65,
          protein: 7.0,
        },
        {
          name: "Nougat",
          class: "Grammar",
          fat: 37.0,
          students: 49,
          protein: 20.0,
        },
        {
          name: "Oreo",
          class: "Grammar",
          fat: 18.0,
          students: 63,
          protein: 4.0,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
<style scoped>
.data-table-row:hover {
  background-color: rgba(255, 255, 255, 0.59) !important;
}

.data-table-row .delete-btn {
  opacity: 0;
  transition: all;
  transition-duration: 0.4s;
}

.data-table-row:hover .delete-btn {
  background-color: #39a7fc !important;
  transition: all;
  transition-duration: 0.3s;
  opacity: 1;
}

.data-table-row .edit-btn {
  opacity: 0;
  transition: all;
  transition-duration: 0.4s;
}

.data-table-row:hover .edit-btn {
  background-color: white !important;
  transition: all;
  transition-duration: 0.3s;
  opacity: 1;
}

.square {
  height: 36px !important;
  width: 36px !important;
  min-width: 0px !important;
}

.bordered {
  border: 1px solid red;
}

.actions-col {
  justify-content: end;
  display: flex;
  align-items: center;
}

.new-user-card {
  background-color: rgb(229, 238, 241) !important;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
