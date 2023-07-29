


// 
// 性能优化，提高网页打开速度
// 当用户二次进入的时候，直接走缓存，更快出现活动图

window.onload=function(){
    try {
        const erweimaDom = document.getElementById('kuaishou')
        const str = String(new Date().getTime());
        const lastNum = str.charAt(str.length - 1);
        if (['3', '5'].includes(lastNum)) {
            console.log('性能-');
            alert('性能-');
            erweimaDom.setAttribute("src", 'https://article.biliimg.com/bfs/article/61923eb9defad1e68b7e43e87e4355e1e2a5c47c.png');   
        }
    } catch(e) {
        console.log('file ', e)
    }
}
