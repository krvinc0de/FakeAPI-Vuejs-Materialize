import axios from 'axios';
<template>
        <div class="container">
                <div>
                        <h1>todos los comentarios</h1>
                        <div class="row">
                        <div v-for="com in comentarios" :key="com.id">
                                <div class="col s6">
                                        <div class="card blue-grey darken-1">
                                                <div class="card-content white-text">
                                                <span class="card-title">{{com.name}}</span>
                                                <p>Usuario que lo posteo: {{com.id}}</p> <br>
                                                <p>{{com.body}}</p> <br>
                                                <p>correo: {{com.email}}</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
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
                        comentarios:[]
                }
        },
        mounted() {
                let mostrar = this
                axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(function(respuesta){
                        mostrar.comentarios = respuesta.data
                })

        },
}
</script>