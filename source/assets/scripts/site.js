//= require 'src/jquery-1.7.2.min'

LoadedFunctions.site = true;

$(document).ready(function(){

    var myColors = [
        ['#fdbd12', '#ffd14e', '#fedd84', '#ffe9ad', '#fdbd12'],
        ['#3d8e7c', '#72C1B0', '#9BD0C2', '#C9E6DE', '#3d8e7c'],
        ['#2aa0b5', '#45bcd2', '#6DC6DD', '#B1E1ED', '#2aa0b5'],
        ['#da3c26', '#E95C41', '#EA867D', '#F2BDB9', '#da3c26']
    ];
    
    var i = 0;
    var set = getRandomNum(0, 3);
    
    $('.backgroundcolor').each(function() {
		
        $(this).css('backgroundColor', myColors[set][i]);
        i++;
    
    }).addClass('visible');
    

    $('#btn').click(function(){
    
        var div =  $('#topnav')
        
        if(div.is(':hidden')){
            div.slideDown();
        } else { 
            div.slideUp();
        }

    });

});

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};