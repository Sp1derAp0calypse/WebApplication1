$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = 30;  // Price per hour

        // Validation: Ensure hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            $("#total").val("");  // Clear total if invalid input
            return;
        }

        let total = hours * rate;
        $("#total").val("$" + total.toFixed(2));  // Show total with 2 decimal places
    });
});
