<template>
  <div class="container box" id="progress-bar">
    <div class="shell">
      <div class="bar" :style="{ width: progress + '%' }">
        <span id="percentage"> {{ progress }}%</span>
      </div>
    </div>
    <button id="plus" @click="increaseProgress"><i class="fal fa-plus-circle"></i></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progress: 15
    }
  },
  methods: {
    increaseProgress () {
      if (this.progress < 100 && this.progress > 0) {
        this.progress += 5
      }
    }
  }
}
</script>

<style scoped>
  button:focus {
    outline: none;
  }
  .box {
    height: 200px;
  }
  #progress-bar {
    /*height: 10vh;*/
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }

  .shell {
    height: 30px;
    width: 500px;
    border: 1px solid #aaa;
    border-radius: 13px;
    padding: 3px;
  }

  #plus {
    border: none;
    background-color: transparent;
    margin: 0 15px;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .bar {
    background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
    background-size: cover;
    height: 20px;
    width: 15%;
    border-radius: 9px;
  }

  #percentage {
    color: white;
    padding: 4px 5px;
  }

</style>
