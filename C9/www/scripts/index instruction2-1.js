(function () {

    function looptest() {
        var endNumber, htmlString, i;
        endNumber = 5;
        i = 0;
        htmlString = "";
        while (i <= endNumber) {
            htmlString = htmlString + i.toString() + "<br>";
            i++;
        }
        $("#result").html(htmlString);
    }

    looptest();

})();