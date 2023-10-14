document.getElementById("convertBtn").addEventListener("click", function () {
    let temperatureInput = document.getElementById("temperature").value;
     const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemperature;
  
    
    if (fromUnit == "celsius") {
      if (toUnit == "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
      } else if (toUnit == "kelvin") {
        convertedTemperature = temperatureInput + 273.15;
      } else {
        convertedTemperature = temperatureInput;
      }
    } else if (fromUnit == "fahrenheit") {
      if (toUnit == "celsius") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
      } else if (toUnit == "kelvin") {
        convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
      } else {
        convertedTemperature = temperatureInput;
      }
    } else if (fromUnit == "kelvin") {
      if (toUnit == "celsius") {
        convertedTemperature = temperatureInput - 273.15;
      } else if (toUnit == "fahrenheit") {
        convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
      } else {
        convertedTemperature = temperatureInput;
      }
    }
    console.log(convertedTemperature)
  
const resultElement = document.getElementById("result");
if (resultElement) {
  resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}

  });
  