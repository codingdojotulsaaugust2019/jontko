$(document).ready(function (){

    $('#title').click(function(){
        $('#title').hide()});

    $('#ttbtn').click(function(){
        $('#title').show()});

    $('#bigButtonsAndICannotLie').click(function(){
        $('#pic').toggle()});

    $('.Button-add_Class').click(function(){
        $(".add_Class p").addClass('red')});
    

    console.log($('#bigButtonsAndICannotLie').attr('id'));
    console.log($('#title').text());
    console.log($('#box').val());
    console.log($('#toggle').html());
});


