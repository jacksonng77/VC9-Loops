(function () {

    $(document).ready(function () {
        $("#btnFind").bind("click", function () {
            div();
        });
    });

    function div() {
        var from, to, divisible, htmlString, found, i;
        from = parseInt($("#txtFrom").val());
        to = parseInt($("#txtTo").val());
        divisible = parseInt($("#txtDivisible").val());
        htmlString = "";
        i = from;
        found = false;
        while ((!found) && (i <= to)) {
            if (i % divisible == 0) {
                found = true;
            }
            else {
                i++;
            }
        }

        if (found) {
            $("#result").html("First number divisible by " + divisible + " found:" + i);
        }
        else {
            $("#result").html("Not Found");
        }
    }

})();