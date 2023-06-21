import { doctor } from "./data.js";

const Encabezado = {
    props: {
        titulo: String
    },
    template: `<h1>{{titulo}}</h1>`
};

const TablasMedicas = {
    props: {
        columns: Array,
        doctores: Array
    },
    template: `<table class="table">
    <thead>
        <tr>
            <th v-for="column in columns" scope="col">{{column}}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, i) in doctores">
            <th scope="row">{{ i }}</th>
            <td>{{item.nombre}}</td>
            <td>{{item.apellido}}</td>
            <td>{{item.especialidad}}</td>
            <td>{{item.email}}</td>
        </tr>
       </tbody>
</table>`,
};

const { createApp } = Vue;
createApp({
    components: {
        'header-encabezado': Encabezado,
        'tablas-medicas': TablasMedicas

    },
    data() {
        return {
            tituloPrincipal: "Cartilla Médica",
            clasePrincipal: "fondo",
            claseTitulo: "estiloEncabezado",
            doctores: [],
            columns: [
                "id: ",
                "nombre: ",
                "apellido: ",
                "especialidad: ",
                "email: "

            ]
        }

    },
    created() {
        this.obtenerDatos();
    },
    methods: {
        obtenerDatos() {
            this.doctores = doctor;
        }
    },

}).mount('#app');