var btn = document.getElementById('time');
var timeTorRun=document.getElementById('time-to-run');
var displayTime=document.getElementById('display-time');

//When clicking the button , a counter will be shown, when reached the provided time
//open an alert box.
btn.addEventListener('click', function(){
    var counter = 0;
    var timer = setInterval(function(){
        counter++;
        displayTime.innerHTML = counter;
        if(counter == timeTorRun.value){
            clearInterval(timer);
            alert('Time is up!');
        }
    }, 1000);
}, false);

