export default {
  methods: {
    parseDate (date, fullDate) {
      let month = []

      if (this.lang === 'ru') {
        month = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']
      } else if (this.lang === 'en') {
        month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      }

      date = new Date(date)
      return `${date.getDate()} ${month[date.getMonth()]} ${fullDate ? date.getFullYear() : ''}`
    }
  }
}
