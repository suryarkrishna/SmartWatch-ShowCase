//timer
var currTime = document.getElementById('curr-time');
//funtion to update time
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');//The padStart() method is used to add leading zeros to ensure two-digit formatting.
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('curr-time').textContent = currentTime;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Call updateTime immediately to display the current time without waiting for the first interval to elapse
  updateTime();
  
//changing the image as per color selected
var imgMain = document.getElementById('img-main');
var blackImg = document.getElementById('black-color');
blackImg.addEventListener('click', function(){
    imgMain.src="assets/black.png";
})

var redImg = document.getElementById('red-color');
redImg.addEventListener('click', function(){
    imgMain.src="assets/red.png";
})

var blueImg = document.getElementById('blue-color');
blueImg.addEventListener('click', function(){
    imgMain.src="assets/blue.png";
})

var purpleImg = document.getElementById('purple-color');
purpleImg.addEventListener('click', function(){
    imgMain.src="assets/purple.png";
})



//features functionality
var timeBtn = document.getElementById('time');
timeBtn.addEventListener('click', function(){
    currTime.style.display="block";
    heartData.style.display='none';

})

var heartBtn = document.getElementById('heart-rate');
var heartData = document.getElementById('heart-data');
heartBtn.addEventListener('click', function(){
    currTime.style.display="none";
    heartData.style.display='flex';

})
