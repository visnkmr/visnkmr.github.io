// global vars
var addonName = "clearWrite";

// get from local storage vars
var textAreaValue = localStorage.getItem(addonName + "_textAreaVal");
var lastChanged = localStorage.getItem(addonName + "_textAreaLastChanged");
var fontSize = localStorage.getItem(addonName + "_fontSize");


$(document).ready(function () {
    // focus on load
    $("textarea").focus();
    // text area value
    if (textAreaValue) {
        $("textarea").val(textAreaValue);
        $("textarea").attr("placeholder", "");
    }
    // last change data & time
    if (lastChanged) {
        $("#changeTime").text(lastChanged);
    }

    // font size
    if (fontSize) {
        $("#fontSize").val(fontSize);
        $("textarea").css("font-size", fontSize + "px");
    }

    if ($("textarea").length > 0)
    {
        $("#characterCount").text($("textarea").val().length); //characters
        countRows();
    }


    
})


$(document).ready(function () {
    // save changes on text area
    $("textarea").on('keyup propertychange paste', function () {
        localStorage.setItem(addonName + "_textAreaVal", $(this).val());
        localStorage.setItem(addonName + "_textAreaLastChanged", getCurrentTime());
    });

    /// SETTINGS ///

    //font size
    $("#fontSize").on('change', function () {
        localStorage.setItem(addonName + "_fontSize", $(this).val());
    })

    // reset to default css styles
    $("#reset").click(function () {
        localStorage.removeItem(addonName + "_fontSize"); // Font Size

        // reload
        location.reload();
    })

})


function countRows() {
    var t = $("textarea")[0];
    $("#linecount").text(t.value.substr(0, t.selectionStart).split("\n").length);
}

