<template>
        <div class="container">
                <div>
                        <div>
                                <table v-for=" info in informacion" :key="info.id">
                                       <thead v-if="identificador === info.id">
                                               <tr><th>nombre y id</th>
                                                       <th>direccion</th>
                                                       <th>celular</th>
                                                       <th>sitio web</th>
                                                       <th>empresa</th>
                                               </tr>
                                        </thead> 
                                        <tbody>
                                                <tr>   
                                                        <td>{{info.name}}, {{info.id}}</td>
                                                        <td>{{info.address.street}}, {{info.address.zipcode}}</td>
                                                        <td>{{info.phone}}</td>
                                                        <td>{{info.website}}</td>
                                                        <td>{{info.company.name}}</td>
                                                </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
        setup() {
                
        },
        data() {
                return {
                        informacion:[],
                        identificador: 1
                }
        },
        mounted() {
                const api = 'https://jsonplaceholder.typicode.com/users'
                let mostrar = this
                axios.get(api)
                .then(function(respuesta){
                        console.log(respuesta.data)
                        mostrar.informacion = respuesta.data
                })
        },
}
</script>