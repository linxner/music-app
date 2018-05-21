export function getData(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: 'post',
      dataType: 'jsonp',
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}
