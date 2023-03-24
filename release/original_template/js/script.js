// MV全画面表示
$(function(){
    var headWrap = $('.main');
    var headWraph = $(window).outerHeight();
    var headWrapw = $(window).outerWidth();
    headWrap.outerHeight(headWraph);
    headWrap.outerWidth(headWrapw);
    $(window).resize(function(){
        var headWraph = $(window).outerHeight();
        var headWrapw = $(window).outerWidth();
        headWrap.outerHeight(headWraph);
        headWrap.outerWidth(headWrapw);
    })
});
// instagramボタンホバー処理
$(function(){
    $('.header-btn').hover(function(){
        $('.off').css('display', 'none');
        $('.on').css('display','block');
    },function(){
        $('.on').css('display', 'none');
        $('.off').css('display','block');
    });
})
// スクロールフェードイン処理
$(function(){
    var fadeIn = $('.is-open');
    $(window).scroll(function () {
    $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 200) {
        $(this).addClass("scroll-in");
        }
    });
    });
});
// lightbox
$(function(){
    $('.galleryWrap_item').on('click', function(){
        // overlay
        $('.galleryMenu').append('<div class="overlay"></div>');
        // lightbox
        $('.galleryMenu').append('<div class="lightbox"><img class="l-img" src=""><p class="title"></p></div>');
        // closebtn
        $('.galleryMenu').append('<div class="l-close">back</div>');
        var getimg = $(this).find('img').attr('src');
        var getttl = $(this).find('img').attr('alt');
        $('.l-img').attr('src',getimg);
        $('.title').html(getttl);
    });
    //削除部
    $(document).on("click", ".overlay", function(){
        // lightbox
        $('.lightbox').remove();
        // overlay
        $('.overlay').remove();
        // l-close
        $('.l-close').remove();
    });
    //削除部
    $(document).on("click", ".l-close", function(){
        // lightbox
        $('.lightbox').remove();
        // overlay
        $('.overlay').remove();
        // l-close
        $('.l-close').remove();
    });
});

// スクロールトップボタン
$(function(){
    $('.top').click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;
    });
    $(window).scroll(function () {
        $('.scroll').each(function () {
            if($(window).scrollTop() > 600){
                $('.scroll').fadeIn(2000);
            } else if($(window).scrollTop() < 600){
                $('.scroll').fadeOut(2000);
            }
        });
    });
});
// Q&A
$(function(){
    let flag = false;
    $(".que").on('click',function(){
        if(flag == false){
            $(this).next('.ans').addClass('-show');
            $(this).removeClass('unclick');
            $(this).addClass('clicked');
            flag = true;
        } else{
            $('.ans').removeClass('-show');
            $(this).removeClass('clicked');
            $(this).addClass('unclick');
            flag = false;
        }
    })
    

})
// about
$(function(){
    var items = $('.aboutItem_disc_text_part');
    var num = items.length;
    var time = 5000;
    var set = -1;
    console.log(set);
    const slide = () =>{
        set++;
        var current = items.eq(set);
        items.removeClass('-show');
        current.addClass('-show');
        console.log(set);
        if(set >= num - 1 ){
            set = -1;
        }
    }
    var timer1  = setInterval(slide, time);
    var timer2  = slide();

    // before cliked
    $(document).on('click','.aboutItem_disc_before', function(){
        set--;
        var current = items.eq(set);
        items.removeClass('-show');
        current.addClass('-show');
        clearInterval(timer1);
        if(set >= num - 1){
            set = -1;
            console.log(set);
            current.addClass('-show');
        } else if(set <= -1){
            set = 2;
            console.log(set);
            current.addClass('-show');
        }
        else{
            console.log(set);
            items.removeClass('-show');
            current.addClass('-show');
        }
        timer1 = setInterval(slide, time);
    });

    // before cliked
    $(document).on('click','.aboutItem_disc_next', function(){
        set++;
        var current = items.eq(set);
        items.removeClass('-show');
        current.addClass('-show');
        clearInterval(timer1);
        if(set >= num - 1){
            set = -1;
            console.log(set);
            current.addClass('-show');
        } else if(set <= -1){
            set = 2;
            console.log(set);
            current.addClass('-show');
        }
        else{
            console.log(set);
            items.removeClass('-show');
            current.addClass('-show');
        }
        timer1 = setInterval(slide, time);
    });

    timer1();
    timer2();
});