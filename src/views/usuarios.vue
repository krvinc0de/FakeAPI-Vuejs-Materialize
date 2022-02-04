<template>
        <div class="container">
                <h1>Todos los usuarios</h1>
                <div class="row">
                <div class="col s12">
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Leanne Graham</span>
                        <p>Sincere@april.biz</p>
                        <span>username: </span>
                        <p>Bret</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu1">posts</router-link></a>
                        <a href="#" @click="Comentarios"><router-link to="/infoPrueba">Informacion</router-link></a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Ervin Howell</span>
                        <p>Shanna@melissa.tv</p>
                        <span>username: </span>
                        <p>Antonette</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu2">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Clementine Bauch</span>
                        <p>Nathan@yesenia.net</p>
                        <span>username: </span>
                        <p>Samantha</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu3">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Patricia Lebsack</span>
                        <p>Julianne.OConner@kory.org</p>
                        <span>username: </span>
                        <p>Karianne</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu4">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Chelsey Dietrich</span>
                        <p>Lucio_Hettinger@annie.ca</p>
                        <span>username: </span>
                        <p>Kamren</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu5">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Mrs. Dennis Schulist</span>
                        <p>Karley_Dach@jasper.info</p>
                        <span>username: </span>
                        <p>Leopoldo_Corkery</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu6">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Kurtis Weissnat</span>
                        <p>Telly.Hoeger@billy.biz</p>
                        <span>username: </span>
                        <p>Elwyn.Skiles</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu7">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Nicholas Runolfsdottir V</span>
                        <p>Sherwood@rosamond.me</p>
                        <span>username: </span>
                        <p>Maxime_Nienow</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu8">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Glenna Reichert</span>
                        <p>Chaim_McDermott@dana.io</p>
                        <span>username: </span>
                        <p>Delphine</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu9">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>               
                        </div>
                </div>
                <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">Clementina DuBuque</span>
                        <p>Rey.Padberg@karina.biz</p>
                        <span>username: </span>
                        <p>Moriah.Stanton</p>
                        </div>
                        <div class="card-action">
                        <a href="#"><router-link to="/pu10">posts</router-link></a>
                        <a href="#" @click="Comentarios">informacion personal</a>      
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
                        usuarios: [],
                        coments: [],
                        
                }
        },
        mounted(){
                const apiUsuarios = 'https://jsonplaceholder.typicode.com/users'
                let mostrar = this
                axios.get(apiUsuarios)
                .then(function(respuesta){
                        console.log('array de usuarios',respuesta.data)
                        mostrar.usuarios = respuesta.data
                })

        },
        methods:{
                Comentarios: function() {
                        const comentariosId = 'https://jsonplaceholder.typicode.com/comments/'
                        let mostrar = this
                        axios.get(comentariosId)
                        .then(function(respuesta){
                        console.log('array de coments',respuesta.data)
                        mostrar.coments = respuesta.data
                         })
                 },   
        }
}
</script>