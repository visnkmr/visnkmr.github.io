// global vars
var textAreaPaddtop = 15;
var dataBarHeight = 40;

$(document).ready(function () {
    // set continer height
    setMainContHeight();

    // focus on load
    $("textarea").focus();

    // resize funstions
    $(window).resize(function () {
        setMainContHeight()
    });

    // count 
    $("textarea").on('keyup propertychange paste', function () {
        $("#characterCount").text($(this).val().length); //characters
        countRows(); //rows
        wordCount(); // word counter 
        $("#changeTime").text(getCurrentTime());// set last saved
    });


});

// set continer height
function setMainContHeight()
{
    $("#textAreaCont").height($(window).height() - (dataBarHeight + textAreaPaddtop));
}

// count number of rows
function countRows() {
    var t = $("textarea")[0];
    $("#linecount").text(t.value.substr(0, t.selectionStart).split("\n").length);
}

function getCurrentTime()
{
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes();

    return datetime;

}
// word count
function wordCount(){

    var value = $('#textArea').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    $('#wordCount').html(wordCount); //update word count on the UI

}

