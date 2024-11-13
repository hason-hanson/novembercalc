document.getElementById("button").addEventListener("click", calculate);

// Store code in a function

function calculate() {

  //Input - Get user input

  let day = +document.getElementById("day").value;
  let hour = +document.getElementById("hour").value;
  let minute = +document.getElementById("minute").value;

  //Process - Calculate

    let fulldayspassed = day-1;
  
    let hours = fulldayspassed * 24;

    let hourspassedtoday = hour;

    let minutespassedtoday = minute/60;
 


    let decimals1 = hours +hourspassedtoday +minutespassedtoday;

    let decimal = decimals1/720;

    let percentage = (decimal * 100).toFixed(2);

    let novhour = (percentage/100) * 24;

    let nearesthour = Math.floor(novhour);  
 
    let decimalminute = novhour-nearesthour; 
                                                                                                                    
    let novminute = decimalminute*60;
  
    let nearestminute = Math.floor(novminute)
 
    
    let message1 = `We are ${percentage}% done November.`;
    let message2 = `If November was one day, we would be at ${nearesthour}:${nearestminute.toString().padStart(2, '0')}.`;

 
  //Output

  document.getElementById("message1").innerHTML = message1;
  document.getElementById("message2").innerHTML = message2;
}