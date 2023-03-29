<template>
  <div class="container">
    <div class="container_wrap">
      <app-timer  v-for="item in arr" :key="item">{{ item }}</app-timer>
      <app-add @click="incArr"></app-add>
    </div>
  </div>
</template>

<script>
import AppTimer from "@/components/AppTimer.vue";
import '../style.css'
import AppNewTimer from "@/components/AppNewTimer.vue";
export default {
  data(){
    return{
      i: 0,
      arr: [0],
    }
  },
  components:{
    'app-timer': AppTimer,
    'app-add': AppNewTimer
  },
  methods:{
    incArr(){
      this.i++;
      this.arr.push(this.i);
    }
  }
}
</script>

<style scoped>

</style>