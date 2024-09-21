function calculateBMI(event) {

    event.preventDefault(); // Prevents the default form submission behavior.

    // Retrieves and converts user input values from form fields.
    let heightInputFeet = Number(document.querySelector("#heightInputFeet").value);
    let heightInputInch = Number(document.querySelector("#heightInputInch").value);
    let weightInputKg = Number(document.querySelector("#weightInputKg").value);

    // Converts height from feet and inches to inches only.
    heightInputInch += heightInputFeet * 12;

    // Converts height from inches to meters.
    let heightInMeter = (heightInputInch * 2.54) / 100;

    // Calculates the square of the height in meters.
    let heightInMeterSq = heightInMeter * heightInMeter;

    // Calculates the Body Mass Index (BMI) and rounds it to two decimal places.
    let bodyMassIndex = (weightInputKg / heightInMeterSq).toFixed(2);

    // Calculates the ideal weight based on a BMI of 22 and rounds it to two decimal places.
    let idealWeight = (22 * heightInMeterSq).toFixed(2);

    // Calculates the amount of weight to lose or gain to reach the ideal weight.
    let weightToLose = (weightInputKg - idealWeight).toFixed(2);
    let weightToGain = (idealWeight - weightInputKg).toFixed(2);

    // Initializes a variable to store the BMI category and weight advice.
    let title = "You are ";

    // Determines the BMI category and corresponding advice based on the BMI value.
    if (bodyMassIndex > 30) {
        title += `Obese. you need to lose ${weightToLose}kg`;
    }
    else if (bodyMassIndex > 25) {
        title += `Overweight. you need to lose ${weightToLose}kg`;
    }
    else if (bodyMassIndex > 18.5) {
        if (bodyMassIndex > 22) {
            // Check if the weight to lose is less than 1kg to consider "Perfectly Fit"
            if (weightToLose < 1) {
                title += `perfectly Fit`;
            } else {
                title += `Normal but optionally you may lose ${weightToLose}kg to become ideally fit`;
            }
        }
        else if (parseInt(bodyMassIndex) === 22) {
            title += `Perfectly Fit`;
        }
        else {
            // Check if the weight to gain is less than 1kg to consider "Perfectly Fit"
            if (weightToGain < 1) {
                title += `perfectly Fit`;
            } else {
                title += `Normal but optionally you may gain ${weightToGain}kg to become ideally fit`;
            }
        }
    }
    else {
        title += `Underweight you are supposed to gain ${weightToGain}kg to become normal`;
    }

    // Logs BMI index, category, and ideal weight to the console.
    console.log("BMI Index =", bodyMassIndex);
    console.log("Title =", title);
    console.log("Ideal Weight =", idealWeight + "kg");

    // Updates the HTML content with the calculated BMI index, category, and ideal weight.
    document.querySelector("#BMIIndex").innerHTML = "<span style='font-weight: bold;'> BMI Index :</span> " + bodyMassIndex;
    document.querySelector("#title").innerHTML = "<span style='font-weight: bold;'> Guide :</span> " + title;
    document.querySelector("#averageWeight").innerHTML = "<span style='font-weight: bold;'> Ideal Weight :</span> " + idealWeight;
}