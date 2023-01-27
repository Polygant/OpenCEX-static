export default {
  methods: {
    number_formatter (number) {
      if (number || number === 0) {
        const num = number.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')

        return num
      }
    }
  }
}
