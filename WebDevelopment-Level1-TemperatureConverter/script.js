function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let converted;
    
    if (unit === "celsius") {
        const fahrenheit = (temperature * 9 / 5) + 32;
        const kelvin = temperature + 273.15;

        converted =
            `${temperature} °C = ${fahrenheit.toFixed(2)} °F = ${kelvin.toFixed(2)} K`;

    } else if (unit === "fahrenheit") {
        const celsius = (temperature - 32) * 5 / 9;
        const kelvin = celsius + 273.15;

        converted =
            `${temperature} °F = ${celsius.toFixed(2)} °C = ${kelvin.toFixed(2)} K`;

    } else if (unit === "kelvin") {
        const celsius = temperature - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

        converted =
            `${temperature} K = ${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`;
    }

    result.textContent = converted;
}