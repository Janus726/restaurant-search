export const strict = false
export const state = () => ({
  searchResult: {},
  selectedResult: null,
  bookmark: [],
  pages: 0,
  currentPage: 0,
  parameter: null,
  length: 0,
  detailOpen: false,
  gpsEnabled: false
})

export const mutations = {
  setResult (state, result) {
    state.searchResult = {
      ...state.searchResult,
      result
    }
  },
  setPages (state, pages) {
    state.pages = pages
  },
  setParameter (state, params) {
    state.parameter = params
  },
  setLength (state, length) {
    state.length = length
  },
  setCurrentPage (state, pageNum) {
    state.currentPage = pageNum
  },
  resultSelect (state, result) {
    state.selectedResult = result
  },
  addBookmark (state, data) {
    state.bookmark.push(data)
  },
  removeBookmark (state, id) {
    const index = state.bookmark.findIndex(b => b.id === id)
    state.bookmark.splice(index, 1)
  },
  menuDetail (state, action) {
    if (action === 'toggle') {
      state.detailOpen = !state.detailOpen
    } else if (action === 'close') {
      state.detailOpen = false
    }
  },
  gpsOn (state, status) {
    state.gpsEnabled = status
  }
}

export const actions = {
  async getSpot ({ commit }, { parameter, pageNum }) {
    const jsonpAdapter = require('axios-jsonp')
    await this.$axios({
      url: 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=0e89a77b5a90087c' + parameter + `&start=${pageNum.toString()}`,
      adapter: jsonpAdapter
    }).then((response) => {
      const result = response.data
      let pages
      console.log(result)
      if (result.results.results_available % 10 === 0) {
        pages = Math.floor(result.results.results_available / 10)
      } else {
        pages = Math.floor(result.results.results_available / 10) + 1
      }
      commit('setResult', result)
      commit('setPages', pages)
      commit('setLength', result.results.results_available)
    }).catch((_error) => {
      console.log('エラーが発生しました', _error)
    })
  },
  async searchSpot ({ dispatch, commit }, parameter) {
    const start = 1
    await commit('setCurrentPage', 0)
    await commit('setParameter', parameter)
    await dispatch('getSpot', { parameter: this.state.parameter, pageNum: start })
  },
  async nextPage ({ dispatch, commit }, pageNum) {
    const start = pageNum * 10 + 1
    await commit('setCurrentPage', pageNum)
    await dispatch('getSpot', { parameter: this.state.parameter, pageNum: start })
    console.log(pageNum)
    console.log(this.state.searchResult.result)
  },
  async prevPage ({ dispatch, commit }, pageNum) {
    const start = pageNum * 10 + 1
    await commit('setCurrentPage', pageNum)
    await dispatch('getSpot', { parameter: this.state.parameter, pageNum: start })
    console.log(pageNum)
    console.log(this.state.searchResult.result)
  },
  resultSelect ({ commit }, result) {
    commit('menuDetail', 'close')
    commit('resultSelect', result)
    console.log(result)
  },
  addBookmark ({ commit }, data) {
    commit('addBookmark', data)
  },
  removeBookmark ({ commit }, id) {
    commit('removeBookmark', id)
  },
  menuDetail ({ commit }, action) {
    commit('menuDetail', action)
  },
  gpsOn ({ commit }, status) {
    commit('gpsOn', status)
  }
}

export const getters = {
  result (state) {
    return state.searchResult.result
  },
  pages (state) {
    return state.pages
  },
  length (state) {
    return state.length
  },
  parameter (state) {
    return state.parameter
  },
  currentPage (state) {
    return state.currentPage
  },
  selectedResult (state) {
    return state.selectedResult
  },
  bookmark (state) {
    return state.bookmark
  },
  detailOpen (state) {
    return state.detailOpen
  },
  gpsStatus (state) {
    return state.gpsEnabled
  }
}
