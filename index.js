/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
 hourStr =  timeString.split(":")[0]
 
  hourInt = parseInt(hourStr)
  
  if (hourInt < 12) {
    return "Good Morning"
  } else if (hourInt > 12 && hourInt < 17) {
    return "Good Afternoon"
  } else {
    
  }
}
/* Write your implementation of displayMessage() */
