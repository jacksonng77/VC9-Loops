(function () {

    $(document).ready(function () {
        $("#btnMultiply").bind("click", function () {
            multiply();
        });
    });

    function multiply() {
        var from, to, htmlString, result;
        from = parseInt($("#txtFrom").val());
        to = parseInt($("#txtTo").val());

        htmlString = "";
        for (j = from; j <= to; j++) {
            for (i = 1; i <= 10; i++) {
                result = j * i;
                htmlString += j.toString() + " x " + i.toString() + " = " + result.toString() + "<br>";
            }
        }
        $("#result").html(htmlString);
    }

})();