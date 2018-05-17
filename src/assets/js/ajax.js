

export function getAjax(url){
    var that=this
    $.ajax({
        url:url,
        type:'post',
        dataType:'jsonp',
        success(res){

        }
    })
}
