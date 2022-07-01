$(document).ready(function(){

    /*script for open dropdown menu and rotate arrow icons*/
    $(".item").click(function(){
        
        $(this).find(".sub-menu").slideToggle(500);
        $(this).find(".arrows").toggleClass("arrows--rot");
    })

    /*script for open slide-menu and add matte blackscreen (mobile)*/
    $(".hamb-menu").click(function(){
        $(".navbar").toggleClass("navbar--open");
        $(".open").toggleClass("open--close");
        $(".close").toggleClass("close--open");
    })
});