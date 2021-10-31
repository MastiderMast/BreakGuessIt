const sendkeys = require('sendkeys')

loop();
var i = 0
function loop() {

    var wait = randomIntFromInterval(486, 2623)
    console.log(wait)

    setTimeout(function() {

        console.log(i);
        
        if (i <= 10) {
          loop();
          sendkeys.sync(`{ENTER}`)
          sendkeys.sync(`${i}`)
        }else {
            console.log("DONE")
        }

    i++;
  }, wait)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}