export default class Singe {
  constructor({
    id,
    name
  }) {
    this.id = id
    this.name = name
    this.avatar = `http://y.gtimg.cn/music/photo_new/T001R150x150M000${id}.webp`
  }
}
export function getSinerImgUrl(id, size) {
  return `http://y.gtimg.cn/music/photo_new/T001R${size}x${size}M000${id}.webp`
}
