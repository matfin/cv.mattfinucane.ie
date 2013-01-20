/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var portfolio_count = 0;
var current_index = 0;

$(document).ready(function(){
    primePortfolioScroll();
});

function documentIsInPrint(){
    return document.URL.indexOf('/print/') != -1;
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
              'min-height':'15%'
           });
           $('button', '#portfolio').css({
               'background-color':'#000',
               'color':'#fff'
           });
           $('figcaption').data('showing', false);
           break;
        }
    }
}