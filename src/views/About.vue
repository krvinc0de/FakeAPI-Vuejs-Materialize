<template>
  <div class="container">
                <div class="row">
                <div class="col s12"><h1>Estos son todas las imagenes del dia</h1></div>
                <div v-for="img in fotos" :key="img.id">
                        <div class="col s6">
                                <div class="card blue-grey darken-1">
                                      <div class="card-image">
                                        <img :src="img.url">
                                        <span class="card-title">{{img.title}}</span>
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
      fotos:[]
    }
  },
  mounted() {
    const mostrar = this
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function(respuesta){
      console.log(respuesta.data)
      mostrar.fotos = respuesta.data
    })
  },
}
</script>