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
          </div>
        </b-col>
      </b-row>
      <b-row v-if="$store.getters.gpsStatus" class="px-2 justify-content-center align-items-start" style="max-height: 60vh; overflow: auto; padding-bottom: 60px; border-radius: 10px">
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
      <b-row v-else class="mx-2 justify-content-center" style="height: 51vh; overflow: auto; border-radius: 14px">
        <b-col class="justify-content-center">
          <div>
            <h4>
              位置情報が取得できません
            </h4>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'ResultList',
  data () {
    return {
      loaded: false,
      restaurantList: this.$store.getters.result.results.shop,
      page: 0,
      selectedOrder: null,
      order: [
        { text: '近い順', value: null },
        { text: 'おすすめ順', value: '4' }
      ]
    }
  },
  computed: {
    faBookmark () {
      return faBookmark
    },
    faBookmarked () {
      return faBookmarked
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
</style>
