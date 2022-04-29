<template>
  <div v-if="loaded" style="color: #757575; font-family: 'Noto Sans JP', sans-serif;">
    <b-row class="px-2">
      <b-col>
        <div class="d-flex" style="color: #fafafa">
          <h4 class="pl-2 mx-3">
            {{ $store.getters.length }}
          </h4>
          <p class="mt-1 mb-0">
            件が見つかりました
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row class="mx-2 justify-content-center" style="height: 51vh; overflow: auto; border-radius: 14px">
      <b-col class="row d-flex justify-content-center">
        <div
          v-for="(val, key) in restaurantList"
          :key="key"
          class="mb-3 card col-12 col-md-5 px-0 mx-md-3"
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
        </div>
      </b-col>
    </b-row>
    <b-row class="mx-2 mt-3 justify-content-center">
      <b-col class="text-center">
        <b-button
          v-if="$store.getters.currentPage > 0"
          variant="outline-primary"
          class="arrowbtn col-2"
          @click="prevPage()"
        >
          <fa :icon="faAngleLeft" />
        </b-button>
      </b-col>
      <b-col class="text-center col-2 d-flex justify-content-center">
        <div v-if="$store.getters.currentPage!==0" class="pageNumS mt-2 col-2">
          1
        </div>
      </b-col>
      <b-col class="text-center col-2 d-flex justify-content-center">
        <div v-if="pageMax!==0" class="pageNumM col-2">
          {{ $store.getters.currentPage + 1 }}
        </div>
      </b-col>
      <b-col class="text-center col-2 d-flex justify-content-center">
        <div v-if="$store.getters.currentPage + 1!==$store.getters.pages && $store.getters.pages!==0" class="pageNumS mt-2 col-2">
          {{ $store.getters.pages }}
        </div>
      </b-col>
      <b-col class="text-center">
        <b-button
          v-if="$store.getters.currentPage + 1 < $store.getters.pages"
          variant="outline-primary"
          class="arrowbtn col-2"
          @click="nextPage()"
        >
          <fa :icon="faAngleRight" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked, faAngleLeft, faAngleRight, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'ResultList',
  data () {
    return {
      loaded: false,
      restaurantList: this.$store.getters.result.results.shop,
      pageMax: this.$store.getters.pages,
      shopNum: this.$store.getters.length,
      page: 0,
      selectedOrder: null,
      order: [
        { text: '近い順', value: null },
        { text: 'おすすめ順', value: '4' }
      ],
      buttonPressed: false
    }
  },
  computed: {
    faBookmark () {
      return faBookmark
    },
    faBookmarked () {
      return faBookmarked
    },
    faAngleLeft () {
      return faAngleLeft
    },
    faAngleRight () {
      return faAngleRight
    },
    faSortAlphaDown () {
      return faSortAlphaDown
    }
  },
  created () {
    console.log(this.restaurantList)
    this.loaded = true
  },
  mounted () {
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
  },
  methods: {
    nextPage () {
      if (this.buttonPressed === false) {
        this.buttonPressed = true
        let page = this.$store.getters.currentPage
        page++
        this.$store.dispatch('nextPage', page)
        setTimeout(() => {
          this.buttonPressed = false
        }, 1000)
      }
    },
    prevPage () {
      if (this.buttonPressed === false) {
        this.buttonPressed = true
        let page = this.$store.getters.currentPage
        page--
        this.$store.dispatch('prevPage', page)
        setTimeout(() => {
          this.buttonPressed = false
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
.thumbnail {
  object-fit: cover;
  object-position: center;
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
  box-shadow:0 7px 10px #B25F00;
}
.arrowbtn {
  background-color: #fafafa;
  border-radius: 50%;
  border: none;
  max-width: 36px;
  height: 36px;
  box-shadow:0 5px 8px #B25F00;
}
.arrowbtn:active,
.arrowbtn:hover,
.arrowbtn:focus {
  color: #007bff !important;
  background-color: #fafafa;
  outline: 0;
}
.pageNumM {
  background-color: transparent;
  color: #fafafa;
  border-radius: 50%;
  border: none;
  max-width: 36px;
  height: 36px;
  font-size: 24px;
  padding-top: 5px;
}
.pageNumS {
  background-color: transparent;
  color: #fafafa;
  border-radius: 50%;
  border: none;
  max-width: 28px;
  height: 28px;
  font-size: 16px;
  padding-top: 4px;
}
</style>
