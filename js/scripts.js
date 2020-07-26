$(document).ready(function() {
    $("#img-Design").click(function() {
        $("#img-Design").hide();
        $("#Design").show();
    });
    $("#Design").click(function() {
        $("#Design").hide();
        $("#img-Design").show();
    });
});
$(document).ready(function() {
    $("#img-Devt").click(function() {
        $("#img-Devt").hide();
        $("#Development").show();
    });
    $("#Development").click(function() {
        $("#Development").hide();
        $("#img-Devt").show();
    });
});
$(document).ready(function() {
    $("#img-product").click(function() {
        $("#img-product").hide();
        $("#Product").show();
    });
    $("#Product").click(function() {
        $("#Product").hide();
        $("#img-product").show();
    });
});
//mouseover
$(document).ready(function() {
    $("img").click(function() {
        $("img").show(stocksChart)
    });
});