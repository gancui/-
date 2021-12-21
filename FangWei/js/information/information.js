$(function () {
    $.getJSON("json/information.json", function (data) {
        $.each(data, function (i, v) {
            var $li = $("<li></li>");
            var $a = $("<a href='#'></a>");
            var $tbox = $("<div class='tbox wow animated bounceInUp animated data-wow-delay='.1s''></div>")
            var $time = $("<div class='time'></div>")
            var $span = $("<span> " + data[i].time + "</span>")
            $time.prepend(data[i].day);
            $time.append($span)
            var $title = $("<div class='title'></div>")
            $title.prepend(data[i].title)
            var $txt = $("<div class='txt'></div>")
            $txt.prepend(data[i].txt)
            $tbox.append($time, $title, $txt)
            $a.append($tbox)
            $li.append($a)
            $("#app").append($li)
        })
        var $len = $("#app li").length;

        //创建分页器
        if ($len % 18 > 0) {
            var num = parseInt($len / 18);
            for (var i = 1; i <= (num + 1); i++) {
                var $span = $("<span class='pag'>" + i + "</span>");
                $("#page").append($span)
            }
        } else {
            var num = parseInt($len / 18);
            for (var i = 1; i <= num; i++) {
                var $span = $("<span class='pag'>" + i + "</span>");
                $("#page").append($span)
            }
        }
        //每十个包裹一个div
        for (var i = 0; i < Math.ceil($len / 18); i++) {
            var start = i * 18;
            var end = start + 18;
            $("#app li").slice(start, end).wrapAll("<div class='con clearfix'></div>")
        }
        //只显示第一个div
        $(".con:gt(0)").hide()
        $("#page .pag:eq(0)").addClass("active")
        //点击分页器
        $("#page .pag").click(function () {
            var $index = $(this).index();

            $(".con").eq($index).show(200).siblings().hide()
            $(this).addClass("active").siblings().removeClass("active")
        })
    })
})