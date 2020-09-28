<template>
  <div class="hero is-medium">
    <div class="hero-body">
      <h2>One hundred projects in <s>one hundred days</s> . . . as quickly as I can make them. </h2>
      <p>Purpose: to improve my skills in Vue and Bulma, I will be doing a bunch of projects as quickly as I can (I'm aiming for
      30 days or less (it sort of depends on the size of the project).
      </p>
      <div class="content text-left">
        <p>Rules:</p>
        <ul>
          <li>Create a project every day (could be anything from a component to a website or app).</li>
          <li>That's pretty much it.  🤣</li>
          <li>Oh, I guess I should include adding it to this table. So do that.</li>
        </ul>
      </div>
      <hr>
        <table class="table is-striped is-hoverable is-narrow">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Live Link</th>
              <th>GitHub Repo</th>
              <th>Recently Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.name">
              <td>{{ project.number }}</td>
              <td>{{ project.name }}</td>
              <td>{{ project.type }}</td>
              <td>{{ project.description }}</td>
              <td>
                <a class="nav-dots linky"
                          variant="outline"
                          v-bind:href=project.liveUrl
                >
                  {{ project.liveUrl ? 'Deployed App' : null }}
                </a>
              </td>
              <td>
                <a class="nav-dots linky"
                                 variant="outline"
                                  v-bind:href=project.githubUrl
              >
                  {{ project.githubUrl ? 'GitHub Repo' : null }}
              </a>
              </td>
              <td v-if="project.updated === true" class="has-text-centered">✔️</td>
              <td v-else>  </td>
            </tr>
          </tbody>
        </table>
    </div>
    <ProgressBar />
  </div>

</template>

<script>
import ProgressBar from '../components/ProgressBar'

export default {
  components: { ProgressBar },
  data () {
    return {
      updated: false,
      projects: [
        {
          number: 1,
          name: 'Magical Pet finder',
          type: 'app',
          description: 'Fun matching thing',
          liveUrl: 'https://magical-pet-adoption.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/vue-pets',
          updated: false
        },
        {
          number: 2,
          name: 'Bakery Website',
          type: 'website',
          description: 'Portfolio type website',
          liveUrl: 'https://hero-profile.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/hero-portfolio',
          updated: false
        },
        {
          number: 3,
          name: 'This Portfolio',
          type: 'website',
          description: 'My new layout (need to move to GitHub)',
          liveUrl: 'https://piknik-portfolio.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/vue-portfolio-private',
          updated: false
        },
        {
          number: 4,
          name: 'Canban Badges',
          type: 'app',
          description: 'Very basic todo list',
          liveUrl: 'https://canban-badges.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/canban-badges',
          updated: false
        },
        {
          number: 5,
          name: 'My blog',
          type: 'component',
          description: 'Very basic blog (style/adding new posts later)',
          liveUrl: 'https://piknik-portfolio.herokuapp.com/blog',
          githubUrl: 'https://github.com/piknikki/vue-portfolio-private/blob/master/src/views/Blog.vue',
          updated: true
        },
        {
          number: 6,
          name: 'Laura\'s profile page',
          type: 'website',
          description: 'Profile page',
          liveUrl: 'https://dashboard.heroku.com/apps/laura-profile',
          githubUrl: 'https://github.com/piknikki/rg-style-portfolio',
          updated: false
        },
        {
          number: 7,
          name: 'Sweet Progress Bar',
          type: 'component',
          description: 'A sweet little rainbow progress bar (look below)',
          liveUrl: 'https://piknik-portfolio.herokuapp.com/onehundred',
          githubUrl: 'https://github.com/piknikki/vue-portfolio-private/blob/master/src/components/ProgressBar.vue',
          updated: false
        },
        {
          number: 8,
          name: 'Looking into Bit',
          type: 'technology',
          description: 'taking Bit for a test run',
          liveUrl: null,
          githubUrl: null,
          updated: false
        },
        {
          number: 9,
          name: 'Socially Awkward Gorilla',
          type: 'app',
          description: 'A Vue implementation of SAG (still need to install the compute method to make matches)',
          liveUrl: 'https://vue-sag.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/vue-sag',
          updated: false
        },
        {
          number: 10,
          name: 'FakeCompanies Manager',
          type: 'app',
          description: 'Add, delete, or edit a company; hooked up to a db (Firebase)',
          liveUrl: 'https://frontend-v2.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/companies-v2',
          updated: false
        },
        {
          number: 11,
          name: 'Random FontAwesomeness',
          type: 'app',
          description: 'Refresh to see a new random fontawesome icon',
          liveUrl: 'https://random-fontawesomeness.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/random-fontawesomeness',
          updated: false
        },
        {
          number: 12,
          name: 'Complete Forklift',
          type: 'website/db',
          description: 'Website with database for a client',
          liveUrl: 'https://patrick-website-deploy.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/patrick-website',
          updated: false
        },
        {
          number: 13,
          name: 'Stock Grabber',
          type: 'component',
          description: 'Stock data grabber (disclaimer: not totally accurate data and not financial advice)',
          liveUrl: 'https://stockgrabber-v2.herokuapp.com/',
          githubUrl: 'https://github.com/piknikki/stock-grabber-v2',
          updated: false
        },
        {
          number: 14,
          name: 'Quote Wall',
          type: 'app',
          description: 'A place to put your favorite quotes',
          liveUrl: 'https://quote-place.netlify.app/',
          githubUrl: 'https://github.com/piknikki/quote-place-v2',
          updated: false
        },
        {
          number: 15,
          name: 'Price Component',
          type: 'component',
          description: 'A component that displays price plans',
          liveUrl: 'https://mentor-pricing-component.vercel.app/',
          githubUrl: 'https://github.com/piknikki/mentor-pricingComponent',
          updated: true
        },
        {
          number: 16,
          name: 'Cookie Modal',
          type: 'component',
          description: 'A component that alerts user to cookie policy',
          liveUrl: 'https://determined-cori-08e3b1.netlify.app/',
          githubUrl: 'https://github.com/piknikki/cookie-component',
          updated: true
        }
      ]
    }
  }
}
</script>

<style>
  ul {
    list-style-type: circle;
    font-size: 16px;
  }

</style>
