const sendkeys = require('sendkeys')

/*
for (let i = 0; i < 100; i++) {

    sendkeys(`${i}`)
    console.log(`${i}`)

}
*/

loop();

function loop(start, end) {
  setTimeout(function() {
    console.log(i);
    i++;
    if (i <= 10) {
      loop();
    }
  }, 3000)
}