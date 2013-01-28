/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var portfolio_count = 0;
var current_index = 0;
var touch_start_x;

$(document).ready(function(){
    if(isTouchDevice()){
        console.log('This is a touch device');
        addNavSpinner();
        primePortfolioToSwipe();
    }
    else{
        console.log('This is not a touch device');
        primePortfolioScroll();
    }
});

function addNavSpinner(){
    document.getElementsByTagName('form')[0].appendChild(new Select().returnrendered());
    $('select', 'header form').change(function(event){
        scrollToY($(this).val());
    });
}

function scrollToY(position){
    console.log(position);
    $('html, body').animate({scrollTop: position - 50});
}

function isTouchDevice(){
    return !!('ontouchstart' in window);
}

function primePortfolioToSwipe(){   
    document.getElementById('portfolio_container').addEventListener('touchstart', function(event){
        touch_start_x = event.changedTouches[0].pageX; 
    });
    document.getElementById('portfolio_container').addEventListener('touchend', function(event){
        swipePortfolio(event);
    });
    document.getElementById('portfolio_container').addEventListener('touchmove', function(event){
        event.preventDefault();
    });
    
    portfolio_count = $('figure', '#portfolio').length - 1;
    $('#portfolio').css({
        'display':'inline' 
    });
    $('figcaption', '#portfolio').css({
        '-webkit-transform-style': 'preserve-3d',
        '-webkit-backface-visibility': 'hidden'
    });
    $('.imgscreen').css({
         '-webkit-backface-visibility': 'hidden'
    });
    $('div', '#portfolio').css({
       'width': (portfolio_count + 2) * 100 + '%'
    });
    $('div figure', '#portfolio').css({
        'width': parseFloat(100 / (portfolio_count + 2)) + '%'
    });
    $('a[rel="external"]').each(function(){
        $(this).attr('target', '_blank');
    });
    $('a.moreinfo').each(function(){
        $(this).text('Tap to see more');
    });
    $('a.close').each(function(){
        $(this).text('Tap to close');
    });
    $('button', '#portfolio').css({
        'display':'none'
    });
    $('div', '#portfolio').click(function(){
        toggleFullFigCaption($('figcaption', this).data('showing')); 
    });
}

function swipePortfolio(event){
    var end_x = event.changedTouches[0].pageX;
    if(end_x >= (touch_start_x + 50)){
        move('prev');
    }
    else if(end_x <= (touch_start_x - 50)){
        move('next');
    }
}

function primePortfolioScroll(){
    portfolio_count = $('figure', '#portfolio').length - 1;
    
    $('#portfolio').css({
        'display':'inline' 
    });
    
    $('div', '#portfolio').css({
       'width': (portfolio_count + 2) * 100 + '%'
    });
    $('div figure', '#portfolio').css({
        'width': parseFloat(100 / (portfolio_count + 2)) + '%'
    });
    
    $('button.next').click(function(){
        move('next');
    });
    $('button.prev').click(function(){
        move('prev'); 
    });
    $('div', '#portfolio').click(function(){
        toggleFullFigCaption($('figcaption', this).data('showing')); 
    });
    $('a[rel="external"]').each(function(){
        $(this).attr('target', '_blank');
    });
    $('a.moreinfo').each(function(){
        $(this).text('Click to see more');
    });
     $('a.close').each(function(){
        $(this).text('Click to close');
    });
}

function move(direction){
    switch(direction){
        case 'next':{
            current_index >= portfolio_count ? 0:current_index++;
            break;
        }
        case 'prev':{
            current_index <= 0 ? portfolio_count:current_index--;
            break;
        }
    }
    if(current_index > 0){
        $('.prev', '#portfolio').css({
            'left':'0%'
        });
    }
    else{
        $('.prev', '#portfolio').css({
            'left':'-7.5%'
        });
    }
    if(current_index == portfolio_count){
        $('.next', '#portfolio').css({
            'right':'-7.5%'
        });
    }
    else{
        $('.next', '#portfolio').css({
            'right':'0%'
        });
    }
    //var move_by = (current_index * (-800));
    cssTransform('#portfolio div', current_index);
}

function cssTransform(node, current_index){
    var percentage_move = parseFloat(current_index * (-100 / (portfolio_count + 2)));
    if($.browser.webkit){
        console.log('Webkit based browser');
        //$(node).css('-webkit-transform','translateX(' + percentage_move + '%)');
        $(node).css('-webkit-transform','translate3d(' + percentage_move + '%, 0, 0)');
    }
    else if($.browser.mozilla){
        console.log('Gecko based browser');
        //$(node).css('-moz-transform','translateX(' + percentage_move + '%)');
        $(node).css('-moz-transform','translate3d(' + percentage_move + '%, 0, 0)');
    }
    else if($.browser.opera){
        console.log('Opera browser');
        $(node).css('-o-transform','translateX(' + percentage_move + '%)');
    }
    else if($.browser.msie){
        console.log('Internet Explorer browser');
        $(node).css('-ms-transform','translateX(' + percentage_move + '%)');
    } 
    else{
        console.log('Unknown browser - use positioning instead');
        $(node).css('left', percentage_move + '%)');
    }
}

function toggleFullFigCaption(showing){
    var t;
    switch(showing){
        case false:{
           $('figcaption', 'figure').css({
                'min-height':'100%'
           });
           $('button', '#portfolio').css({
                'background-color':'#fff',
                'color':'#000'
           });
           t = setTimeout(function(){
               $('h3', '#portfolio').css({
                  'margin':'5% 0px 20px 12.5%'
               });
               $('p, dd, ol, a.link-full', '#portfolio').css({
                   'opacity':'1.0',
                   'display':'inline'
               });
               $('a.moreinfo', '#portfolio').css({
                   'display':'none',
                   'opacity':'0.0'
               });
               $('a.close', '#portfolio').css({
                   'display':'inline',
                   'opacity':'1.0'
               });
           }, 100);
          
           $('figcaption').data('showing', true);
           
           break
        }
        case true:{
           $('h3', '#portfolio').css({
               'margin':'10px 0px 0px 12.5%'
           });
           $('p, dd, ol, a.link-full', '#portfolio').css({
              'opacity':'0.0',
              'display':'none'
           });
           $('figcaption', 'figure').css({
              'min-height':'20%'
           });
           $('button', '#portfolio').css({
               'background-color':'#000',
               'color':'#fff'
           });
           $('a.moreinfo', '#portfolio').css({
                'display':'inline',
                'opacity':'1.0'
           });
           $('a.close', '#portfolio').css({
               'display':'none',
               'opacity':'0.0'
           });
           $('figcaption').data('showing', false);
           break;
        }
    }
}