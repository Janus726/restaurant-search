<template>
  <div v-if="loaded" style="color: #757575; font-family: 'Noto Sans JP', sans-serif; background-color: #fafafa">
    <b-container class="pb-4">
      <b-row class="px-2">
        <b-col>
          <div class="d-flex" style="color: #757575">
            <h4 class="pl-2 mr-3">
              {{ $store.getters.length }}
            </h4>
            <p class="mt-1 mb-0">
              件が見つかりました
            </p>
            <div class="ml-auto mr-0">
              <b-button v-if="display==='map'" class="detailbtn unchecked py-1 px-2" style="border-radius: 50px 0 0 50px" @click="display='list'">
                <fa :icon="faListUl" />
              </b-button>
              <b-button v-else class="detailbtn checked py-1 px-2" style="border-radius: 50px 0 0 50px">
                <fa :icon="faListUl" />
              </b-button>
            </div>
            <div>
              <b-button v-if="display==='list'" class="detailbtn unchecked py-1 px-2" style="border-radius: 0 50px 50px 0" @click="display='map'">
                <fa :icon="faMapMarkedAlt" />
              </b-button>
              <b-button v-else class="detailbtn checked py-1 px-2" style="border-radius: 0 50px 50px 0">
                <fa :icon="faMapMarkedAlt" />
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row
        v-if="$store.getters.gpsStatus && display==='list'"
        class="px-2 justify-content-center align-items-start"
        style="padding-bottom: 60px; border-radius: 10px"
        :style="{ maxHeight: `calc(${innerHeight} - (16rem + 75px))`, overflow: 'auto' }"
      >
        <!--      <b-col class="justify-content-center">-->
        <b-col
          v-for="(val, key) in restaurantList"
          :key="key"
          class="mb-3 card px-0 col-12 col-md-5 mx-md-2"
        >
          <div class="d-flex">
            <div @click="$store.dispatch('resultSelect', val)">
              <b-img-lazy
                :src="val.photo.pc.m"
                alt="image"
                class="thumbnail"
              />
            </div>
            <div class="mx-2 mt-2" style="width: 100%">
              <div style="font-size: 16px; text-align: right">
                <fa
                  v-if="!$store.getters.bookmark.some(b=>b.id===val.id)"
                  :icon="faBookmark"
                  class="mr-2"
                  style="color: #007bff"
                  @click="$store.dispatch('addBookmark', val)"
                />
                <fa
                  v-else
                  :icon="faBookmarked"
                  class="mr-2"
                  style="color: #007bff"
                  @click="$store.dispatch('removeBookmark', val.id)"
                />
              </div>
              <div @click="$store.dispatch('resultSelect', val)">
                <h5 class="mt-0" style="font-size: 16px;">
                  {{ val.name }}
                </h5>
                <p style="font-size: 11px">
                  {{ val.mobile_access }}
                </p>
              </div>
            </div>
          </div>
        </b-col>
        <!--      </b-col>-->
      </b-row>
      <Gmap v-else-if="$store.getters.gpsStatus && display==='map'" />
      <b-row v-else class="mx-2 justify-content-center align-items-center" style="height: 51vh; overflow: auto; border-radius: 14px">
        <b-col class="text-center">
          <div>
            <h5>
              位置情報が取得できません
            </h5>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked, faListUl, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import Gmap from '../components/Gmap'

export default {
  name: 'ResultList',
  components: { Gmap },
  data () {
    return {
      loaded: false,
      restaurantList: this.$store.getters.result.results.shop,
      page: 0,
      selectedOrder: null,
      order: [
        { text: '近い順', value: null },
        { text: 'おすすめ順', value: '4' }
      ],
      display: 'list',
      innerHeight: '100vh'
    }
  },
  computed: {
    faBookmark () {
      return faBookmark
    },
    faBookmarked () {
      return faBookmarked
    },
    faListUl () {
      return faListUl
    },
    faMapMarkedAlt () {
      return faMapMarkedAlt
    }
  },
  created () {
    console.log(this.restaurantList)
    this.loaded = true
  },
  mounted () {
    this.innerHeight = window.innerHeight + 'px'
    this.$store.watch((state, getters) => getters.result.results,
      (newValue) => {
        this.restaurantList = newValue.shop
        this.loaded = false
        this.$nextTick(() => (this.loaded = true))
      }
    )
    this.$store.watch((state, getters) => getters.pages,
      (newValue) => {
        this.pageMax = newValue
      }
    )
  }
}
</script>

<style scoped>
.thumbnail {
  /*object-fit: cover;*/
  /*object-position: center;*/
  height: 100%;
  max-height: 120px;
  width: 110px;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
}
.card {
  background-color: #fafafa;
  border-radius: 10px;
  border: none;
  max-height: 120px;
  box-shadow:0 5px 8px #c1c1c1;
}
.detailbtn {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-size: 12px;
  border: 1px solid #007bff;
  cursor: pointer;
  outline: none;
  box-shadow: none !important;
}
.checked {
  background-color: #007bff;
  color: #fafafa;
}
.unchecked {
  background-color: transparent;
  color: #007bff;
}
</style>
