/*
 ** login Popup */

$(document).ready(function () {
    $(".btn_login").click(function () {
        $(".modal_layer").fadeIn(200, function () {
            $(".login_popup").fadeIn(500);
        });
    });
    $(".modal_layer").click(function () {
        $(".login_popup").fadeOut(200, function () {
            $(".modal_layer").fadeOut(500);
        });
    });
});




/*
 ** apply popup */

$(document).ready(function () {
    $(".btn_apply").click(function () {
        console.log("확인 됐음")
        $(".apply_modal_layer").fadeIn(200, function () {
            $(".apply_popup").fadeIn(500);
        });
    });
    $(".apply_modal_layer").click(function () {
        $(".apply_popup").fadeOut(200, function () {
            $(".apply_modal_layer").fadeOut(500);
        });
    });
});
