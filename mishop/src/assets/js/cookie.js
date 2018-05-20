//		设置cookie
function setCookie(name,value,t){
    var d = new Date();
    d.setDate(d.getDate()+t);
    document.cookie = name+"="+value+";expires=" + d;
}

//		获取cookie
function getCookie(name){
    var str = document.cookie;
    var arr = str.split("; ");
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i].split("="));
    }
    for(var i=0;i<newArr.length;i++){
        if(name == newArr[i][0]){
            return newArr[i][1];
        }
    }
}
function clearCookie(){
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys){
        for (var i = keys.length; i--;)
            document.cookie=keys[i]+'=0;expires=' + new Date(0).toUTCString()
    }
}