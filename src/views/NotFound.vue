<template>
  <div class="not-found">
    <div class="container box">
      <div class="portal has-text-centered">
        <span><i class="fal fa-portal-enter portal"></i></span>
         ... You are here ...
        <span><i class="fal fa-portal-exit portal"></i></span>
      </div>
      <br>
      <h4>In other words, the page you were trying to reach is lost somewhere in the universe (or maybe it never existed).</h4>
      <br>
      <span class="float-lg-right">
        <router-link to="/"><i class="fal fa-police-box fa-spin fa-3x"></i></router-link>
      </span>
      <span class="float-lg-left">
        <router-link to="/"><i class="fal fa-police-box fa-spin fa-3x"></i></router-link>
      </span>

      <br>
      <br>
<!--      <span v-for="icon in icons" id="fa-icon" class="icon is-large is-vcentered">-->
<!--           <i :class="'fal fa-' + currentIcon() + ' fa-3x portal transporter'"></i>-->
<!--      </span>-->

<!--      <span class="fa-3x">-->
<!--        <i class="fal fa-transporter "></i>-->
<!--        <i class="fal fa-transporter-1 "></i>-->
<!--        <i class="fal fa-transporter-2 "></i>-->
<!--        <i class="fal fa-transporter-3 "></i>-->
<!--        <i class="fal fa-transporter-empty "></i>-->
<!--      </span>-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {
      hover: false,
      icons: [
        'transporter',
        'transporter-1',
        'transporter-2',
        'transporter-3',
        'transporter-empty'
      ],
      selectedIcon: this.selectedIcon
    }
  },
  methods: {
    currentIcon (items) {
      setTimeout(() => {
        console.log(items)
      }, 1000)
    }
  },
  created () {
    this.selectedIcon = this.currentIcon(this.icons)
    setTimeout(this.currentIcon.bind(this), 5000)
  }
}
</script>

<style scoped>
span:hover {
  color: transparent;
  transition-property: color;
  transition-duration: 2s;
  transition-timing-function: linear;
}
.portal {
  font-size: 3em;
  letter-spacing: 2px;
}

.fa-house-return {
  color: #2F45A3;
}

</style>
