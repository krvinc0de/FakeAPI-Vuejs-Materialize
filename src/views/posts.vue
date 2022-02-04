<template>
        <div class="container">
                <div class="row">
                <div class="col s12"><h1>Estos son todos los posteos del dia</h1></div>
                <div v-for="post in posteos" :key="post.id">
                        <div class="col s6">
                                <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">{{post.title}}</span>
                                        <p>Usuario que lo posteo: {{post.userId}}</p>
                                        <p>{{post.body}}</p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">post del usuario</a>
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
                        posteos: [],
                }
        },
        mounted() {
                const apiPosteos = 'https://jsonplaceholder.typicode.com/posts'
                let mostrar = this
                axios.get(apiPosteos)
                .then(function(respuesta){
                        console.log('array de posteos',respuesta.data)
                        mostrar.posteos = respuesta.data
                })
        }
}
</script>