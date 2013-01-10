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
    $('#portfolio div').css('-webkit-transform','translateX(' + move_by + 'px)');
}

function toggleFullFigCaption(show){
    switch(show){
        case false:{
           $('figcaption', 'figure').css({
              'height':'98%'
           });
           $('button', '#portfolio').css({
               'background-color':'#fff',
               'color':'#000',
               'width':'100px'
           });
           $('.prev').css({
               'padding-left':'40px'
           });
            $('.next').css({
               'padding-right':'40px'
           });
           $('figcaption').data('showing', true);
           break;
        }
        case true:{
           $('figcaption', 'figure').css({
              'height':'10%'
           });
           $('button', '#portfolio').css({
               'background-color':'#000',
               'color':'#fff',
               'width':'140px'
           });
           $('.prev').css({
               'padding-left':'0px'
           });
            $('.next').css({
               'padding-right':'0px'
           });
           $('figcaption').data('showing', false);
           break;
        }
    }
}