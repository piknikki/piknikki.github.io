<template>
  <div>
    <About />
    <Projects />
    <Onehundred />
    <Contact />
  </div>
</template>

<script>
import About from '../views/About'
import Projects from '../views/Projects'
import Contact from '../views/Contact'
import Onehundred from '../views/Onehundred'

export default {
  name: 'App',
  components: { About, Contact, Projects, Onehundred }
  // methods: {
  // goto(refName) {
  //   const element = this.$ref[refName];
  //   element.scrollIntoView({ behavior: 'smooth'})
  // }
  // }
}
</script>
