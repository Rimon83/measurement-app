
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

  const unit1 = document.getElementById("unit1");
  const valueUnit = document.getElementById("valueUnit");
  const unit2 = document.getElementById("unit2");
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const restBtn = document.getElementById("restBtn");

  let fromUnit;
  let unitValue;
  let toUnit;
  let convertResult;
  let functionReturn;

  // change the opposite option automatically for select 1
  unit1.addEventListener("change", function () {
    if (unit1.value === unit2[0].value) {
      unit2.value = unit2[1].value;
    } else {
      unit2.value = unit2[0].value;
    }
  });

  // change the opposite option automatically for select 2
  unit2.addEventListener("change", function () {
    if (unit2.value === unit1[0].value) {
      unit1.value = unit1[1].value;
    } else {
      unit1.value = unit1[0].value;
    }
  });

  // rest the input value and result
  restBtn.addEventListener("click", function(){
   valueUnit.value = "";
   result.innerHTML = "0.00"

  })

  // add event listener to button
  button.addEventListener("click", function (event) {
    event.preventDefault();
    fromUnit = unit1.value;
    unitValue = valueUnit.value;
    toUnit = unit2.value;

    if (unitValue === "") {
      valueUnit.classList.add("inValidate");
    } else {
      valueUnit.classList.remove("inValidate");
      convertResult = functionReturn(fromUnit, toUnit, unitValue);
      result.innerHTML = `${unitValue} ${fromUnit} = ${convertResult} ${toUnit}`;
    }
  });

  // function to calculate weight, distance and temperature
  functionReturn = (fromUnit, toUnit, unitValue) => {
    let valuesToArray = unitValue.split(" ");
    let result = "";

    // Conversion from bounds to kilograms
    if (fromUnit === "bound" && toUnit === "kilogram") {
      valuesToArray.forEach(function (value) {
        result += (value / 2.2046).toFixed(2) + " ";
      });
      return result;
    }
    // Conversion from kilograms to pounds
    else if (fromUnit === "kilogram" && toUnit === "bound") {
      valuesToArray.forEach(function (value) {
        result += (value * 2.2046).toFixed(2) + " ";
      });
      return result;
    }

    // conversion from Fahrenheit to Celsius
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      valuesToArray.forEach(function (value) {
        result += ((value - 32) * (5/9)).toFixed(2) + " ";
      });
      return result;
    }

    // conversion from celsius to fahrenheit
    else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      valuesToArray.forEach(function (value) {
        result += ((value * (9/5)) + 32).toFixed(2) + " ";
      });
      return result;
    }

    // Conversion from miles to kilometers
    else if (fromUnit === "mile" && toUnit === "kilometer") {
      valuesToArray.forEach(function (value) {
      result += (value * 1.609).toFixed(2) + " ";
      })
      return result;
    } 
    
    // Conversion from kilometers to miles
    else if (fromUnit === "kilometer" && toUnit === "mile") {
     valuesToArray.forEach(function (value) {
       result += (value / 1.609).toFixed(2) + " ";
     });
     return result;
    }
  };
});
