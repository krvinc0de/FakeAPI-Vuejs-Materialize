<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>TODOS</h1>
    <div class="row">
      <div class="col s12">aqui se muestran todos</div>
      <div class="col s12">
          <div class="row">
            <div class="col">
              <div class="card blue-grey darken-1" v-for="usuario in usuarios" :key="usuario.id">
                <div class="card-content white-text">
                  <span class="card-title">{{usuario.title}}</span>
                  <p>{{usuario.completed}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      usuarios: []
    }
  },
  mounted() {
    let mostrar = this;
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
      //console.log(response.data) //muestra el array
      mostrar.usuarios = response.data;
     // console.log(mostrar.usuarios)

    })
  },
}
</script>
