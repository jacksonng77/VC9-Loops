(function () {

    function looptest() {
        var endNumber, htmlString, i;
        endNumber = 0;
        i = 5;
        htmlString = "";
        while (i >= endNumber) {
            htmlString = htmlString + i.toString() + "<br>";
            i = i - 2;
        }
        $("#result").html(htmlString);
    }

    looptest();

})();