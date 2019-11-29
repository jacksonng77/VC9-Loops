    /*
        multiply accepts 1 parameter - multiplicator
        so when you provide a value, say multiply(3)
        it gives you the 3 times table

        multiply version 2 accepts 4 parameters
        multiplicator_from: 2 (start multiplicator from 2)
        multiplicator_to: 5 (end multiplicator at 5)
        from: 1 (multiply from 1)
        to: 6 (multiply until 6)

        e.g. multiply(2, 5, 1, 6)
        this will show the multiplication table from 2 to 5
        and multiply them from 1 to 6

        2 x 1.....2 x 6
        3 x 1.....3 x 6
        .
        5 x 1.....5 x 6
    */
    function multiply(mul_from, mul_to, from, to) {
        var answer = 0;
        var mul;
        for (mul = mul_from; mul <= mul_to; mul++){
            for (i = from; i <= to; i++) {
                answer = mul * i;
                alert(mul + " x " + i + " = " + answer);
            }
        }
    }
    //this will give me the time table of 2 until 5, multiply from 1 to 10
    /*
        2 x 1...2 x 10
        3 x 1...3 x 10
        ...
        5 x 1...5 x 10
    */
    multiply(2, 5, 1, 10);
