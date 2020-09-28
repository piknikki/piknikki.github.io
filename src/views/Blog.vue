<template>
  <div id="jumbotron" class="mb-0 projects-container hero-body">
    <div class="container">
      <h1>Blog View</h1>
      <div class="container box">
<!--        <h3>Add a new post</h3>-->
        <form @submit.prevent="addPost">
<!--          <input v-model="newTitle" type="text" placeholder="Title" required/>-->
<!--          <br>-->
<!--          <textarea v-model="newBody" type="text" placeholder="What do you want to say?" required></textarea>-->
<!--          <br>-->
<!--          <br>-->
          <h3>Filter the existing posts</h3>
          <select v-model="selected" required>
            <option disabled value="">Pick a Label</option>
            <option>See all posts</option>
            <option>Coding</option>
            <option>Random</option>
            <option>Nerding</option>
            <option>Personal</option>
            <option>Kids</option>
          </select>

<!--          <button type="submit">Submit</button>-->
        </form>
      </div>

      <div class="container box">

        <article v-for="post in filteredByLabel" class="post message" :key="post">
          <div class="message-header">
            <h4 class="rainbow">{{ post.title }}</h4>
            <span class="tag is-medium is-pulled-right">{{ post.label }}</span>
          </div>
          <p class="message-body">{{ post.body}}</p>
        </article>
      </div>
    </div>
    <br>
    <br>
    <div class="container box text-center">
      <editor
        initialValue="<p>This is a sandbox for playing with TinyMCE.</p>"
        :init="{
              width: 500,
              height: 200,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap',
                'searchreplace visualblocks code fullscreen',
                'print preview anchor insertdatetime media',
                'paste code help wordcount table'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help'
            }"
      >
      </editor>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'blog',
  components: {
    editor: Editor
  },
  data () {
    return {
      bottom: false,
      selected: '',
      posts: [
        {
          body: 'Today I built a super simple cookie modal. Cookie Monster helped me out a little. Tomorrow I might build ' +
          'a pokemon thing for a code challenge. It requires React, so I\'m not super pumped about it.',
          title: 'Cookies!!',
          label: 'coding'
        },
        {
          body: 'I\'ve been pretty off-grid lately, partially because my kids started school and partially because I\'ve  ' +
            'been interviewing quite a bit. I have been trying out Vercel, which is like another way to deploy (like Netlify) ' +
            'and it\'s just as slick -- just push up to your connected repo in GitHub, and it automagically deploys to ' +
            'production. Wheeeee! I\'m also using Frontend Mentor now, for inspiration (I got bored with the other ideas I had).',
          title: 'Building stuff again',
          label: 'coding'
        },
        {
          body: 'Last week I got a new custom domain so I can use it to test out deploying to other places like Netlify  ' +
            'and Firebase. I hope to get to that this week, because it sounds fun. I\'m pretty excited with how easy it ' +
            'is to deploy to Netlify (just push up to your GitHub and it does the build automagically!), and am anticipating ' +
            'that Firebase will be similarly slick. I just want to try things out on Netlify a couple times before I move ' +
            'on over to Firebase.',
          title: 'How easy is it to deploy to Netlify?? ZOMG.',
          label: 'nerding'
        },
        {
          body: 'Amongst my interviews I worked on doing some fixes on Complete Forklift and then created an app to put ' +
            'your favorite quotes on. The data isn\'t persistent yet, but will be at some point (I\'ll need to create user ' +
            'login for that, I think). It was my first real use case for using Vuex, where I kept track of state throughout ' +
            'the addition and deletion of quotes. I would also like to add drag/drop capability to this. Probably tomorrow. ' +
            'Oh, this was also my first time deploying to Netlify and oooooooooohhhh boy is it slick!! I will do that more. ' +
            'The kids start school tomorrow, so I\'ve also been working on getting organized for that shitstorm to hit the fan.',
          title: 'More learning and stuff',
          label: 'coding'
        },
        {
          body: 'Although I have a soft verbal commitment from one company, I\'ve been doing a lot of interviews lately. ' +
            'I know that I need to keep looking because who knows when/if that will pan out. I\'m getting a lot of interviews ' +
            'and it\'s really been a great learning experience. But of course, I can\'t get projects done when I\'m doing ' +
            'all the work involved with applying and interviewing. Yesterday I built a stock data tool, but because I\'m using ' +
            'a free API, it doesn\'t really pull accurate data. Fun and interesting, though.',
          title: 'Interviews and distractions',
          label: 'random'
        },
        {
          body: 'Today I created a 404 page and tried to do a transform with fontawesome icons, which ended up frustrating me ' +
            'mightily. I also worked with my client Patrick on his site, talking more about his requirements and giving him a ' +
            'better logo. I\'m kinda pooped.',
          title: '404 and tweaks on other sites',
          label: 'coding'
        },
        {
          body: 'I created an account on Patreon so that I can get paid for work without getting gouged by platforms, ' +
            'create what I want to without restriction, and not be told what to do or how to do it. Please contribute ' +
            'using my link (I still need to figure out how it works): https://www.patreon.com/nikkipetersendev.',
          title: 'I joined Patreon!',
          label: 'random'
        },
        {
          body: 'Today\'s project was building a website for a client. It was just a start, but I\'m pretty happy with ' +
            'the outcome so far. I\'ll make more changes as I work with him to improve the layout and style the way he wants it, ' +
            'but his basic requirements were simplicity and minimalism, combined with functionality. He really just needs a way ' +
            'for his customers to see what inventory he has and to be able to reach him. It was built with Vue and Bulma, ' +
            'with a Firestore database. He wants a way to automatically curate the pieces to sell, which may be a bit of a ' +
            'challenge for me, but we will see what we can do. What I found interesting was that this was more mobile ' +
            'responsive than anything else I\'ve built with Bulma -- because I started with mobile and it didn\'t take ' +
            'much to work out kinks from there (whereas in the past, I\'ve built for web first and then had to jump through ' +
            'many hoops to improve mobile performance. It was a good lesson!!',
          title: 'Website with db for a client wheeee',
          label: 'coding'
        },
        {
          body: 'Today I spent a bunch of time trying to figure out how to get a form to work with any css thing, to no ' +
          'avail. Then I spend another whole bunch of time trying to figure out why I can\'t just inject some html into my ' +
          'page from the data that gets loaded. Whatever. I\'m taking the rest of the day off. Check out my 100 Projects page ' +
          'to see what I made recently. Maybe later I\'ll add some colors to it.',
          title: 'More of being stuck blarghh',
          label: 'coding'
        },
        {
          body: 'I\'m a wee bit stuck right now. I\'m working on a form and although Vue does forms just fine, it seems ' +
            'that Bootsrap, Bulma, and Materialize all mess with the collection of data from a selection dropdown ' +
            'when there are multiple questions. I think I will step back from that for a bit and work on something else ' +
            'from my to-do list, like maybe a 404 page or something else that won\'t tax my brain so hard.',
          title: 'Stuck uggh',
          label: 'coding'
        },
        {
          body: 'I\'m currently working on refactoring my Socially Awkward Gorilla app to use Vue instead of React, and ' +
            'Firebase instead of keeping the data in the app. One great reason to move the data is so that it\'s not just a local ' +
            'version of the app. In other words, I want users to be able to get matched with each other or really anyone who is ' +
            'in the database (as it is now, the user can only be matched with 10 pre-loaded profiles or anyone who fills out the form ' +
            'on that specific computer/browser. Firebase is pretty easy and versatile, but also useful. They do hosting, so I\'m trying ' +
            'to figure out if I can host the site there, too (instead of on Heroku). This is all a long-winded way of saying that ' +
            'my projects for the last couple of days are all smooshed together into one pretty dang large project (like, ' +
            'gorilla-sized). I\'m also wrestling with GitHub right now because deploying an app that needs a build is new ' +
            'to me and GitHub is difficult because I also port my custom domain, so . . . yeah.' +
            'So my projects list looks like only one project, but it\'s been a big one, and has taken longer (I could also ' +
            'just list the different components of it, I guess. ',
          title: 'Latest project(s)',
          label: 'coding'
        },
        {
          body: 'In my last job, I worked for a company that had a big office downtown and when we were sent to work at home ' +
          'due to the pandemic, I got a bunch of gear sent home with me so I could do my job. Now that I\'m no longer with that ' +
          'company, I have had to create my own version of that setup. So here\'s what I\'m working with.\n' +
          'Macbook Pro 15", wireless keyboard and mouse, and Philips 4k HD 27" monitor. I\'m also trying to improve my posture with a ' +
            'cushion thingy that is like a slice of a balance ball that sits on top of my chair. On my computer, I use WebStorm for an IDE, iTerm2 for a ' +
          'terminal, GitKraken for watching my repos and looking through history of commits and such, and Chrome for the dev tools. ' +
          'I am sure I\'ll think of something else super snazzy that I work with, but these are the basics. I particularly love GiKraken ' +
          'because it is super versatile in the git arena, but also because I can keep agile-type boards to track my work. Soooooo cash money.',
          title: 'My work environment and setup',
          label: 'nerding'
        },
        {
          body: 'Today I refactored my favorite app, Socially Awkward Gorilla (written by me), to utilize Vue and Bootstrap ' +
          'instead of vanilla JS and JQuery. It took a while, but I feel very accomplished. It wasn\'t hard at all! ' +
          'I still need to add the matching logic, so I\'ll have to do that tomorrow. I will also add Firebase so I can ' +
          'put the data somewhere else. It has been about 1.5 years since I\'ve even looked at Firebase, so that might take me ' +
          'a little while tomorrow. ',
          title: 'Vue implementation of Socially Awkward Gorilla',
          label: 'coding'
        },
        {
          body: 'Today I tried out Bit to see if it could be useful for sharing components across projects. I like it! I\'m' +
          'going to try it out tomorrow with a couple of real projects. I\'ll try sharing my progress bar that I built a couple days ago' +
          'with some other project and see how that goes. It seems super cool. It\'s not super intuitive like Git, but I think' +
          'I just need to get used to it.',
          title: 'Trying Bit for sharing/using components',
          label: 'coding'
        },
        {
          body: 'A list of ideas for projects:  a new profile website for myself (an update to this site) (including a new' +
            'blog layout that accepts posts at the UI so I don\'t have to hard code posts), a to-do list written ' +
            'in Vue and Bulma of this list of projects, a website to display all of my new projects, a mood picker that uses emojis, ' +
            'an app that is the wall of quotes (with drag/drop, add, delete, etc.), a website for my daughter\'s artwork, ' +
            'a random FontAwesome icon picker, a job scraper (to scrape specific jobs from BuiltIn Colorado), a skills/progress bar ' +
            'display, a 404 page, a toggle set that uses conditionals, a cookies popover, some kind of authentication work, try to ' +
            'incorporate Firebase into these projects (I assume as a db and/or authentication).',
          title: 'Where\'s my list?',
          label: 'coding'
        },
        {
          body: 'I\'m Learning more about my IDE just by doing Vue and Bulma tutorials. ' +
            'Brad Traversy is great that way.\rThis is supposed to be a new paragraph in my post, but I really don\'t want to have to ' +
            'escape all the time. I\'ll need to figure out how to do posts in the json object maybe, but also I want to ' +
            'learn how to use the TinyMCE RTE to its full potential.',
          title: 'Updating as I go',
          label: 'coding'
        },
        {
          body: 'Stares at human while pushing stuff off a table; soft kitty warm kitty little ball of furr. ',
          title: 'Cats are cats',
          label: 'random'
        },
        {
          body: 'Sleep on keyboard. Roll on the floor purring your whiskers off 𝕄𝔼𝕆𝕎, i love cuddles jump five feet high and sideways when a shadow moves.',
          title: 'Cats on keyboards',
          label: 'coding'
        },
        {
          body: 'Today, like all days, my kids were awesome. We hung out in our hammocks, chatted, and laughed.',
          title: 'My kids are seriously the best part of me',
          label: 'personal'
        },
        {
          body: 'Those crazy kids are going back to school. Even though it\'s a pandemic still, school will start in late August' +
            'and it will go remote until late September',
          title: 'School',
          label: 'kids'
        }
      ],
      newTitle: '',
      newBody: '',
      newLabel: ''
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.scrollPosts()
      }
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.scrollPosts()
  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    addPost () {
      const addedPost = Object.create({
        title: this.newTitle,
        body: this.newBody,
        label: this.newLabel
      })
      this.posts.push(addedPost)
      this.newTitle = ''
      this.newBody = ''
      this.newLabel = ''
    }
  },
  computed: {
    filteredByLabel () {
      if (this.selected === 'See all posts') {
        return this.posts
      } else {
        const filter = new RegExp(this.selected, 'i')
        return this.posts.filter(el => el.label.match(filter))
      }
    }
  }
}
</script>

<style>
  #jumbotron {
    background-color: transparent;
  }

  .rainbow {
    background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

</style>
