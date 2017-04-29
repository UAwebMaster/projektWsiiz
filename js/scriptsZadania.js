// change scrollBar when moving scroll bar
        var navbar = $('.navbar-default');
        $(window).scroll(function() { 
            var height = $(window).scrollTop();
            if(height  > 10) {
                navbar.css('background-color', 'rgb(34,34,34)');
            }
            else  navbar.css('background-color', 'transparent');
        });