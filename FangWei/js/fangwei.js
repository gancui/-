//手机导航
function show_phone_menu() {
    $(".header .nav ul").toggle();
}
//新闻滚动菜单
$(function () {
    $(".news-menu li").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var ni = $(this).index();
        var nw = $(".news-list").width() / 7;
        $(".news-list").css("left", -ni * nw)
    });
})
//滑动宽度
$(function () {
    $(".process .list ul li").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
})

//侧边栏
$(function () {
    $(".sidebar").hover(function () {
        $(this).addClass("active")
    }, function () {
        $(this).removeClass("active")
    })
})

//轮播跟随鼠标
$(function () {
    var X,
        Y;
    $(".carousel-item3").hover(function () {
        X = event.clientX; //获取鼠标当前相对于页面的坐标
        Y = event.clientY;
        var ConLeft = $(".carousel-item3 .img1").position().left; //图片1定位
        var ConTop = $(".carousel-item3 .img1").position().top;
        var BoxLeft = $(".carousel-item3 .img2").position().left; //图片2定位
        var BoxTop = $(".carousel-item3 .img2").position().top;
        $(".carousel-item3").mousemove(function () { //当鼠标指针在指定的元素中移动时，就会发生 mousemove事件
            var _left = (X - event.clientX);
            var _top = (Y - event.clientY);
            // 除的效果是为了图片向目标位置移动时不那么急促 有过渡效果
            $(".carousel-item3 .img1").css("left", _left / 100)
            $(".carousel-item3 .img1").css("top", _top / 100)
            $(".carousel-item3 .img2").css("left", BoxLeft - _left / 100)
            $(".carousel-item3 .img2").css("top", BoxTop - _top / 100)
        })
    })
})