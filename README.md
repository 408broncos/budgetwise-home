# Budgetwise-challenge


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:|   
| CSS   | [https://www.w3schools.com/w3css/w3css_progressbar.asp](https://www.w3schools.com/w3css/w3css_progressbar.asp) 
| Javascript| [https://www.w3schools.com/js/js_graphics_chartjs.asp](https://www.w3schools.com/js/js_graphics_chartjs.asp) |


## Description 

[Visit the Deployed Site](https://408broncos.github.io/budgetwise-home/)


## Markdown



https://github.com/408broncos/budgetwise-home/assets/126821868/2d4235f1-4f07-49fb-9e54-dcc1b8a60c39



## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
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

```
In this code snippet we have an import for vue to create a graph chart. In this example you see the data being used and with labels to associate the data with. However, after hours of tirelessly trying to get the functionality of the graph to work I was not able to create the chart. This is a challenge that I would love to keep working through so that in the future I can get this locked down and retained.

```html
   <div class="category">
            <div class="category-icon category-icon-shopping"></div>
            <div class="category-text">
                <span>Shopping</span>
                <span>spent $20 of $100</span>
            </div>
            <div class="category-progress">
                <div class="shop-progress" style="width: 20%;"></div>
            </div>
            <span class="text-left-10">left</span>
            <span class="left-10">$80</span>
        </div>
```
Here is another example of something that I struggled and stil am struggling with. I created the progress bars for each category but on the ones with a 0% gain the grey bars would not extend more towards the filled in progress. I tried working through many alternatives to the css but to no prevail. This is also something I hope to master in the future so no other complications prevent my progress again.


## Learning Points 

There were a ton of learning points for me in this challenge. The first being the use of Vue.js, I've had expereince with Vue in the past but never something like this before. I really do love the functionality and use for Vue, but I would definitely want to spend more time learning more about it. As for html and css I felt very content with how much progress I've made through my experiences and learnings from this challenge, I believe this only strengthened my knowledge for both languages and has pushed me to learn more.


## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 Confidential and Proprietary. All Rights Reserved.
