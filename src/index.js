// https://mathjs.org/docs/getting_started.html
// Import the required functions from the Math.JS library
const math = require('mathjs')

// Call the match funtion passing in the expression from FileMaker

window.callMath = function (json) {
  const obj = JSON.parse(json);
  const expression = obj.expression;

  const result = math.evaluate(expression);

  // Debug: Eitehr an alert or console.log the result of teh expression
  // alert(result)
  // console.log (result)

  // Pass back the result to FileMaker
  FileMaker.PerformScript ( "set Result" , JSON.stringify ( result ) ) ;
  document.write ( 'Result:<br>' + result)

}