export const url = {
  musichouse: {
    name: '音乐馆',
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom7284650077606569&g_tk=1583847940&jsonpCallback=recom7284650077606569&loginUin=342709615&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22category%22%3A%7B%22method%22%3A%22get_hot_category%22%2C%22param%22%3A%7B%22qq%22%3A%22%22%7D%2C%22module%22%3A%22music.web_category_svr%22%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A8%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A8%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%2C%22new_song%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetNewSong%22%2C%22param%22%3A%7B%22type%22%3A0%7D%7D%2C%22new_album%22%3A%7B%22module%22%3A%22music.web_album_library%22%2C%22method%22%3A%22get_album_by_tags%22%2C%22param%22%3A%7B%22area%22%3A7%2C%22company%22%3A-1%2C%22genre%22%3A-1%2C%22type%22%3A-1%2C%22year%22%3A-1%2C%22sort%22%3A2%2C%22get_tags%22%3A1%2C%22sin%22%3A0%2C%22num%22%3A40%2C%22click_albumid%22%3A0%7D%7D%2C%22toplist%22%3A%7B%22module%22%3A%22music.web_toplist_svr%22%2C%22method%22%3A%22get_toplist_index%22%2C%22param%22%3A%7B%7D%7D%2C%22focus%22%3A%7B%22module%22%3A%22QQMusic.MusichallServer%22%2C%22method%22%3A%22GetFocus%22%2C%22param%22%3A%7B%7D%7D%7D'
  },
  singer: {
    name: '歌手',
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback=getUCGI19834496140639613&g_tk=1583847940&jsonpCallback=getUCGI19834496140639613&loginUin=342709615&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A10000%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D'
  }
}

const s = 'getUCGI' + (Math.random() + '').replace('0.', '')
export const commonparams = {
  g_tk: 876919539,
  jsonpCallback: s,
  loginUin: 0,
  hostUin: 0,
  format: 'jsonp',
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'yqq',
  needNewCode: 0
}
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(0) : ''
}

export function getSingerListUrl(index) {
  const baseurl = 'https://u.y.qq.com/cgi-bin/musicu.fcg?callback='
  const data = {
    comm: {
      ct: 24,
      cv: 1e4,
    },
    singerList: {
      module: 'Music.SingerListServer',
      method: 'get_singer_list',
      param: {
        area: -100,
        sex: -100,
        genre: -100,
        index: index,
        sin: 0,
        cur_page: 1
      }
    }
  }
  return baseurl + s + param(commonparams) + '&data=' + encodeURIComponent(JSON.stringify(data))
}
export function getSingerDetail(mid, num) {
  const baseurl = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?'
  commonparams.jsonpCallback = 'singer_detail'
  // commonparams.g_tk = 1583847940
  // // console.log(commonparams)
  let a = Object.assign({}, commonparams, {
    singermid: mid,
    order: 'listen',
    begin: 0,
    num: num,
    songstatus: 1
  })
  // console.log(baseurl + param(a))
  return baseurl + param(a)
  // console.log(baseurl+param(a))
  // console.log('ok')
  //https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?&g_tk=876919539&jsonpCallback=getUCGI483987655666114&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1
//https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?&g_tk=1583847940&jsonpCallback=MusicJsonCallbacksinger_track&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=002J4UUk29y8BY&order=listen&begin=0&num=30&songstatus=1
}
