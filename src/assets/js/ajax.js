export function getData(url,j) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: 'post',
      dataType: 'jsonp',
      jsonpCallback:j,
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}