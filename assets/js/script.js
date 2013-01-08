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