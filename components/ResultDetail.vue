<template>
  <div id="detail" class="detail p-0">
    <b-row>
      <b-img-lazy
        v-if="data.photo.pc.l"
        :src="data.photo.pc.l"
        class="photo"
        alt="logo"
      />
      <div class="overlay">
        <b-button
          class="closebtn mt-1 mr-2"
          @click="$store.dispatch('resultSelect', null)"
        >
          <fa :icon="faTimes" />
        </b-button>
        <b-button
          class="menubtn mt-1 ml-2"
          @click="$bvModal.show('menu')"
        >
          <fa :icon="faEllipsis" />
        </b-button>
        <b-modal id="menu" centered hide-footer hide-header size="sm">
          <b-row class="p-3">
            <b-col class="d-flex justify-content-center">
              <div v-if="data.urls.pc" class="text-center mx-4">
                <b-button class="menuaction" style="background-color: #dc3545" @click="openUrl()">
                  <fa :icon="faExternalLink" style="color: #fafafa" />
                </b-button>
                <p class="menuitem mt-3">HP(外部リンク)</p>
              </div>
              <div class="text-center mx-4">
                <b-button class="menuaction" style="background-color: #28a745" @click="searchRoute()">
                  <fa :icon="faLocationArrow" style="color: #fafafa" />
                </b-button>
                <p class="menuitem mt-3">ナビ(Google Map)</p>
              </div>
            </b-col>
          </b-row>
        </b-modal>
      </div>
    </b-row>
    <b-row class="mt-4">
      <b-button v-if="!$store.getters.bookmark.some(b=>b.id===data.id)" class="bookmark" @click="$store.dispatch('addBookmark', data)">
        <fa :icon="faBookmark" style="color: #fafafa; font-size: 20px" />
      </b-button>
      <b-button v-else class="bookmark" @click="$store.dispatch('removeBookmark', data.id)">
        <fa :icon="faBookmarked" style="color: #fafafa; font-size: 20px" />
      </b-button>
    </b-row>
    <div style="max-height: 23rem; overflow: auto; padding-bottom: 3rem">
      <b-row class="mt-4 mx-2">
        <b-col>
          <div>
            <h4 style="font-weight: bold">{{ data.name }}</h4>
            <p style="font-size: 14px">{{ data.address }}</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="mx-2">
        <b-col>
          <div>
            <p class="item">営業時間</p>
            <p class="item-detail">{{ data.open }}</p>
          </div>
          <div>
            <p class="item">平均予算</p>
            <p class="item-detail">{{ data.budget.average }}</p>
          </div>
          <div v-if="data.shop_detail_memo">
            <p class="item">メモ</p>
            <p class="item-detail">{{ data.shop_detail_memo }}</p>
          </div>
          <div class="d-flex mt-4 row">
            <div class="otheritem m-1">{{ data.genre.name }}</div>
            <div v-if="data.free_drink==='あり'" class="otheritem m-1">飲み放題</div>
            <div v-if="data.free_food==='あり'" class="otheritem m-1">食べ放題</div>
            <div v-if="data.course==='あり'" class="otheritem m-1">コース料理</div>
            <div v-if="data.midnight==='営業している'" class="otheritem m-1">23時以降営業</div>
            <div v-if="data.lunch==='あり'" class="otheritem m-1">ランチ</div>
            <div v-if="data.karaoke==='あり'" class="otheritem m-1">カラオケあり</div>
            <div v-if="data.pet==='可'" class="otheritem m-1">ペットOK</div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faTimes, faBookmark as faBookmarked, faEllipsis, faLocationArrow, faPhone, faExternalLink } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'ResultDetail',
  data () {
    return {
      data: this.$store.getters.selectedResult,
      geoOption: {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0
      }
    }
  },
  computed: {
    faTimes () {
      return faTimes
    },
    faBookmarked () {
      return faBookmarked
    },
    faBookmark () {
      return faBookmark
    },
    faEllipsis () {
      return faEllipsis
    },
    faLocationArrow () {
      return faLocationArrow
    },
    faPhone () {
      return faPhone
    },
    faExternalLink () {
      return faExternalLink
    }
  },
  methods: {
    searchRoute () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.openRoute(position.coords.latitude.toString(), position.coords.longitude.toString())
          },
          () => {
            this.$bvToast.toast('位置情報の取得に失敗しました。もう一度読み込んでください。', {
              variant: 'danger',
              solid: true
            })
          }, this.geoOption
        )
      }
    },
    openRoute (lat, lng) {
      const ua = navigator.userAgent
      let url = ''
      if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        url = `comgooglemaps://?saddr=${lat},${lng}&daddr=${this.data.lat.toString()},${this.data.lng.toString()}&directionsmode=walking`
        window.open(url, '_blank')
      } else {
        url = `https://www.google.co.jp/maps/dir/${lat},${lng}/${this.data.lat.toString()},${this.data.lng.toString()}`
        window.open(url, '_blank')
      }
    },
    openUrl () {
      window.open(this.data.urls.pc, '_blank')
    }
  }
}
</script>

<style scoped>
.detail {
  /*min-height: 31rem;*/
  height: 100%;
  width: 100%;
  background-color: #fafafa;
  border: none;
  border-radius: 14px 14px 0 0;
  /*box-shadow:0 -5px 5px #D67200;*/
  animation: anim 0.5s forwards;
  overflow: auto;
}
@keyframes anim {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(5rem);
  }
}
.closebtn {
  position: absolute;
  right: 12px;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-size: 24px;
  color: #fafafa;
  background-color: transparent;
  padding: 0 0;
  border: none;
  cursor: pointer;
  outline: none;
}
.menubtn {
  position: absolute;
  left: 12px;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-size: 24px;
  color: #fafafa;
  background-color: transparent;
  padding: 0 0;
  border: none;
  cursor: pointer;
  outline: none;
}
.menubtn:active,
.menubtn:hover,
.menubtn:focus {
  background-color: rgba(0, 0, 0, 0);
  outline: 0;
  box-shadow: none !important;
}
.photo {
  width: 100%;
  height: 280px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
}
.overlay {
  position: absolute;
  left: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
  width: 100%;
  height: 45px
}
.bookmark {
  position: absolute;
  right: 30px;
  top: 255px;
  background-color: #007bff;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 7px 10px #a3a3a3;
}
.item {
  margin-top: 10px;
  margin-bottom: 0;
  color: #007bff;
  font-size: 16px;
}
.item-detail {
  font-size: 14px;
}
.menuaction {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 5px 10px #a3a3a3;
}
.menuitem {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  color: #757575;
}
.otheritem {
  font-size: 12px;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 7px;
  white-space: nowrap;
  padding: 3px 5px;
}
</style>
