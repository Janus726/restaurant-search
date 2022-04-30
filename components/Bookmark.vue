<template>
  <div v-if="loaded" style="color: #757575; font-family: 'Noto Sans JP', sans-serif;">
    <b-container>
      <b-row class="px-2">
        <b-col>
          <div class="d-flex mt-3" style="color: #fafafa">
            <h4 class="pl-2 mx-3">
              {{ length }}
            </h4>
            <p class="mt-1 mb-0">
              件のブックマーク
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="mx-2 px-1 justify-content-center align-items-start" style="max-height: 38rem; overflow: auto; border-radius: 14px">
        <!--      <b-col class="justify-content-center">-->
        <b-col
          v-for="(val, key) in data"
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
              <div class="align-items-end" @click="$store.dispatch('resultSelect', val)">
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
    </b-container>
  </div>
</template>

<script>
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Bookmark',
  data () {
    return {
      loaded: true,
      length: this.$store.getters.bookmark.length,
      data: this.$store.getters.bookmark
    }
  },
  computed: {
    faBookmark () {
      return faBookmark
    },
    faBookmarked () {
      return faBookmarked
    }
  },
  mounted () {
    this.$store.watch((state, getters) => getters.bookmark,
      (newValue) => {
        this.loaded = false
        this.data = newValue
        this.length = newValue.length
        this.$nextTick(() => (this.loaded = true))
      }
    )
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
</style>
