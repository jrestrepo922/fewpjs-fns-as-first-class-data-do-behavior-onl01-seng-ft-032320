/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  timeString.split(":")[0]
  timeInt = parseInt(timeString)
  
  if (timeInt < 12) {
    
  } else if () {
    
  } else {
    
  }
}
/* Write your implementation of displayMessage() */
