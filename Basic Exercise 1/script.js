$(document).ready(function() {
    $("div").on("click", function() {
        var picturename = $(this).find("img").attr("alt");
        console.log(picturename);
        $(this).after("<br><p>You clicked on "+ picturename+"</p>");
    });
});