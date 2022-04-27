export const strict = false
export const state = () => ({
  searchResult: {},
  selectedResult: null,
  bookmark: [],
  pages: 0,
  currentPage: 0,
  parameter: null,
  length: 0
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
  }
}

export const actions = {
  async getSpot ({ commit }, { parameter, pageNum }) {
    await this.$axios.$get('/api/hotpepper/gourmet/v1/?key=0e89a77b5a90087c' + parameter + `&start=${pageNum.toString()}`)
      .then((result) => {
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
      })
      .catch((err) => {
        console.log(err, 'エラー')
        this.$bvToast.toast('通信に失敗しました。ネットワーク接続を確認して，もう一度読み込んでください。', {
          variant: 'danger'
        })
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
    commit('resultSelect', result)
    console.log(result)
  },
  addBookmark ({ commit }, data) {
    commit('addBookmark', data)
  },
  removeBookmark ({ commit }, id) {
    commit('removeBookmark', id)
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
  }
}
