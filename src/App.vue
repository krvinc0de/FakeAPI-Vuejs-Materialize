<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo left">FrikiBook</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a><router-link to="/">Home</router-link></a></li>
          <li><a><router-link to="/about">Imagenes</router-link></a></li>
          <li><a><router-link to="/usuarios">usuarios</router-link></a></li>
          <li><a><router-link to="/comentarios">comentarios</router-link></a></li>
          <li><a><router-link to="/posts">posts</router-link></a></li>
        </ul>
      </div>
    </nav>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
