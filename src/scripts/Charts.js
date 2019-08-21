import Chart from 'chartjs';

class Charts {
  constructor () {
    this.firstInit = true;
    this.colors = {
      success: 'rgb(0, 209, 178)',
      successTransparent: 'rgba(0, 209, 178, 0.35)',
      warning: 'rgb(255, 196, 0)',
      warningTransparent: 'rgba(255, 196, 0, 0.35)',
      danger: 'rgb(255, 23, 68)',
      dangerTransparent: 'rgba(255, 23, 68, 0.35)',
      primary: 'rgb(73, 144, 226)',
      primaryTransparent: 'rgba(73, 144, 226, 0.35)',
      brand: 'rgb(201, 109, 216)',
      brandTransparent: 'rgba(201, 109, 216, 0.35)',
      white: 'rgb(255, 255, 255)',
      gray: 'rgb(233, 236, 239)',
      black: 'rgb(33, 37, 41)'
    };
  }

  setGlobalOptions () {
    // setting the responsive mode to true by default
    Chart.defaults.global.responsive = true;

    // setting the axes color and padding
    Chart.defaults.line.scales.xAxes[0].gridLines =
    Chart.defaults.line.scales.yAxes[0].gridLines =
    Chart.defaults.bar.scales.xAxes[0].gridLines =
    Chart.defaults.bar.scales.yAxes[0].gridLines =
    Chart.defaults.horizontalBar.scales.xAxes[0].gridLines =
    Chart.defaults.horizontalBar.scales.yAxes[0].gridLines = {
      tickMarkLength: 20,
      color: this.colors.gray,
      zeroLineColor: 'transparent'
    };

    // setting the padding for the yAxes (these don't have a tickMarkLength)
    Chart.defaults.line.scales.yAxes[0].ticks = {
      padding: 20
    };

    // hover settings for the line charts
    Chart.defaults.line.hover.mode = 'nearest';
    Chart.defaults.line.hover.intersect = true;

    // tooltips settings for the line charts
    Chart.defaults.line.tooltips = {
      mode: 'index',
      intersect: false
    };

    // setting the color of the polar area's grid lines to be the same axes of the line and bar charts
    Chart.defaults.polarArea.scale.gridLines.color = this.colors.gray;
    Chart.defaults.polarArea.scale.angleLines.color = this.colors.gray;

    // setting the color of the radar's grid and angle lines to be the same axes of the line and bar charts
    Chart.defaults.radar.scale.gridLines =
    Chart.defaults.radar.scale.angleLines = {
      color: this.colors.gray
    };
  }

  createChart (canvas, options) {
    if (!canvas) {
      throw new Error('The chart\'s canvas couldn\'t be found in the DOM.');
    }

    if (this.firstInit) {
      this.setGlobalOptions();
      this.firstInit = false;
    }

    return new Chart(canvas.getContext('2d'), options);
  }

  init () {
    // init filled line chart
    const filledLineChart = document.getElementById('filledLineChart');
    if (filledLineChart) {
      this.createChart(filledLineChart, {
        type: 'line',
        data: {
          labels: ['Ian', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [
            {
              label: 'Income',
              backgroundColor: this.colors.successTransparent,
              borderColor: this.colors.success,
              borderWidth: 3,
              data: [70, 50, 40, 50, 40, 30, 40, 60, 40, 50],
              pointBackgroundColor: this.colors.white,
              pointRadius: 5,
              pointHoverRadius: 5
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                min: 10
              }
            }]
          }
        }
      });
    }

    // init vertical bar chart
    const verticalBarChart = document.getElementById('verticalBarChart');
    if (verticalBarChart) {
      this.createChart(verticalBarChart, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              label: 'Income',
              data: [30, 50, 10, 70],
              backgroundColor: this.colors.brandTransparent,
              borderColor: this.colors.brand,
              borderWidth: 1
            },
            {
              label: 'Cost',
              data: [10, 20, 30, 50],
              backgroundColor: this.colors.warningTransparent,
              borderColor: this.colors.warning,
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                min: 0
              }
            }]
          }
        }
      });
    }

    // init pie chart
    const pieChart = document.getElementById('pieChart');
    if (pieChart) {
      this.createChart(pieChart, {
        type: 'pie',
        data: {
          labels: ['Red', 'Yellow', 'Green', 'Blue', 'Violet'],
          datasets: [{
            label: 'Dataset 1',
            data: [92, 16, 49, 22, 75],
            backgroundColor: [
              this.colors.danger,
              this.colors.warning,
              this.colors.success,
              this.colors.primary,
              this.colors.brand
            ]
          }]
        }
      });
    }

    // init bar-line chart
    const barLineChart = document.getElementById('barLineChart');
    if (barLineChart) {
      this.createChart(barLineChart, {
        type: 'bar',
        data: {
          labels: ['Ian', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              type: 'line',
              label: 'Dataset 1',
              data: [-100, 23, -10, -18, 99, 74, -37],
              fill: false,
              borderColor: this.colors.primary,
              borderWidth: 3,
              pointBackgroundColor: this.colors.primary,
              pointRadius: 3
            },
            {
              type: 'bar',
              label: 'Dataset 2',
              data: [37, 52, 38, 84, -49, -97, -61],
              backgroundColor: this.colors.successTransparent,
              borderColor: this.colors.success,
              borderWidth: 1
            },
            {
              type: 'bar',
              label: 'Dataset 3',
              data: [16, -97, -14, -24, -59, 31, 61],
              backgroundColor: this.colors.warningTransparent,
              borderColor: this.colors.warning,
              borderWidth: 1
            }
          ]
        },
        options: {
          tooltips: {
            mode: 'index',
            intersect: true
          }
        }
      });
    }
  }
}

export default Charts;
