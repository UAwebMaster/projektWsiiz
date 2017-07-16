/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.3.1 - built 2016-09-18
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2016 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/
!function(t){"use strict";var s={slide:0,delay:5e3,loop:!0,preload:!1,preloadImage:!1,preloadVideo:!1,timer:!0,overlay:!1,autoplay:!0,shuffle:!1,cover:!0,color:null,align:"center",valign:"center",firstTransition:null,firstTransitionDuration:null,transition:"fade",transitionDuration:1e3,transitionRegister:[],animation:null,animationDuration:"auto",animationRegister:[],init:function(){},play:function(){},pause:function(){},walk:function(){},slides:[]},i={},e=function(i,e){this.elmt=i,this.settings=t.extend({},s,t.vegas.defaults,e),this.slide=this.settings.slide,this.total=this.settings.slides.length,this.noshow=this.total<2,this.paused=!this.settings.autoplay||this.noshow,this.ended=!1,this.$elmt=t(i),this.$timer=null,this.$overlay=null,this.$slide=null,this.timeout=null,this.first=!0,this.transitions=["fade","fade2","blur","blur2","flash","flash2","negative","negative2","burn","burn2","slideLeft","slideLeft2","slideRight","slideRight2","slideUp","slideUp2","slideDown","slideDown2","zoomIn","zoomIn2","zoomOut","zoomOut2","swirlLeft","swirlLeft2","swirlRight","swirlRight2"],this.animations=["kenburns","kenburnsLeft","kenburnsRight","kenburnsUp","kenburnsUpLeft","kenburnsUpRight","kenburnsDown","kenburnsDownLeft","kenburnsDownRight"],this.settings.transitionRegister instanceof Array==!1&&(this.settings.transitionRegister=[this.settings.transitionRegister]),this.settings.animationRegister instanceof Array==!1&&(this.settings.animationRegister=[this.settings.animationRegister]),this.transitions=this.transitions.concat(this.settings.transitionRegister),this.animations=this.animations.concat(this.settings.animationRegister),this.support={objectFit:"objectFit"in document.body.style,transition:"transition"in document.body.style||"WebkitTransition"in document.body.style,video:t.vegas.isVideoCompatible()},this.settings.shuffle===!0&&this.shuffle(),this._init()};e.prototype={_init:function(){var s,i,e,n="BODY"===this.elmt.tagName,o=this.settings.timer,a=this.settings.overlay,r=this;this._preload(),n||(this.$elmt.css("height",this.$elmt.css("height")),s=t('<div class="vegas-wrapper">').css("overflow",this.$elmt.css("overflow")).css("padding",this.$elmt.css("padding")),this.$elmt.css("padding")||s.css("padding-top",this.$elmt.css("padding-top")).css("padding-bottom",this.$elmt.css("padding-bottom")).css("padding-left",this.$elmt.css("padding-left")).css("padding-right",this.$elmt.css("padding-right")),this.$elmt.clone(!0).children().appendTo(s),this.elmt.innerHTML=""),o&&this.support.transition&&(e=t('<div class="vegas-timer"><div class="vegas-timer-progress">'),this.$timer=e,this.$elmt.prepend(e)),a&&(i=t('<div class="vegas-overlay">'),"string"==typeof a&&i.css("background-image","url("+a+")"),this.$overlay=i,this.$elmt.prepend(i)),this.$elmt.addClass("vegas-container"),n||this.$elmt.append(s),setTimeout(function(){r.trigger("init"),r._goto(r.slide),r.settings.autoplay&&r.trigger("play")},1)},_preload:function(){var t,s;for(s=0;s<this.settings.slides.length;s++)(this.settings.preload||this.settings.preloadImages)&&this.settings.slides[s].src&&(t=new Image,t.src=this.settings.slides[s].src),(this.settings.preload||this.settings.preloadVideos)&&this.support.video&&this.settings.slides[s].video&&(this.settings.slides[s].video instanceof Array?this._video(this.settings.slides[s].video):this._video(this.settings.slides[s].video.src))},_random:function(t){return t[Math.floor(Math.random()*t.length)]},_slideShow:function(){var t=this;this.total>1&&!this.ended&&!this.paused&&!this.noshow&&(this.timeout=setTimeout(function(){t.next()},this._options("delay")))},_timer:function(t){var s=this;clearTimeout(this.timeout),this.$timer&&(this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration","0ms"),this.ended||this.paused||this.noshow||t&&setTimeout(function(){s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration",s._options("delay")-100+"ms")},100))},_video:function(t){var s,e,n=t.toString();return i[n]?i[n]:(t instanceof Array==!1&&(t=[t]),s=document.createElement("video"),s.preload=!0,t.forEach(function(t){e=document.createElement("source"),e.src=t,s.appendChild(e)}),i[n]=s,s)},_fadeOutSound:function(t,s){var i=this,e=s/10,n=t.volume-.09;n>0?(t.volume=n,setTimeout(function(){i._fadeOutSound(t,s)},e)):t.pause()},_fadeInSound:function(t,s){var i=this,e=s/10,n=t.volume+.09;1>n&&(t.volume=n,setTimeout(function(){i._fadeInSound(t,s)},e))},_options:function(t,s){return void 0===s&&(s=this.slide),void 0!==this.settings.slides[s][t]?this.settings.slides[s][t]:this.settings[t]},_goto:function(s){function i(){f._timer(!0),setTimeout(function(){y&&(f.support.transition?(h.css("transition","all "+_+"ms").addClass("vegas-transition-"+y+"-out"),h.each(function(){var t=h.find("video").get(0);t&&(t.volume=1,f._fadeOutSound(t,_))}),e.css("transition","all "+_+"ms").addClass("vegas-transition-"+y+"-in")):e.fadeIn(_));for(var t=0;t<h.length-4;t++)h.eq(t).remove();f.trigger("walk"),f._slideShow()},100)}"undefined"==typeof this.settings.slides[s]&&(s=0),this.slide=s;var e,n,o,a,r,h=this.$elmt.children(".vegas-slide"),d=this.settings.slides[s].src,l=this.settings.slides[s].video,g=this._options("delay"),u=this._options("align"),c=this._options("valign"),p=this._options("cover"),m=this._options("color")||this.$elmt.css("background-color"),f=this,v=h.length,y=this._options("transition"),_=this._options("transitionDuration"),w=this._options("animation"),b=this._options("animationDuration");this.settings.firstTransition&&this.first&&(y=this.settings.firstTransition||y),this.settings.firstTransitionDuration&&this.first&&(_=this.settings.firstTransitionDuration||_),this.first&&(this.first=!1),"repeat"!==p&&(p===!0?p="cover":p===!1&&(p="contain")),("random"===y||y instanceof Array)&&(y=y instanceof Array?this._random(y):this._random(this.transitions)),("random"===w||w instanceof Array)&&(w=w instanceof Array?this._random(w):this._random(this.animations)),("auto"===_||_>g)&&(_=g),"auto"===b&&(b=g),e=t('<div class="vegas-slide"></div>'),this.support.transition&&y&&e.addClass("vegas-transition-"+y),this.support.video&&l?(a=l instanceof Array?this._video(l):this._video(l.src),a.loop=void 0!==l.loop?l.loop:!0,a.muted=void 0!==l.mute?l.mute:!0,a.muted===!1?(a.volume=0,this._fadeInSound(a,_)):a.pause(),o=t(a).addClass("vegas-video").css("background-color",m),this.support.objectFit?o.css("object-position",u+" "+c).css("object-fit",p).css("width","100%").css("height","100%"):"contain"===p&&o.css("width","100%").css("height","100%"),e.append(o)):(r=new Image,n=t('<div class="vegas-slide-inner"></div>').css("background-image",'url("'+d+'")').css("background-color",m).css("background-position",u+" "+c),"repeat"===p?n.css("background-repeat","repeat"):n.css("background-size",p),this.support.transition&&w&&n.addClass("vegas-animation-"+w).css("animation-duration",b+"ms"),e.append(n)),this.support.transition||e.css("display","none"),v?h.eq(v-1).after(e):this.$elmt.prepend(e),h.css("transition","all 0ms").each(function(){this.className="vegas-slide","VIDEO"===this.tagName&&(this.className+=" vegas-video"),y&&(this.className+=" vegas-transition-"+y,this.className+=" vegas-transition-"+y+"-in")}),f._timer(!1),a?(4===a.readyState&&(a.currentTime=0),a.play(),i()):(r.src=d,r.complete?i():r.onload=i)},_end:function(){this.ended=!0,this._timer(!1),this.trigger("end")},shuffle:function(){for(var t,s,i=this.total-1;i>0;i--)s=Math.floor(Math.random()*(i+1)),t=this.settings.slides[i],this.settings.slides[i]=this.settings.slides[s],this.settings.slides[s]=t},play:function(){this.paused&&(this.paused=!1,this.next(),this.trigger("play"))},pause:function(){this._timer(!1),this.paused=!0,this.trigger("pause")},toggle:function(){this.paused?this.play():this.pause()},playing:function(){return!this.paused&&!this.noshow},current:function(t){return t?{slide:this.slide,data:this.settings.slides[this.slide]}:this.slide},jump:function(t){0>t||t>this.total-1||t===this.slide||(this.slide=t,this._goto(this.slide))},next:function(){if(this.slide++,this.slide>=this.total){if(!this.settings.loop)return this._end();this.slide=0}this._goto(this.slide)},previous:function(){if(this.slide--,this.slide<0){if(!this.settings.loop)return void this.slide++;this.slide=this.total-1}this._goto(this.slide)},trigger:function(t){var s=[];s="init"===t?[this.settings]:[this.slide,this.settings.slides[this.slide]],this.$elmt.trigger("vegas"+t,s),"function"==typeof this.settings[t]&&this.settings[t].apply(this.$elmt,s)},options:function(i,e){var n=this.settings.slides.slice();if("object"==typeof i)this.settings=t.extend({},s,t.vegas.defaults,i);else{if("string"!=typeof i)return this.settings;if(void 0===e)return this.settings[i];this.settings[i]=e}this.settings.slides!==n&&(this.total=this.settings.slides.length,this.noshow=this.total<2,this._preload())},destroy:function(){clearTimeout(this.timeout),this.$elmt.removeClass("vegas-container"),this.$elmt.find("> .vegas-slide").remove(),this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt),this.$elmt.find("> .vegas-wrapper").remove(),this.settings.timer&&this.$timer.remove(),this.settings.overlay&&this.$overlay.remove(),this.elmt._vegas=null}},t.fn.vegas=function(t){var s,i=arguments,n=!1;if(void 0===t||"object"==typeof t)return this.each(function(){this._vegas||(this._vegas=new e(this,t))});if("string"==typeof t){if(this.each(function(){var e=this._vegas;if(!e)throw new Error("No Vegas applied to this element.");"function"==typeof e[t]&&"_"!==t[0]?s=e[t].apply(e,[].slice.call(i,1)):n=!0}),n)throw new Error('No method "'+t+'" in Vegas.');return void 0!==s?s:this}},t.vegas={},t.vegas.defaults=s,t.vegas.isVideoCompatible=function(){return!/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)}}(window.jQuery||window.Zepto);
//# sourceMappingURL=vegas.min.js.map


 // slider bigone show initite
        $elmt = $('.element_slider');
        $elmt.vegas({
            delay: 7000,
            timer: false,
            slides: [
                { src: 'images/slider/slider46-bg.jpg' },
                { src: 'images/slider/slider47-bg.jpg' }
            ],
        walk: function (index, slideSettings) {
              //using animated library
                $(".textSlider").addClass("fadeInDown animated").one('animationend webkitAnimationEnd oAnimationEnd',       function() {
                    $(".textSlider").removeClass("fadeInDown animated");
                });
        },
            //transition: 'fade',
            animation: 'kenburnsUp'
        });
        
         // animate text to move right when mouse hover
        $( ".textSlider" )
          .on( "mouseenter", function() {
             $(this).animate({ 
                'padding-right': (8 + "%")
             })
        })
          .on( "mouseleave", function() {
             $(this).animate({ 
                'padding-right': (9 + "%")
             })
        });
        
        // arrow slider small one
        $elmt2 = $('.element_slider2');
        $elmt2.vegas({
            delay: 7000,
            timer: false,
            slide: 1,
            slides: [
                { src: 'images/slider/slider46-bg.jpg' },
                { src: 'images/slider/slider47-bg.jpg' }
            ],
            walk: function (index, slideSettings) {
              //using animated library
                $(".textSlider").addClass("fadeInDown animatedFadeID").one('animationend webkitAnimationEnd oAnimationEnd',       function() {
                    $(".textSlider").removeClass("fadeInDown animated");
                });
            },
            //transition: 'fade',
            animation: 'kenburnsUp'
        });
        
        //set slider height to window height
        (function() {
            var $sizeSlider = $('.element_slider');
            $sizeSlider.height(window.innerHeight);
        })();
        
        // change scrollBar when moving scroll bar
        var navbar = $('.navbar-default');
        $(window).scroll(function() { 
            var height = $(window).scrollTop();
            if(height  > 10) {
                navbar.css('background-color', 'rgb(34,34,34)');
            }
            else  navbar.css('background-color', 'transparent');
        });
        
        //adding arrow slider
       (function() {    
            $elmt2.on('click', function() {
                $elmt.vegas('next');
                $elmt2.vegas('next');
            } );
        })();
        

         //adding animation to arrow slides
        (function() {   
        $('.arrow-left').hover(function(){
            $(this).find('.leftSlide').stop(true, true).fadeIn(700);
        }, function(){
            $(this).find('.leftSlide').stop(true, true).fadeOut(1000);
        });
        })();
        
        (function() {   
        $('.arrow-right').hover(function(){
            $(this).find('.rightSlide').stop(true, true).fadeIn(700);
        }, function(){
            $(this).find('.rightSlide').stop(true, true).fadeOut(1000);
        });
        })();
        
        //dispaying arrows
        (function() {   
            $('section.a').on('mouseenter', function() {
                $('.arrow').show(1000);
            }).on('mouseleave', function() {
                $('.arrow').hide(1000);
            });  
         })();
                
        //color animation
        (function() {   
            $('.pContain').on('mouseenter', function() {
                var self = this;
                $('.anim', self).addClass('zoomOut');
            }).on('mouseleave', function() {
                $('.anim').removeClass('zoomOut');
            });  
         })();
        
        
        //isotope sorting
        var $grid = $('.grid');
       
        $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          //alert(filterValue);//test
          $grid.isotope({ filter: "."+filterValue });
        });
        
        // making slider with arrows top
        $(document).ready(function(){
            var windowWidth = $(window).width();
            
            var slider = $('.slider4');
            var obxSettings = {
            slideWidth: 300,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10,
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            pager : false,
            slideWidth: 5000,
            slideMargin: 0,
            auto: true
          };
            slider.bxSlider(obxSettings);
            
            
            $(window).resize(function() {
                windowWidth = $(window).width();
                    if(windowWidth < 768) {
                        obxSettings.nextText = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
                        obxSettings.prevText = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
                        obxSettings.minSlides = 2;
                        slider.reloadSlider();
                    }   
                    else {
                        obxSettings.nextText = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
                        obxSettings.prevText = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
                        obxSettings.minSlides = 3;
                        slider.reloadSlider();
                    }
            });
        });
   
        $(document).ready(function() {
            $('.progress .progress-bar').css("width",
            function() {
            return $(this).attr("aria-valuenow") + "%";
            }
            )
        });
  
        var windowWidth = $(window).width();
        var slider2 = $('.slider2');
            var obxSettings2 = {
            minSlides: 6,
            maxSlides: 6,
            moveSlides: 1,
            slideMargin: 10,
            nextSelector: '#slider-next2',
            prevSelector: '#slider-prev2',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            pager : false,
            slideWidth: 5000,
            auto: true
          };
        
          function init() {
            checkWidth();
            slider2.bxSlider(obxSettings2);
          }
         init();
        
        function checkWidth() {
            windowWidth = $(window).width();
            if(windowWidth<400) {
                obxSettings2.maxSlides = 1;
                obxSettings2.minSlides = 1;
            }
            else { 
                obxSettings2.maxSlides = 6;
                obxSettings2.minSlides = 6;
            }
        }
        
        $(window).resize(function() {
            slider2.destroySlider();
            init();
        });
        windowResizezed = true;
        
        // animate text to move right when mouse hover
        
      var scheduled = false;
      $( "section.l h3" )
          .on( "mouseenter", function() {
             if(!scheduled) {
             $(this).animate({ 
                'padding-left': 10
             })
             scheduled=true;
             }
        })
          .on( "mouseleave", function() {
             $(this).animate({ 
                'padding-left': 0
             })
             setTimeout(function() {
                 scheduled=false;
                //clearTimeout(interval);
             },
             2000);
        })


        //Script for counting
        var countflag1 = true;
        $('.countUp').appear();
        $(document.body).on('appear', '.countUp', function(e, $affected) {
            if(countflag1){
            // Count up javascript
                var options = {
                  useEasing : true, 
                  useGrouping : true, 
                  separator : ',', 
                  decimal : '.' 
                }
                var demo1 = new countUp("count1", 0, 2967, 0, 2, options);
                demo1.start();
                countflag1 = false;
             }    
        });
        var countflag2 = true;
         $('.countUp2').appear();
        $(document.body).on('appear', '.countUp2', function(e, $affected) {
            if(countflag2){
            // Count up javascript
                var options = {
                  useEasing : true, 
                  useGrouping : true, 
                  separator : ',', 
                  decimal : '.' 
                }
             
               var demo2 = new countUp("count2", 0, 1577, 0, 2, options);
                demo2.start();
                var demo3 = new countUp("count3", 0, 2899, 0, 2, options);
                demo3.start();
                countflag2 = false;
             }    
        });
  
        //appearing disappearing
    var $appeared = $('#appeared');
	var $disappeared = $('#disappeared');
	$('.animateup').appear();
	$(document.body).on('appear', '.animateup', function(e, $affected) {
		$affected.each(function() {
			$(this).addClass('animated fadeInUp');    
		})
	  });
        
    $('.fadeinleft').appear();
	$(document.body).on('appear', '.fadeinleft', function(e, $affected) {
		$affected.each(function() {
			$(this).addClass('animated fadeInLeft');    
		})
	  });
        
        $('.fadeinright').appear();
	$(document.body).on('appear', '.fadeinright', function(e, $affected) {
		$affected.each(function() {
			$(this).addClass('animated fadeInRight');    
		})
	  });
        
        $('.slideinup').appear();
	$(document.body).on('appear', '.slideinup', function(e, $affected) {
		$affected.each(function() {
			$(this).addClass('animated slideInUp');    
		})
	  });
        
        $('.zoominup').appear();
	$(document.body).on('appear', '.zoominup', function(e, $affected) {
		$affected.each(function() {
			$(this).addClass('animated zoomInUp');    
		})
	  });
        
         $('.rotate').appear();
	$(document.body).on('appear', '.rotateIt', function(e, $affected) {
		$affected.each(function() {
			$(this).addClass('animated rotateIn');    
		})
	  });
    
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

 

$(document).ready(function(){
   $('#sendForm').click(function() {
   var name = $('#formName').val();
   var email = $('#formEmail').val();
   var formTextarea = $("#formTextarea").val();
   if(name.length > 0 && email.length > 0) {
   alert('Wiadomość została wysłana');
   $('#formName').val('');
   $('#formEmail').val('');
   $("#formTextarea").val('');
   }
   else alert("Pole name, email, wiadomość so wymagane");
  });
});
