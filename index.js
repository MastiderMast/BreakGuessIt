const sendkeys = require('sendkeys')

loop();
var i = 0
function loop() {
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

  }, 3000)
}