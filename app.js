import Vue from 'vue'
import App from './App.js' // The main Vue component
import BarChart from './components/BarChart.vue' // The BarChart component

Vue.component('bar-chart', BarChart);

new Vue({
  el: '#app',
  render: h => h(App),
  data() {
    return {
      chartData: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Housing',
            backgroundColor: '#FF6384',
            data: [1500, 1600, 1550, 1650, 1500, 1700]
          },
          {
            label: 'Utilities',
            backgroundColor: '#36A2EB',
            data: [200, 180, 190, 210, 200, 220] 
          },
          {
            label: 'Entertainment',
            backgroundColor: '#FFCE56',
            data: [300, 250, 275, 260, 280, 290]
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  }
})