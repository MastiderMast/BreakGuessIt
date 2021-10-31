const sendkeys = require('sendkeys')
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');

console.clear()
loop();
var start = 99
var end = 1000

console.log(`${yellow("[BreakGuessIt]")} ${green(`Start counting from ${start} to ${end}`)}`);

function loop() {

    var wait = randomIntFromInterval(486, 3623)

    setTimeout(function() {
      if (start <= end) {
        loop();
        sendkeys.sync(`${start}`)
        sendkeys.sync(`{ENTER}`)
        console.log(`${yellow("[BreakGuessIt]")} ${green(`${start+"/"+end}`)} | ${blue(`Timeout: ${wait}`)}`);
      }else {
        console.log(`${yellow("[BreakGuessIt]")} ${green(`Done!`)}`);
      }

      start++;
  }, wait)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}