/*
/** seminar Banner **/
$(document).ready(function () {
    $(".btn_banner").eq(0).click(function () {
        $(".seminar_group").animate({
            left: '-300px'
        }, 100, function () {
            var x = $(".seminar_con").eq(0).detach();
            $(".seminar_group").append(x);
            $(".seminar_group").css("left", "0");
            $(".seminar_con").removeClass("center");
            $(".seminar_con").eq(2).addClass("center");
        });
    });

    $(".btn_banner").eq(1).click(function () {
        $(".seminar_group").animate({
            left: '300px'
        }, 100, function () {
            var x = $(".seminar_con").eq($(".seminar_con").length - 1).detach();
            $(".seminar_group").prepend(x);
            $(".seminar_group").css("left", "0");
            $(".seminar_con").removeClass("center");
            $(".seminar_con").eq(2).addClass("center");
        });
    });
});


/*
/** notice Banner **/
$(document).ready(function () {
    $(".btn_notice").eq(0).click(function () {
        $(".notice_group").animate({
            left: '-387px'
        }, 100, function () {
            var x = $(".notice_con").eq(0).detach();
            $(".notice_group").append(x);
            $(".notice_group").css("left", "0");
            $(".notice_con").removeClass("center");
            $(".notice_con").eq(2).addClass("center");
        });
    });

    $(".btn_notice").eq(1).click(function () {
        $(".notice_group").animate({
            left: '387px'
        }, 100, function () {
            var x = $(".notice_con").eq($(".notice_con").length - 1).detach();
            $(".notice_group").prepend(x);
            $(".notice_group").css("left", "0");
            $(".notice_con").removeClass("center");
            $(".notice_con").eq(2).addClass("center");
        });
    });
});



