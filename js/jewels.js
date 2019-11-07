window.onload = function () {
    var oDiv = document.getElementById('xidTop');
    var divT = oDiv.offsetTop;
    //console.log(divT);
    window.onscroll = function () {
        // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
        var scrollT = document.documentElement.scrollTop ||
         window.pageYOffset || document.body.scrollTop;
        if (scrollT >= divT) {
            if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
                // 兼容IE6代码
                oDiv.style.position = 'absolute';
                oDiv.style.top = scrollT + 'px';
                // oDiv.style.left = 0 + 'px';
            } else {
              // 正常浏览器代码
                oDiv.style.position = 'fixed';
                oDiv.style.top = 0;
                // oDiv.style.left = 0;
         }
        } else
            oDiv.style.position = '';
    }
}