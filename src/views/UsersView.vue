<template>
  <div class="users">
    <!-- <div class="d-flex justify-start mb-6">
      <v-btn disabled class="text-capitalize">Usuarios</v-btn>
      <div class="mx-2"></div>
      <v-btn color="primary" class="text-capitalize">Profesores</v-btn>
    </div> -->

    <div class="d-flex justify-space-between">
      <div class="d-flex justify-start my-auto">
        <v-switch
          class="my-auto ml-4"
          v-model="switch1"
          inset
          :label="switch1 ? 'Mostrar Estudiantes' : 'Mostrar Profesores'"
        ></v-switch>

        <v-spacer></v-spacer>
      </div>

      <v-dialog v-model="dialog" max-width="400px">
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
            Crear Usuario
          </v-btn>
        </template>

        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.name"
                    label="Dessert name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.class"
                    label="class"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.fat"
                    label="Fat (g)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.students"
                    label="students (g)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.protein"
                    label="Protein (g)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h7 d-flex justify-center">
            ¿Está Seguro que desea eliminar este usuario?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">
              Cancelar
            </v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">
              OK
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-0 transparent"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-text': 'Usuarios por página',
        'items-per-page-all-text': 'Todos',
        'page-text': '{0}-{1} de {2}',
      }"
    >
      <!-- <template v-slot:[`footer.page-text`]="items">
        {{ items.pageStart }} - {{ items.pageStop }} de {{ items.itemsLength }}
      </template> -->

      <template v-slot:item="{ item }">
        <tr class="data-table-row">
          <td>{{ item.name }}</td>
          <td>{{ item.class }}</td>
          <td>
            <v-chip :color="getChipColor(item.students)">
              <strong>
                {{ item.students }}
              </strong>
            </v-chip>
          </td>
          <td>
            <v-progress-linear
              v-model="item.protein"
              color="blue-grey"
              height="24"
              class="rounded-lg"
            >
              <template v-slot:default="{ protein }">
                <strong>{{ Math.ceil(item.protein) }}%</strong>
              </template>
            </v-progress-linear>
          </td>
          <td class="actions-col">
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
          </td>
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
export default {
  name: "UsersView",
  data: () => ({
    switch1: true,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Profesores",
        align: "start",
        value: "name",
      },
      { text: "Clase", value: "class" },
      { text: "Alumnos", value: "students" },
      {
        text: "Progreso del Curso",
        value: "protein",
        width: "220px",
      },

      {
        text: "Editar/Eliminar",
        value: "actions",
        sortable: false,
        align: "right",
      },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      class: 0,
      fat: 0,
      students: 0,
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
<style>
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
</style>
