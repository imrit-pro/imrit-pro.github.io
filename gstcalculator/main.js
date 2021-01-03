function calculate() {
  var rate = document.getElementById('rate').value;
  var qty = document.getElementById('qty').value;
  var gstPercentage = document.getElementById('gstPercentage').value;

// calculate gst output
  var output = 0;

switch (gstPercentage) {
  case "0%":
    output = rate * qty; //material value
    var percentage = 0;
    percentage = output * 0; //percentage calculation
    var gstOutput = output + percentage; //gst output
    break;

  case "12%":
      output = rate * qty;
      var percentage = 0;
      percentage = output * 0.12;
      var gstOutput = output + percentage;
      break;

  case "18%":
    output = rate * qty;
    var percentage = 0;
    percentage = output * 0.18;
    var gstOutput = output + percentage;
    break;

  case "28%":
    output = rate * qty;
    var percentage = 0;
    percentage = output * 28/100;
    var gstOutput = output + percentage;
    break; 
}
  
//eror text display  
  var text = " (Included " + gstPercentage + " Gst)";

  if (gstOutput == 0) {
    text = " (Enter Value Properly )";
  };

//background apply
  var background = document.getElementById('output')
  background.style.display = "block";
  
//output value's
  document.getElementById('output_1').innerHTML = "Value of Material : " + output;
  document.getElementById('output_2').innerHTML = "GST Value : " + percentage;
  document.getElementById('output_3').innerHTML= "Value with GST Calculation : " + gstOutput + text;
  
}
  
