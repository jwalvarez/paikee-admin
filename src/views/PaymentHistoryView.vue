<template>
  <div class="payment-history">
    <div class="summary-container">
      <div class="d-flex justify-start pa-6">
        <div class="d-flex pa-6 rounded-lg blue lighten-4">
          <div class="d-flex flex-column justify-center">
            <p class="mb-0 text-body-2">Resumen de pagos</p>
            <div class="d-flex justify-between mb-6">
              <h3 class="mb-0 text-h5 font-weight-bold">Información de pago</h3>
            </div>
            <v-btn color="primary" class="text-none" elevation="0" dark>
              Mostrar todo
            </v-btn>
          </div>
        </div>
        <div class="mx-2"></div>
        <div class="summary-card d-flex pa-6 rounded-lg">
          <v-icon
            class="blue lighten-3 pa-4 rounded-xl mr-4 mb-auto"
            color="white"
            size="30"
          >
            mdi-sprout-outline
          </v-icon>
          <div class="d-flex flex-column justify-center">
            <p class="mb-0">Pagos completados</p>
            <div class="d-flex justify-between mb-6">
              <h3 class="mb-0 text-h4 font-weight-bold">$43,781</h3>
              <span> <small> USD </small> </span>
            </div>
            <v-btn color="primary" class="text-none" elevation="0" dark text>
              Ver transacciones
            </v-btn>
          </div>
        </div>
        <div class="mx-2"></div>
        <div class="summary-card d-flex pa-6 rounded-lg flex-grow-1">
          <v-icon
            class="pink lighten-3 pa-4 rounded-xl mr-4 mb-auto"
            color="white"
            size="30"
          >
            mdi-chart-timeline-variant-shimmer
          </v-icon>
          <div class="d-flex flex-column justify-center">
            <p class="mb-0">Pagos cancelados</p>
            <div class="d-flex justify-between mb-6">
              <h3 class="mb-0 text-h4 font-weight-bold">$1,256</h3>
              <span> <small> USD </small> </span>
            </div>
            <v-btn color="primary" class="text-none" elevation="0" dark text>
              Ver transacciones
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="invoices"
      class="elevation-0 transparent"
      :sort-by="headers[sortBy]?.value"
      :items-per-page="5"
      :footer-props="{
        showFirstLastPage: true,
        'items-per-page-text': 'Movimientos por página',
        'items-per-page-all-text': 'Todos',
        'page-text': '{0}-{1} de {2}',
      }"
    >
      <template v-slot:item="{ item }">
        <tr class="data-table-row">
          <td>
            <v-chip
              :class="'bordered ' + getChipColor(item.status) + ' lighten-4'"
            >
              <strong>
                {{ item.status }}
              </strong>
            </v-chip>
          </td>
          <td class="blue--text">
            <strong>{{ item.reference }}</strong>
          </td>
          <td>{{ item.customer_data.name }}</td>
          <td>{{ item.payment_method_type }}</td>
          <td>
            <strong>$ {{ item.payment_data.amount }} USD</strong>
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
  name: "PaymentHistoryView",
  data: () => ({
    sortBy: -1,
    headers: [
      { text: "Estado", value: "status", sortable: true },
      {
        text: "Referencia",
        align: "start",
        value: "reference",
        sortable: false,
      },
      { text: "Cliente", value: "customer-name", sortable: false },
      {
        text: "Método de Pago",
        value: "payment_method_type",
        width: "220px",
        sortable: false,
      },
      {
        text: "Total",
        value: "amount",
        width: "220px",
        sortable: false,
      },
    ],
  }),

  computed: {},

  watch: {},

  created() {
    this.initialize();
  },

  methods: {
    getChipColor(status) {
      if (status == "Pendiente") {
        return "pink";
      }
      if (status == "Pagada") {
        return "blue";
      }
      if (status == "Cancelado") {
        return "grey";
      }
    },

    initialize() {
      this.invoices = [
        {
          status: "Pendiente",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Efectivo",
          payment_data: {
            amount: "42900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pagada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Tarjeta",
          payment_data: {
            amount: "189900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Cancelada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Efectivo",
          payment_data: {
            amount: "245900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pagada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Tarjeta",
          payment_data: {
            amount: "100900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pendiente",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Efectivo",
          payment_data: {
            amount: "42900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pagada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Tarjeta",
          payment_data: {
            amount: "189900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pagada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Tarjeta",
          payment_data: {
            amount: "100900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pendiente",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Efectivo",
          payment_data: {
            amount: "42900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Pagada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Tarjeta",
          payment_data: {
            amount: "189900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
        {
          status: "Cancelada",
          reference: "12345",
          customer_data: {
            id: "1002912991",
            name: "Juan Perez",
            phone_number: "123456789",
            country: "Colombia",
            city: "Bogotá",
            address: "Calle 1",
          },
          payment_method_type: "Efectivo",
          payment_data: {
            amount: "245900",
            currency: "COP",
            payment_date: "2020-01-01",
          },
        },
      ];
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

.summary-container {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.05);
  transition: all;
  transition-duration: 0.3s;
}

/* transform summary-container */
.summary-container:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(31, 38, 135, 0.1);
}

.summary-card {
  transition: all;
  transition-duration: 0.3s;
  cursor: default;
}

.summary-card:hover {
  background-color: rgb(229, 238, 241) !important;
}

.balance-icon {
  background-color: rgb(174, 174, 248);
}
</style>
