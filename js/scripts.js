$(document).ready(function() {
  $(".begin").click(function() {
$("#questions .item").slice(0,2).show();

$(".next").click(function() {

    var items = $('#questions .item:visible').hide().last();

    var nextItems = items.nextAll().slice(0, 2);

    if (nextItems.length === 1) {
        nextItems = $("#questions .item").slice(-2);
    }

    if (nextItems.length === 0) {
        nextItems = $("#questions .item").slice(0, 2);
    }

    nextItems.show();
});
});
});
