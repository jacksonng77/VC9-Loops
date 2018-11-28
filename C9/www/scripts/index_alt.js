(function () {
    "use strict";

    //codes in this section runs when index.html loads
    $(document).ready(function () {

        //bind these code to btnMultiply's click
        $("#btnMultiply").bind("click", function () {
            var from = parseInt($("#txtFrom").val());
            var to = parseInt($("#txtTo").val());

            console.log(from);
            console.log(to);

            multiplication_table(from, to);

        });

    });

    //var i;
    //loop for i = 0,1,2,3...10
    //show the value of i in the console as it loops
    //multiplier = 1, i is 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    //multiplier = 2, i is 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    //.
    //.
    //multiplier = 10, i is 1,2,3,4,5,6,7,8,9,10
    function multiplication_table(from, to) {
        var htmlstring="";
        for (var multiplier = from; multiplier <= to; multiplier++) {
            for (var i = 1; i <= 10; i++) {
                console.log(multiplier + "x" + i + "=" + parseInt(multiplier * i));
                //2x1=2
                //2x2=4
                //2x3=6
                //2x4=8
                //2x5=10
                htmlstring = htmlstring + (multiplier + "x" + i + "=" + multiplier * i) +"<br />";
            }
        }
        $("#result").html(htmlstring);
    }

    //multiplication_table(1,2);
    //multiplication_table(8, 10);

    //write a loop to add 1,2,3,4,5,6,7,8,10....
    var total = 0;
    //j=1;total=1
    //j=2;total=1+2=3
    //j=3;total=3+3=6
    //j=4;total=6+4=10
    //j=5;total=10+5=15
    //j=6;total=15+6=21
    //j=7;total=21+7=28
    //j=8;total=28+8=36
    //j=9;total=36+9=45
    //j=10;total=45+10=55
    //make this flexible. create a function to let the caller tell you where j will start and where j will end
    function adder(from, to) {
        for (var j = from; j <= to; j++) {
            total = total + j;
        }
        console.log(total);
    }

    //adder(5, 10);
 
} )();
