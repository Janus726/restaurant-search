<template>
  <div class="mx-2 fixed-bottom" style="margin-bottom: 25px;">
    <b-container>
      <b-row class="mx-3 py-1 justify-content-center d-flex align-items-center" style="background-color: rgb(249, 147, 5); border-radius: 50px">
        <b-col class="text-center">
          <b-button
            v-if="$store.getters.currentPage > 0"
            variant="outline-primary"
            class="arrowbtn col-2"
            @click="prevPage()"
          >
            <fa :icon="faAngleLeft" class="d-flex align-items-center" />
          </b-button>
        </b-col>
        <b-col class="text-center col-2 d-flex justify-content-center">
          <div v-if="$store.getters.currentPage!==0" class="pageNumS">
            1
          </div>
        </b-col>
        <b-col class="col-2 d-flex justify-content-center">
          <div v-if="$store.getters.pages!==0" class="pageNumM mb-2">
            {{ $store.getters.currentPage + 1 }}
          </div>
        </b-col>
        <b-col class="text-center col-2 d-flex justify-content-center">
          <div v-if="$store.getters.currentPage + 1!==$store.getters.pages && $store.getters.pages!==0" class="pageNumS">
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
            <fa :icon="faAngleRight" class="d-flex align-items-center" />
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'PageController',
  data () {
    return {
      buttonPressed: false
    }
  },
  computed: {
    faAngleLeft () {
      return faAngleLeft
    },
    faAngleRight () {
      return faAngleRight
    }
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
.arrowbtn {
  background-color: #fafafa;
  color: rgb(249, 147, 5);
  border-radius: 50%;
  border: none;
  max-width: 32px;
  height: 32px;
  box-shadow:0 5px 8px #c07104;
}
.arrowbtn:active,
.arrowbtn:hover,
.arrowbtn:focus {
  color: rgb(249, 147, 5) !important;
  background-color: #fafafa !important;
  outline: none;
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
