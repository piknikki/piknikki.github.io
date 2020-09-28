<template>
  <div id="app">
    <nav class="navbar is-vcentered" role="navigation" >
      <div class="navbar-brand"  to="/">
        <img class="d-inline-block mylogo" alt="my logo" src="./assets/logo.png">
        <span class="align-content-center myname">nikki petersen</span>
<!--        Do I need a burger here?   -->
<!--        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">-->
<!--          <span aria-hidden="true"></span>-->
<!--          <span aria-hidden="true"></span>-->
<!--          <span aria-hidden="true"></span>-->
<!--        </a>-->
      </div>

      <div class="navbar-menu">
        <div class="navbar-end is-active">
          <router-link class="nav-item nav-dots" to="/">Home</router-link>
          <router-link class="nav-item nav-dots" to="/about">About</router-link>
          <router-link class="nav-item nav-dots" to="/projects">Projects</router-link>
          <router-link class="nav-item nav-dots" to="/onehundred">100 Projects</router-link>
          <router-link class="nav-item nav-dots" to="/blog">Blog</router-link>
          <router-link class="nav-item nav-dots" to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Footer }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, "Architects Daughter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 50px;
}

.mylogo {
  padding: 10px;
  width: 100px;
}

.myname {
  padding: 0 10px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-item {
  padding: 10px;
}

.nav-dots {
  color: darkgrey;
  font-size: 1em;
  letter-spacing: 1px;
  vertical-align: center;
  margin-left: 1px;
  margin-right: 6px;
  border-radius: 20px;
}

.nav-dots:hover {
  border-left: 1px dotted deeppink;
  border-right: 1px dotted deeppink;
  margin-left: 0;
  margin-right: 5px;
  color: deeppink;
  border-radius: 20px;
  text-decoration: none;
}
</style>
