import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCFGCDw-FmdDqvZh5doRoCeEuNqxaKdZ-s',
    // map_ids: '63195e970b363d97',
    libraries: 'places'
  }
})
