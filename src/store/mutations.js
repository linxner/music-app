import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.GET_SONG](state, song) {
    state.song = song
  }
}

export default mutations
