(function () {

    function looptest() {
        var startNumber, endNumber, htmlString, i, j;
        startNumber = 0;
        endNumber = 3;
        i = 0;
        j = 0;
        htmlString = "";
        while (i <= endNumber) {
            while (j <= 3) {
                htmlString = htmlString + "(" + i.toString() + "," + j.toString() + ")" + "<br>";
                j++;
            }
            j = 0;
            i++;
        }
        $("#result").html(htmlString);
    }

    looptest();

})();