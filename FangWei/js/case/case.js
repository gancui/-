$(function () {
    $.getJSON("json/case.json", function (data) {
        $.each(data, function (i, v) {
            var $li = $("<li></li>");

            var $a = $("<a href='#'></a>")
            var $imgbox = $("<div class='images'></div>")
            var $img = $("<img>")
            $img.attr("src",data[i].images);
            $imgbox.append($img)

            var $tbox = $("<div class='tbox'></div>")
            var $title = $("<div class='title'></div>")
            var $t1 = $("<div class='t1'>" + data[i].title + "</div>")
            var $t2 = $("<div class='t2'>" + data[i].txt + "</div>")
            var $icon = $("<div class='icon'></div>")
            var $icon1 = $("<span class='icon1'></span>")
            var $icon2 = $("<span class='icon2'></span>")
            $icon.append($icon1,$icon2)
            $title.append($t1,$t2,$icon)
            $tbox.append($title)

            $a.append($imgbox,$tbox)
            $li.append($a)
            $("#app").append($li)
        });
    }
    );
})