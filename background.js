
var width = window.innerWidth;
var height = window.innerHeight;
let testCharWidth = 0;
let testCharHeight = 0;
let bgDiv = null;
let index = 0;
window.addEventListener("load", () => {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// Calculate the area of the webpage
var webpageArea = width * height;

// Create a test character
var testChar = document.createElement('span');
testChar.innerHTML = 'A';
testChar.style.fontFamily = 'monospace';
testChar.style.fontSize = '15px';
document.body.appendChild(testChar);

// Measure the dimensions of the test character
testCharWidth = testChar.offsetWidth;
testCharHeight = testChar.offsetHeight;

// Calculate the average area taken up by a character
var avgCharArea = (testCharWidth * testCharHeight) / 1;

// Remove the test character
document.body.removeChild(testChar);

// Calculate the number of characters needed to fill the webpage
var numChars = Math.ceil(webpageArea / avgCharArea);    var randomstring = '';

    for (var i = 0; i < numChars; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }

    // Create a new div element
    bgDiv = document.createElement('div');
    bgDiv.style.position = 'fixed';
    bgDiv.style.top = 0;
    bgDiv.style.left = 0;
    bgDiv.style.width = '100%';
    bgDiv.style.height = '100%';
    bgDiv.style.overflow = 'hidden';
    bgDiv.style.zIndex = -1;
    bgDiv.style.pointerEvents = 'none';
    bgDiv.style.whiteSpace = 'pre-wrap'; // Allow the text to wrap
    bgDiv.style.wordWrap = 'break-word'; // Break long words to prevent overflow
    bgDiv.style.fontFamily = 'monospace';
    bgDiv.style.backgroundColor = '#fff';
    bgDiv.style.opacity = 1;
    bgDiv.innerText = randomstring;
    bgDiv.style.fontSize = '15px';
    bgDiv.style.fontFamily = 'monospace';
    bgDiv.style.backgroundColor = '#000000';
    //bgDiv.style.color = '#333333';
    bgDiv.style.color = 'rgba(18,244,176,1)';
    bgDiv.style.opacity = 0.25;

    // Add the div to the body
    document.body.appendChild(bgDiv);


    function generateRandomString() {
        var randomstring = '';
        for (var i = 0; i < numChars; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.charAt(rnum);
        }
        

        bgDiv.innerHTML = randomstring;
    }
    
    // Update the random string every 20 milliseconds
    setInterval(generateRandomString, 75);
});

