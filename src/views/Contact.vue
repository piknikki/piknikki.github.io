<template>
  <div class="hero is-small contact-container">

    <h1>Contact</h1>
    <br>
    <div class="container">
      <div class="columns">
        <div class="column is-narrow">
          <span class="icon"><i class="fab fa-patreon fa-2x"></i></span>
          <a class="nav-dotsc awesome" href="https://www.patreon.com/nikkipetersendev">
            Patreon
          </a>
        </div>
      </div>

      <div class="columns">
        <div class="column is-narrow">
            <span class="icon"><i class="fab fa-linkedin fa-3x"></i></span>
          <a class="nav-dotsc awesome" href="https://www.linkedin.com/in/nikkipetersencsm/">
            LinkedIn
          </a>
        </div>
      </div>

      <div class="columns">
        <div class="column is-narrow">
          <span class="icon"><i class="fab fa-github-alt fa-3x"></i></span>
          <a class="nav-dotsc awesome" href="https://github.com/piknikki">
            GitHub
          </a>
        </div>
      </div>

      <div class="columns">
        <div class="column is-narrow">
          <span class="icon"><i class="fal fa-unicorn fa-3x"></i></span>
          <a class="nav-dotsc awesome" href="mailto: nikkipetersen.dev@gmail.com">
            Email me
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style>
  .nav-dotsc {
    color: darkgrey;
    font-size: 2em;
    letter-spacing: 1px;
    vertical-align: center;
    margin-left: 1px;
    margin-right: 6px;
    border-radius: 20px;
  }

  .nav-dotsc:hover {
    border-left: 1px dotted deeppink;
    border-right: 1px dotted deeppink;
    margin-left: 0;
    margin-right: 5px;
    color: deeppink;
    border-radius: 20px;
    text-decoration: none;
  }

  .awesome {
    vertical-align: center;
    padding: 0 10px;
  }
</style>
