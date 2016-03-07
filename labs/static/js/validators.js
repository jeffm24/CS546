(function() {
    /*
     *  perMonthRetirementSavings form validation
     */
    $('#perMonthRetirementSavings').submit(function(e) {
        e.preventDefault();

        $('#error-message').css('display', 'none');

        var years = $.trim( $('#perMonthRetirementSavings input[name="years"]').val() ),
            perMonth = $.trim( $('#perMonthRetirementSavings input[name="perMonth"]').val() ),
            interestRate = $.trim( $('#perMonthRetirementSavings input[name="interestRate"]').val() );

        if (years === '' || perMonth === '' || interestRate === '') {
            $('#error-message')
                .html("Please fill out all of the fields.")
                .css('display', 'block');
            return false;
        } else if (years < 0 || perMonth < 0 || interestRate < 0) {
            $('#error-message')
                .html("Please enter positive input.")
                .css('display', 'block');
            return false;
        }

        $(this).off("submit");
        this.submit();
    });

    /*
     *  investedAmount form validation
     */
    $('#investedAmount').submit(function(e) {
        e.preventDefault();

        $('#error-message').css('display', 'none');

        var years = $.trim( $('#investedAmount input[name="years"]').val() ),
            intial = $.trim( $('#investedAmount input[name="intial"]').val() ),
            interestRate = $.trim( $('#investedAmount input[name="interestRate"]').val() );

        if (years === '' || intial === '' || interestRate === '') {
            $('#error-message')
                .html("Please fill out all of the fields.")
                .css('display', 'block');
            return false;
        } else if (years < 0 || intial < 0 || interestRate < 0) {
            $('#error-message')
                .html("Please enter positive input.")
                .css('display', 'block');
            return false;
        }

        $(this).off("submit");
        this.submit();
    });

    /*
     *  loanPayoff form validation
     */
    $('#loanPayoff').submit(function(e) {
        e.preventDefault();

        $('#error-message').css('display', 'none');

        var monthlyAmount = $.trim( $('#loanPayoff input[name="monthlyAmount"]').val() ),
            loanAmount = $.trim( $('#loanPayoff input[name="loanAmount"]').val() ),
            interestRate = $.trim( $('#loanPayoff input[name="interestRate"]').val() );

        if (monthlyAmount === '' || loanAmount === '' || interestRate === '') {
            $('#error-message')
                .html("Please fill out all of the fields.")
                .css('display', 'block');
            return false;
        } else if (monthlyAmount < 0 || loanAmount < 0 || interestRate < 0) {
            $('#error-message')
                .html("Please enter positive input.")
                .css('display', 'block');
            return false;
        }

        $(this).off("submit");
        this.submit();
    });

})();
