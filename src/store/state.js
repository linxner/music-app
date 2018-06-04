import {
  playMode
} from 'api/config'

const state = {
  singer: {},
  song: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.squence,
  currentIndex: -1
}
export default state
