<template>
  <div v-if="loaded" style="color: #757575; font-family: 'Noto Sans JP', sans-serif; background-color: #fafafa; border-radius: 14px 14px 0 0;">
    <b-row class="px-4 mb-2" style="color: #757575">
      <b-col class="col-12 text-center">
        <div class="d-flex align-items-end">
          <div
            v-for="(val, key) in rangeOptions"
            :key="key"
            class="my-2 mx-1 text-center"
            style="width: 20%"
          >
            <div v-if="parameter[2].value===val.value">
              <b-button
                v-model="parameter[2].value"
                type="radio"
                style="border: none; font-size: 26px; background-color: rgba(0, 0, 0, 0); color: rgb(237,106,0)"
                class="btneffect p-0"
                size="lg"
                @click="parameter[2].value=val.value"
              >
                {{ val.text }}
              </b-button>
            </div>
            <div v-else>
              <b-button
                v-model="parameter[2].value"
                type="radio"
                style="border: none; font-size: 14px; background-color: rgba(0, 0, 0, 0); color: #757575"
                class="p-0 btneffect"
                @click="parameter[2].value=val.value"
              >
                {{ val.text }}
              </b-button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mx-1 my-2">
      <b-col class="text-center">
        <div @click="$store.dispatch('menuDetail', 'toggle')">
          <p
            class="mb-0"
            style="color: #757575; font-size: 16px"
          >
            検索条件を追加
          </p>
          <fa v-if="!detailOpen" :icon="faAngleDown" class="my-0" style="color: #757575; font-size: 14px" />
          <fa v-else :icon="faAngleUp" class="my-0" style="color: #757575; font-size: 14px" />
        </div>
        <b-collapse
          id="detail"
          v-model="detailOpen"
          :aria-expanded="detailOpen ? 'true' : 'false'"
          class="card px-3 py-4 mt-0 px-md-4"
          style="box-shadow: 0 0 0"
        >
          <div class="text-left" style="min-height: 200px; font-size: 14px">
            <div>
              <p class="mb-1">フリーワード</p>
              <div class="d-flex">
                <b-form-input
                  v-model="parameter[3].value"
                  class="wordform mx-md-2"
                  style="border-radius: 7px; font-size: 14px"
                  placeholder="新宿 居酒屋"
                />
                <b-button
                  class="ml-2 detailbtn mx-md-2"
                  style="border-color: dimgrey; color: dimgrey; white-space: nowrap"
                  variant="outline-secondary"
                  @click="parameter[3].value=null"
                >
                  クリア
                </b-button>
              </div>
            </div>
            <div class="mt-3">
              <p class="mb-1">メニューで絞り込む</p>
              <div class="d-flex">
                <div>
                  <b-button v-if="parameter[4].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[4].value='1'">
                    コース料理
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[4].value='0'">
                    コース料理
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[5].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[5].value='1'">
                    飲み放題
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[5].value='0'">
                    飲み放題
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[6].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[6].value='1'">
                    食べ放題
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[6].value='0'">
                    食べ放題
                  </b-button>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <p class="mb-1">お酒で絞り込む</p>
              <div class="d-flex">
                <div>
                  <b-button v-if="parameter[7].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[7].value='1'">
                    カクテル
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[7].value='0'">
                    カクテル
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[8].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[8].value='1'">
                    焼酎
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[8].value='0'">
                    焼酎
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[9].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[9].value='1'">
                    日本酒
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[9].value='0'">
                    日本酒
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[10].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[10].value='1'">
                    ワイン
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[10].value='0'">
                    ワイン
                  </b-button>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <p class="mb-1">その他の条件で絞り込む</p>
              <div class="d-flex">
                <div>
                  <b-button v-if="parameter[11].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[11].value='1'">
                    個室あり
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[11].value='0'">
                    個室あり
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[12].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[12].value='1'">
                    ランチあり
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[12].value='0'">
                    ランチあり
                  </b-button>
                </div>
                <div>
                  <b-button v-if="parameter[13].value==='0'" class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[13].value='1'">
                    23時以降営業
                  </b-button>
                  <b-button v-else class="detailbtn checked mx-1 mx-md-2" @click="parameter[13].value='0'">
                    23時以降営業
                  </b-button>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <p class="mb-1">並び順</p>
              <div class="d-flex">
                <div>
                  <b-button v-if="!parameter[14].value" class="detailbtn checked mx-1 mx-md-2">
                    近い順
                  </b-button>
                  <b-button v-else class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[14].value=null">
                    近い順
                  </b-button>
                  <b-button v-if="parameter[14].value==='4'" class="detailbtn checked mx-1 mx-md-2">
                    おすすめ順
                  </b-button>
                  <b-button v-else class="detailbtn unchecked mx-1 mx-md-2" @click="parameter[14].value='4'">
                    おすすめ順
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </b-collapse>
      </b-col>
    </b-row>
    <b-row class="px-4 my-2">
      <b-col class="text-center">
        <b-button
          variant="primary"
          class="searchbtn"
          @click="getlocation()"
        >
          検索
          <fa :icon="faSearch" class="ml-1" style="font-size: 14px" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { faSearch, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Search',
  data () {
    return {
      loaded: true,
      parameter: [
        { item: 'lat', value: '0' },
        { item: 'lng', value: '0' },
        { item: 'range', value: '1' },
        { item: 'keyword', value: null },
        { item: 'course', value: '0' },
        { item: 'free_drink', value: '0' },
        { item: 'free_food', value: '0' },
        { item: 'cocktail', value: '0' },
        { item: 'shochu', value: '0' },
        { item: 'sake', value: '0' },
        { item: 'wine', value: '0' },
        { item: 'private_room', value: '0' },
        { item: 'lunch', value: '0' },
        { item: 'midnight', value: '0' },
        { item: 'order', value: null }
      ],
      rangeOptions: [
        { text: '300m', value: '1' },
        { text: '500m', value: '2' },
        { text: '1km', value: '3' },
        { text: '2km', value: '4' },
        { text: '3km', value: '5' }
      ],
      geoOption: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      },
      detailOpen: this.$store.getters.detailOpen,
      buttonPressed: false
    }
  },
  computed: {
    faSearch () {
      return faSearch
    },
    faAngleUp () {
      return faAngleUp
    },
    faAngleDown () {
      return faAngleDown
    }
  },
  mounted () {
    this.$store.watch((state, getters) => getters.detailOpen,
      (newValue) => {
        this.detailOpen = newValue
      }
    )
  },
  methods: {
    getlocation () {
      if (!this.buttonPressed) {
        this.buttonPressed = true
        if (navigator.geolocation) {
          this.$store.dispatch('gpsOn', true)
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.parameter[0].value = position.coords.latitude.toString()
              this.parameter[1].value = position.coords.longitude.toString()
              this.doSearch()
            },
            () => {
              this.$bvToast.toast('位置情報の取得に失敗しました。もう一度読み込んでください。', {
                variant: 'danger',
                solid: true
              })
            }, this.geoOption
          )
          setTimeout(() => {
            this.buttonPressed = false
          }, 3000)
        } else {
          this.$store.dispatch('gpsOn', false)
        }
      }
    },
    doSearch () {
      this.$store.dispatch('resultSelect', null)
      if (this.parameter[3].value) {
        this.parameter[3].value = this.parameter[3].value.replace(/\s+|，/g, ',')
      }
      let url = ''
      for (let i = 0; i < this.parameter.length; i++) {
        if (this.parameter[i].value !== '0' && this.parameter[i].value) {
          url += `&${this.parameter[i].item}=${this.parameter[i].value}`
        }
      }
      url += '&format=jsonp'
      console.log(url)
      this.$store.dispatch('searchSpot', url)
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #fafafa;
  border-radius: 10px;
  border: none;
  box-shadow:0 7px 10px;
}
.btneffect {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
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
.detailbtn {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-size: 12px;
  border: 1px solid #007bff;
  border-radius: 7px;
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
.searchbtn {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-size: 14px;
  padding: 6px 16px;
  border: 1px solid #007bff;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  box-shadow:0 5px 8px #c1c1c1;
}
.wordform::placeholder {
  color: darkgray;
}
</style>
