(function () {

    $(document).ready(function () {
        $("#btnAdd").bind("click", function () {
            adder();
        });
    });

    function adder() {
        var from, to;
        from = parseInt($("#txtFrom").val());
        to = parseInt($("#txtTo").val());

        for (i = from; i <= to; i++) {
            alert(i);
        }
    }
})();