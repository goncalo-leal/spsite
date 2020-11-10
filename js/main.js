$(".my_link").click(function(){
    path = $(this).data("path");
    parent = $(this).data("parent");

    $("#page_title").text("BCI | " + $('#'+parent+' > p').text().trim());

    $('.only_link').each(function(i, obj) {
        $(obj).removeClass("active");
    });

    $('.parent_link').each(function(i, obj) {
        $(obj).removeClass("active");
    });
    $("#"+parent).addClass("active");


    $('.my_link').each(function(i, obj) {
        $(obj).removeClass("active");
    });
    $(this).addClass("active");

    $("#page_content").load("./my_pages/"+path);
});

$(".only_link").click(function(){
    path = $(this).data("path");

    $("#page_title").text("BCI | " + $(this).find('p').text().trim());

    $('.parent_link').each(function(i, obj) {
        $(obj).removeClass("active");
    });

    $('.my_link').each(function(i, obj) {
        $(obj).removeClass("active");
    });

    $('.only_link').each(function(i, obj) {
        $(obj).removeClass("active");
    });
    $(this).addClass("active");

    $("#page_content").load("./my_pages/"+path);
});

function open_site(link){
    window.open("http://"+link, "_blank");
}

