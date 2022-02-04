<template>
        <div>
                <div class="row">
                <div class="col s12"><h1>Estos son todos los posteos del dia</h1></div>
                <div v-for="comentario in comentarios" :key="comentario.id">
                        <div class="col s6" v-if="numero === comentario.userId">
                                <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                        <span class="card-title">{{comentario.title}}</span>
                                        <p>{{comentario.body}}</p>
                                        </div>
                                        <div class="card-action">
                                        <a href="#">comentarios del post</a>
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
                        comentarios:[],
                        numero: 10
                }
        },
        mounted() {
                const apiComents = 'https://jsonplaceholder.typicode.com/posts'
                let mostrar =  this
                axios.get(apiComents)
                .then(function(respuesta){
                        console.log('comentarios usuario1', respuesta.data)
                        mostrar.comentarios = respuesta.data
                })
        },
}
</script>