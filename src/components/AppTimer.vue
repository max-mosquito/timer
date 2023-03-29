<template>
  <div class="item">
            <div class="timer">
              <p id="timer">{{(hours < 10 ? '0' : '') + hours}}:{{(minutes < 10 ? '0' : '') + minutes}}:{{(seconds < 10 ? '0' : '') + seconds}}</p>
            </div>
            <div class="control">
              <button v-if="show" @click="start" class="btn start"></button>
              <button v-else @click="pause" class="btn pause"></button>
              <button @click="reset"  class="btn stop"></button>
            </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      seconds: 0,
      minutes: 0,
      hours: 0,
      timer: 0,
      show: true,
    }
  },
  methods:{
    start(){
      this.show = !this.show
      this.timer = setInterval(()=>{
        // увеличиваем счетчики
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
      }, 1000);
    },
    pause(){
      this.show = !this.show
      clearInterval(this.timer)
    },
    reset(){
      clearInterval(this.timer)
      this.seconds = 0
      this.minutes = 0
      this.hours = 0
    },
  },
}
</script>

<style scoped>

</style>