import Highcharts from 'highcharts/highstock'

export default ({ app }, inject) => {
  inject('highcharts', Highcharts)
}
