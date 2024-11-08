function showExternalAlert() {
    alert ("A Pop Up Created by External JavaScript Located in the script.js File");
  }

$(document).ready( function(){
    $('button.special').click(function(){
        $('body').addClass('dark');
        $('h1').addClass('dark');
        $('h2').addClass('dark');
        $('p').addClass('dark');
        $('a').addClass('dark');
    });
});