<template>
  <div style="color: #757575; font-family: 'Noto Sans JP', sans-serif;">
    <b-container>
      <b-row
        style="padding-bottom: 60px;"
        :style="{ height: `calc(${innerHeight} - (16rem + 75px))`, overflow: 'auto' }"
      >
        <b-col>
          <GmapMap
            map-type-id="roadmap"
            :center="initialLocation"
            :zoom="zoom"
            :style="styleMap"
            :options="mapOptions"
            style="overflow: hidden; border-radius: 10px"
          >
            <GmapInfoWindow
              :position="infoWindowPos"
              :options="{pixelOffset: {width: 0, height: -45}}"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen=false"
            >
              <div>
                <div @click="$store.dispatch('resultSelect', val)">
                  <b-img-lazy
                    :src="displayitem.img"
                    alt="image"
                    class="thumbnail"
                  />
                </div>
                <div class="mx-2 mt-2" style="width: 100%">
                  <div @click="$store.dispatch('resultSelect', restaurantList[displayitem.key])">
                    <h5 class="mt-0" style="font-size: 16px;">
                      {{ displayitem.name }}
                    </h5>
                  </div>
                </div>
              </div>
            </GmapInfoWindow>
            <GmapMarker
              v-for="(val, key) in restaurantList"
              :key="key"
              :position="{ lat: val.lat, lng: val.lng }"
              :clickable="true"
              @click="selectSpot(val.lat, val.lng, key)"
            />
          </GmapMap>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked } from '@fortawesome/free-solid-svg-icons'
import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'Gmap',
  data () {
    return {
      styleMap: {
        width: '100%',
        // height: (window.innerHeight - 253) + 'px'
        height: '100%'
      },
      mapOptions: {
        disableDefaultUi: true,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        clickableIcons: false,
        styles: []
      },
      zoom: 14,
      initialLocation: {
        lat: this.$store.getters.userLat,
        lng: this.$store.getters.userLng
      },
      infoWindowPos: { lat: 0, lng: 0 },
      infoWinOpen: false,
      displayitem: {
        img: '',
        name: '',
        access: '',
        key: '',
        id: ''
      },
      restaurantList: this.$store.getters.result.results.shop,
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
    google: gmapApi
  },
  mounted () {
    this.innerHeight = window.innerHeight + 'px'
  },
  methods: {
    selectSpot (lat, lng, key) {
      this.initialLocation = { lat, lng }
      this.infoWindowPos = { lat, lng }
      this.displayitem.img = this.restaurantList[key].photo.pc.m
      this.displayitem.name = this.restaurantList[key].name
      this.displayitem.access = this.restaurantList[key].mobile_access
      this.displayitem.key = key
      this.displayitem.id = this.restaurantList[key].id
      this.infoWinOpen = true
    }
  }
}
</script>

<style scoped>
.thumbnail {
  /*object-fit: cover;*/
  /*object-position: center;*/
  height: 100%;
  max-height: 80px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}
</style>
