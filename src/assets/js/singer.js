export default class Song {
  constructor({
    id,
    mid,
    name,
    album,
    duration,
    image,
    url
  }) {
    this.id = id,
      this.mid = mid,
      this.name = name,
      this.album = album,
      this.duration = duration,
      this.image = image,
      this.url = url
  }
}

// export default class Singer {
//   constructor({
//     id,
//     name
//   }) {
//     this.id = id
//     this.name = name
//     this.avatar = `http://y.gtimg.cn/music/photo_new/T001R150x150M000${id}.webp`
//   }
// }
export function getSinerImgUrl(id, size) {
  return `http://y.gtimg.cn/music/photo_new/T001R${size}x${size}M000${id}.webp`
}
export function createSong(musicData, songVkey, guid) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `http://y.gtimg.cn/music/photo_new/T001R300x300M000${musicData.songmid}.webp`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?vkey=${songVkey}&guid=1849502645&uin=0&fromtag=66`
  })
}
