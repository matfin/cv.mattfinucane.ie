/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var portfolio_count = 0;
var current_index = 0;

$(document).ready(function(){
   primePortfolioScroll();
});

function primePortfolioScroll(){
    portfolio_count = $('figure', '#portfolio').length - 1;
    $('button.next').click(function(){
        move('next');
    });
    $('button.prev').click(function(){
        move('prev'); 
    });
    $('figcaption').click(function(){
        toggleFullFigCaption($(this).data('showing')); 
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
    var move_by = (current_index * (-800));
    cssTransform('#portfolio div', move_by);
}

function cssTransform(node, move_by){
    if($.browser.webkit){
        console.log('Webkit based browser');
        $(node).css('-webkit-transform','translateX(' + move_by + 'px)');
    }
    else if($.browser.mozilla){
        console.log('Gecko based browser');
        $(node).css('-moz-transform','translateX(' + move_by + 'px)');
    }
    else if($.browser.opera){
        console.log('Opera browser');
        $(node).css('-o-transform','translateX(' + move_by + 'px)');
    }
    else if($.browser.msie){
        console.log('Internet Explorer browser');
        $(node).css('-ms-transform','translateX(' + move_by + 'px)');
    } 
    else{
        console.log('Unknown browser - use positioning instead');
        $(node).css('left', move_by + 'px)');
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
                  'margin':'100px 0px 20px 12.5%'
               });
               $('p, dd, ol', '#portfolio').css({
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
           $('p, dd, ol', '#portfolio').css({
              'opacity':'0.0',
              'display':'none'
           });
           $('figcaption', 'figure').css({
              'min-height':'10%'
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