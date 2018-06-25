(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        
        /*-------------------------------
            pricing table hover effects
        ---------------------------------*/
        $(document).on('click', '.pricing-rules-area ul li',function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.pricing-table-rules ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
            $('.pricing-table-rules-2 ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
        });
        /*-----------------------------
            wow js init
        ------------------------------*/
        new WOW().init();

        /*-----------------------------
            magnific popup activation
        ------------------------------*/ 
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        /*-----------------------------
            back to top
        ------------------------------*/ 
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
      
        /*-------------------------------
            counter section activation
        ---------------------------------*/
        var counternumber = $('.count-number,.forum-count');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        /*-------------------------------
            Portfolio filter 
        ---------------------------------*/
        var $Container = $('#portfolio-masonary');
        if ($Container.length > 0) {
            $Container.imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.single-portfolio-item', // use a separate class for itemSelector, other than .col-
                    percentPosition: true,
                    // masonry: {
                    //     columnWidth: '.grid-sizer'
                    // }
                });
                $(document).on('click', '.portfolio-menu-wrapper li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            var portfolioMenu = '.portfolio-menu-wrapper li';
            $(document).on('click', portfolioMenu, function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }
        /*----------------------------------
            testimonial carousel
        -----------------------------------*/
        var $tesitmonialCarousel = $('#testimonial-carousel');
        if ($tesitmonialCarousel.length > 0) {
            $tesitmonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, 
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: false,
                // animateOut: 'fadeOut',
                // animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        
        /*---------------------------------
            brand logo carousel
        ----------------------------------*/
        var $brandCarousel = $('#brand-carousel');
        if ($brandCarousel.length > 0) {
            $brandCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    414:{
                        items:2
                    },
                    599: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    },
                    1920: {
                        items: 6
                    }
                }
            });
        }
        /*---------------------------------
            How page image carousel
        ----------------------------------*/
        var $videothumbCarousel = $('#video-thumb-carousel');
        if ($videothumbCarousel.length > 0) {
            $videothumbCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: false,
                nav: true,
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }
       

    });
    
    var lastScrollTop = ''; //define variable for store last scrolltop
    $(window).on('scroll', function () {
        /*-----------------------------
            back to top show / hide
        -------------------------------*/
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------------
            sticky menu activation
       ---------------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                mainMenuTop.removeClass('nav-fixed'); // hide sticky menu on scrolldown
                
            } else {
                mainMenuTop.addClass('nav-fixed'); // active sticky menu on scrollup
            }
        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-------------------------
            preloader
        ---------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
        /*-----------------------------
                    twentytwenty 
        ------------------------------*/
        var $twentytwentyContainer = $('#twentytwenty-container');
        if ($twentytwentyContainer.length > 0) {
            $twentytwentyContainer.twentytwenty({
                before_label: '',
                after_label:''
            });
        }
    });

}(jQuery));	
