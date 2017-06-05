(function () {

    $(document).ready(function () {
        $("#btnAdd").bind("click", function () {
            adder();
        });
    });

function adder() {
    var from, to, total;

    total = 0;
    from = parseInt($("#txtFrom").val());
    to = parseInt($("#txtTo").val());

    for (i = from; i <= to; i++) {
        total = total + i;
    }

    $("#result").html("Total from " + from + " to " + to + " = " + total);
}
})();