function calculateBMI(event) {

    event.preventDefault();

    let heightInputFeet = Number(document.querySelector("#heightInputFeet").value);
    let heightInputInch = Number(document.querySelector("#heightInputInch").value);
    let weightInputKg = Number(document.querySelector("#weightInputKg").value);

    heightInputInch += heightInputFeet * 12;

    let heightInMeter = (heightInputInch * 2.54) / 100;
    let heightInMeterSq = heightInMeter * heightInMeter;
    let bodyMassIndex = (weightInputKg / heightInMeterSq).toFixed(2);
    let idealWeight = (22 * heightInMeterSq).toFixed(2);

    let weightToLose = (weightInputKg - idealWeight).toFixed(2);
    let weightToGain = (idealWeight - weightInputKg).toFixed(2);

    let title = "You are ";
    if (bodyMassIndex > 30) {
        title += `Obese. you need to lose ${weightToLose}kg`;
    }
    else if (bodyMassIndex > 25) {
        title += `Overweight. you need to lose ${weightToLose}kg`;
    }
    else if (bodyMassIndex > 18.5) {
        if (bodyMassIndex > 22) {
            title += `Normal but optionally you may lose ${weightToLose}kg to become ideally fit`;
        }
        else if (parseInt(bodyMassIndex) === 22) {
            title += `perfectly Fit`;
        }
        else {
            title += `Normal but optionally you may gain ${weightToGain}kg to become ideally fit`;
        }
    }
    else {
        title += `Underweight you are supposed to gain ${weightToGain}kg to become normal`;
    }

    console.log("BMI Index =", bodyMassIndex);
    console.log("Title =", title);
    console.log("Ideal Weight =", idealWeight + "kg");
    document.querySelector("#BMIIndex").innerHTML = "<span style='font-weight: bold;'> BMI Index :</span> " + bodyMassIndex;
    document.querySelector("#title").innerHTML = "<span style='font-weight: bold;'> Guide :</span> " + title;
    document.querySelector("#averageWeight").innerHTML = "<span style='font-weight: bold;'> Ideal Weight :</span> " + idealWeight;

}