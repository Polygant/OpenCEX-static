export const state = () => ({
  lang: 'en',
  dataGraph: [],
  dataGraphMin: {},
  pairs_data: {},
  limits: {},
  info: {
    btc_usdt_price: 0,
    btc_usdt_percent: 0,
    btc_usdt_profit: 0,
    type_human: 0,
    currency: 'USDT'
  }
})

export const mutations = {
  SET_LANG (state, lang) {
    state.lang = lang
  },

  SET_DATA_GRAPH (state, data) {
    state.dataGraph = data
  },

  SET_DATA_GRAPH_MIN (state, data) {
    state.dataGraphMin = data
  },

  SET_DATA_PAGE (state, data) {
    state.info = data
  },

  SET_DATA_LIMITS (state, data) {
    state.limits = data
  },

  SET_PAIRS_DATA (state, data) {
    state.pairs_data = data
  }
}

export const actions = {
  getInfoMainPage ({ commit }) {
    this.$axios.$get('/api/v1/home-page/').then((resp) => {
      // eslint-disable-next-line camelcase
      const { pairs_data, ...data } = resp
      commit('SET_PAIRS_DATA', pairs_data)
      commit('SET_DATA_PAGE', data)
      this.$axios.$get('/api/v1/limits/').then((lims) => {
        commit('SET_DATA_LIMITS', lims)
      }).catch(() => {})
    }).catch(() => {})
  },

  async getGraphInfo ({ commit }) {
    await this.$axios.$post('/api/v1/stats/', {
      frame: 'hour',
      pair: 'BTC-USDT',
      stop_ts: new Date().getTime(),
      start_ts: new Date().getTime() - 60 * 60 * 24 * 7 * 1000
    }).then((data) => {
      const graphPoints = data.records.filter((d) => {
        return d[1] && d[3] && d[4] && !(d[0] % (12 * 60 * 60 * 1000))
      })
      commit('SET_DATA_GRAPH', graphPoints)
      commit('SET_DATA_GRAPH_MIN', Math.min(...graphPoints.map(d => d[1])))
    }).catch(() => {})
  }
}

export const getters = {
  lang: state => state.lang,
  dataGraph: state => state.dataGraph,
  dataGraphMin: state => state.dataGraphMin,
  pairs_data: state => state.pairs_data,
  info: state => state.info,
  limits: state => state.limits
}
