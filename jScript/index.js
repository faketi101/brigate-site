

$(document).ready(function(){
//-------------------------------scroll-check-------------------------
       $(window).scroll(console.log($(window).scrollTop()));
//-------------------------------home-slider-------------------------    
    setInterval(function(){
        if($(".home-slider").hasClass("home-profile-1")){
            $(".home-slider").removeClass("home-profile-1");
            $(".home-slider").addClass("home-profile-2");
            $('.home-btn-1').removeClass("btn-act");  
            $('.home-btn-2').addClass("btn-act");  
        }
        else if($(".home-slider").hasClass("home-profile-2")){
            $(".home-slider").removeClass("home-profile-2");
            $(".home-slider").addClass("home-profile-1");
            $('.home-btn-2').removeClass("btn-act");  
            $('.home-btn-1').addClass("btn-act");  
        }
    },7000);

    $(".home-btn-2").click(function(){
        $('.home-slider').removeClass("home-profile-1");  
        $('.home-btn-1').removeClass("btn-act");  
       $('.home-slider').addClass("home-profile-2");
       $('.home-btn-2').addClass("btn-act");
       
        
       
    });
    $(".home-btn-1").click(function(){
        $('.home-slider').removeClass("home-profile-2");  
        $('.home-btn-2').removeClass("btn-act");  
        $('.home-slider').addClass("home-profile-1");
        $('.home-btn-1').addClass("btn-act");
       
    });
// -------------------------------sticky-header-------------------------
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos  > 45) {
            
            $('.primaryMenu').addClass("hdr-sticky");
        }
        else if(scrollPos < 45){
            $('.primaryMenu').removeClass("hdr-sticky");
        }
    });
    // -------------------------------scroll-top-------------------------
    $(window).scroll(function() {
        var scrollDwn = $(window).scrollTop();

        if(scrollDwn  > 50) {
            $('.scroll-top').css({
                'opacity': '1',
            })            
        }
        else if(scrollDwn  < 50) {
            $('.scroll-top').css({
                'opacity': '0',
            })            
        }
    });

// -------------------------------Search---------------------------------
    $(".searchBtn").click(function(){
        if(!$(".search").hasClass("search-visible")){
            $(".search").addClass("search-visible");
        }
        else{
            $(".search").removeClass("search-visible");
        }
    
    
    })
    
// -------------------------------what we do-----------------------------
    $(window).scroll(function() {
        var scrollDwn = $(window).scrollTop();

        if(scrollDwn  >= 400) {
            if(!$('.contentBlock').hasClass("fadeRight")){
                $('.contentBlock').addClass("fadeRight");
            }
        }
    });
    $(window).scroll(function() {
        var scrollDwn = $(window).scrollTop();

        if(scrollDwn  >= 400) {
            if(!$('.contentBlock2').hasClass("fadeRight")){
                $('.contentBlock2').addClass("fadeRight");
            }
        }
    });

// -------------------------------why us--------------------------------
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos  >= 800) {
            if(!$('.whyUs').hasClass("fadeTop")){
                $('.whyUs').addClass("fadeTop");
            }
        }
    });

    

// -------------------------------more from us--------------------------
    $(window).scroll(function() {
        var scrollDwn = $(window).scrollTop();

        if(scrollDwn  >= 2090) {
            if(!$('.moreFromUsBlock').hasClass("fadeRight")){
                $('.moreFromUsBlock').addClass("fadeRight");
            }
        }
    });
    // -------------------------------price plan-------------------------
    $(window).scroll(function() {
        var scrollDwn = $(window).scrollTop();

        if(scrollDwn  >= 2700) {
            if(!$('.pricePlan-ContentBlock').hasClass("fadeRight")){
                $('.pricePlan-ContentBlock').addClass("fadeRight");
            }
        }
    });

// -------------------------------idea-----------------------------------
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos  >= 3000) {
            if(!$('.ideaContent-right_top').hasClass("fadeTop")){
                $('.ideaContent-right_top').addClass("fadeTop");
            }
        }
    });

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos  >= 3100) {
            if(!$('.ideaContent-right-Block').hasClass("fadeTop")){
                $('.ideaContent-right-Block').addClass("fadeTop");
            }
        }
    });
// -------------------------------team------------------------------------
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos  >= 3700) {
            if(!$('.meetOurTeam-block').hasClass("fadeTop")){
                $('.meetOurTeam-block').addClass("fadeTop");
            }
        }
    });
// -------------------------------news------------------------------------
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos  >= 5600) {
            if(!$('.news-block').hasClass("fadeTop")){
                $('.news-block').addClass("fadeTop");
            }
        }
    });

// -------------------------------CounterUp-------------------------------
$('.counter').counterUp({
        delay: 10,
        time: 1000
    });



    // -------------------------------Scroll menu color--------------------
    // -------------------------------Scroll menu color--------------------
    // -------------------------------Scroll menu color--------------------
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if( scroll > 500){
            $(".mHome").removeClass("abcd")
        }
        
        else if( scroll < 500){
            $(".mHome").addClass("abcd")
        }
        
    });
    
// -------------------------------Service--------------------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if( scroll > 500 && scroll < 1100){
        $(".mServices").addClass("abcd")
    }
    
    else{
        $(".mServices").removeClass("abcd")
    }
    
});

// -------------------------work with our team--------------------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if( scroll > 4782 && scroll < 5777){
        $(".mProjects").addClass("abcd")
    }
    
    else{
        $(".mProjects").removeClass("abcd")
    }
    
});
// -------------------------blog-----------------------------------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if( scroll > 5777 && scroll < 6564){
        $(".mBlog").addClass("abcd")
    }
    
    else{
        $(".mBlog").removeClass("abcd")
    }
    
});
// -------------------------blog-----------------------------------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if( scroll > 6564){
        $(".mContact").addClass("abcd")
    }
    
    else{
        $(".mContact").removeClass("abcd")
    }
    
});



});
