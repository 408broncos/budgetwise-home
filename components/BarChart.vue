<template>
    <div>
      <chartjs-bar :chart-data="chartData" :options="chartOptions"></chartjs-bar>
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  
  export default {
    extends: Bar,
    props: ['chartData', 'options'],
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
  </script>