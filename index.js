//当打开html自动调用
window.onload = function() {
    //调用随机函数
    loadRandomImage();
}
//函数
function loadRandomImage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //始终进行
        if (xhttp.status === 200) {
            //将所有图片url放入imageUrls当中
            var imageUrls = this.responseText.split("\n");
            //实现随机访问
            var randomIndex = Math.floor(Math.random() * imageUrls.length);
            //实现额面跳转
            window.location.href="https://i.imgtg.com/" + imageUrls[randomIndex] + ".jpg";
        }
        else{
            console.log("图片文件状态异常，可联系foryouos@qq.com")
        }
    };
    //打开文件
    xhttp.open("GET", "photos_urls.txt", true);
    xhttp.send();
}
