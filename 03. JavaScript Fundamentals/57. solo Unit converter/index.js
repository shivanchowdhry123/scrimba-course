const convertBtn = document.getElementById("convert-btn");
const inputVal = document.getElementById("input-val");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const METER_TO_FEET = 3.28084;
const LITER_TO_GALLON = 0.264172;
const KILO_TO_POUND = 2.20462;

convertBtn.addEventListener("click", function () {
    const val = Number(inputVal.value);

    // Length
    const feet = (val * METER_TO_FEET).toFixed(3);
    const meters = (val / METER_TO_FEET).toFixed(3);
    lengthEl.textContent = `${val} meters = ${feet} feet | ${val} feet = ${meters} meters`;

    // Volume
    const gallons = (val * LITER_TO_GALLON).toFixed(3);
    const liters = (val / LITER_TO_GALLON).toFixed(3);
    volumeEl.textContent = `${val} liters = ${gallons} gallons | ${val} gallons = ${liters} liters`;

    // Mass
    const pounds = (val * KILO_TO_POUND).toFixed(3);
    const kilos = (val / KILO_TO_POUND).toFixed(3);
    massEl.textContent = `${val} kilos = ${pounds} pounds | ${val} pounds = ${kilos} kilos`;
});