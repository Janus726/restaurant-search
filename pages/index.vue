<template>
  <div id="app">
    <b-container class="px-0">
      <div class="d-flex mx-4 align-items-end">
        <b-button
          type="radio"
          class="mx-auto btneffect no-active"
          :class="{active: searchMode}"
          @click="searchMode=true"
        >
          近くのお店を探す
        </b-button>
        <b-button
          type="radio"
          class="mx-auto btneffect no-active"
          :class="{active: !searchMode}"
          @click="searchMode=false"
        >
          ブックマーク
        </b-button>
      </div>
      <div v-if="searchMode" style="height: 100%">
        <Search style="min-height: 11rem" />
        <ResultList v-if="searched" />
        <ResultDetail
          v-if="$store.getters.selectedResult"
          style="position: absolute; bottom: 0; left: 0"
        />
      </div>
      <div v-else>
        <Bookmark />
        <ResultDetail
          v-if="$store.getters.selectedResult"
          style="position: absolute; bottom: 0; left: 0"
        />
      </div>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import ResultList from '../components/ResultList'
import Search from '../components/Search'
import Footer from '../components/Footer'
import ResultDetail from '../components/ResultDetail'
import Bookmark from '../components/Bookmark'

export default {
  components: { ResultList, Search, Footer, ResultDetail, Bookmark },
  data () {
    return {
      loaded: false,
      searched: false,
      location: { lat: 0, lng: 0 },
      result: {},
      geoOption: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      },
      searchMode: true
    }
  },
  created () {
  },
  async mounted () {
    if (navigator.geolocation) {
      await this.getLocation()
    } else {
      alert('ブラウザがGPSをサポートしていません')
    }
    this.loaded = true
  },
  methods: {
    getLocation () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          console.log(this.location)
          this.searchSpot()
        },
        () => {
          this.$bvToast.toast('位置情報の取得に失敗しました。もう一度読み込んでください。', {
            variant: 'danger',
            solid: true
          })
          this.loaded = true
        }, this.geoOption
      )
    },
    async searchSpot () {
      const url = `&lat=${this.location.lat}&lng=${this.location.lng}&range=1&format=jsonp`
      await this.$store.dispatch('searchSpot', url)
      console.log(this.$store.getters.result.results)
      console.log(this.$store.getters.pages)
      console.log(this.$store.getters.length)
      this.searched = true
    }
  }
}
</script>

<style>
#app {
  /*background-color: #fafafa;*/
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  padding-top: 25px;
  padding-bottom: 25px;
  background: rgb(237,106,0);
  background: linear-gradient(129deg, rgba(237,106,0,1) 0%, rgba(249,147,5,1) 58%, rgba(255,170,0,1) 100%);
  color: dimgrey;
}
#footer {
  font-size: 11px;
}
.btneffect {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
}
.btneffect:active,
.btneffect:hover,
.btneffect:focus {
  background-color: rgba(0, 0, 0, 0);
  outline: 0;
  box-shadow: none !important;
}
.active {
  font-size: 22px !important;
  background-color: transparent !important;
  border: none;
  color: #fafafa;
}
.no-active {
  font-size: 14px;
  background-color: transparent;
  border: none;
  color: #757575;
}
</style>
