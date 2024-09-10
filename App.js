function calculateBMI(event) {

    event.preventDefault();

    let heightInputFeet = Number(document.querySelector("#heightInputFeet").value);
    let heightInputInch = Number(document.querySelector("#heightInputInch").value);
    let weightInputKg = Number(document.querySelector("#weightInputKg").value);

    heightInputInch += heightInputFeet * 12;

    let heightInCm = heightInputInch * 2.54;

}