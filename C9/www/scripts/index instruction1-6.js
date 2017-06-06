(function () {

    $(document).ready(function () {
        $("#btnMultiply").bind("click", function () {
            multiply();
        });
    });

    function multiply() {
        var from, htmlString, result;
        from = parseInt($("#txtFrom").val());

        htmlString = "";
        for (i = 1; i <= 10; i++) {
            result = from * i;
            htmlString += from.toString() + " x " + i.toString() + " = " + result.toString() + "<br>";
        }
        $("#result").html(htmlString);
    }

})();