// Based on http://thecodeplayer.com/walkthrough/javascript-color-clock
// And: https://codepen.io/fabienb/pen/EcKps


// Display date, hour, minutes, seconds, hex colour
var clockDate;
var clockMinutes;
var clockHour;
var clockSeconds;
var clockColour;
var clockColourPure;

// Get the current hour, minutes, seconds
function showTime() {
	clockDate = new Date(); 
		clockHour = clockDate.getHours();
		clockMinutes = clockDate.getMinutes();
		clockSeconds = clockDate.getSeconds();
	
// Display 24-hour clock: precede single-digit hour, minute or second with 0.
	if (clockHour <= 9) clockHour = '0' + clockHour;
	if (clockMinutes <= 9) clockMinutes = '0'+ clockMinutes;
	if (clockSeconds <= 9) clockSeconds = '0' + clockSeconds;
	
// Append hex symbol to hours, minutes and seconds
	clockColour = '#' + clockHour + ':' + clockMinutes + ':' + clockSeconds;

// Remove colons to display the corresponding hex colour in the body background.
	clockColourPure = clockColour.replace(/:/g, '');
	

// Display the hex colour in the clockface
	document.getElementById('hex').style.backgroundColor = clockColourPure;
	document.getElementById('hex-container').style.backgroundColor = clockColourPure;

// Display the current time on clock-face
	document.getElementById('hex').innerHTML = clockColour;
	
// Call the function once per second to update clock and colour
	setTimeout(showTime, 1000);
}

// Call the showTime function
showTime();