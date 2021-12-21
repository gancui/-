// 导航按钮
$(function () {
    $("#ul li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
    $("#ul-y li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
})
var x1 = false;
var x2 = false;
// 表单验证
$(function () {
    //手机号验证
    $("#phonenum").blur(function () {
        var val = $(this).val()
        var regular = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
        var flag = regular.test(val)
        if (flag) {
            $("#phonenum").css("border-bottom", "1px solid #ccc")
            x1 = true;
        } else {
            $("#phonenum").css("border-bottom", "1px solid red")
            x1 = false;
        }
    })
    //邮箱验证
    $("#email").blur(function () {
        var val = $(this).val()
        var regular = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        var flag = regular.test(val);
        if (flag) {
            $("#email").css("border-bottom", "1px solid #ccc")
            x2 = true;
        } else {
            $("#email").css("border-bottom", "1px solid red")
            x2 = false;
        }
    })
})
// 提交验证
function check() {
    if (x1 == true && x2 == true) {
        return true;
    } else {
        return false;
    }
}