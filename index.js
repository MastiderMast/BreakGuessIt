const sendkeys = require('sendkeys')
const { green, blue, yellow } = require('chalk')

console.clear()
var start = 99
var end = 1000

console.log(`${yellow("[BreakGuessIt]")} ${green(`Start counting from ${start} to ${end}`)}`)

function loop() {
    var wait = randomIntFromInterval(486, 3623)

    setTimeout(function() {
        if (start <= end) {
            loop()
            sendkeys.sync(`${start}`)
            sendkeys.sync(`{ENTER}`)
            console.log(`${yellow("[BreakGuessIt]")} ${green(`${start+"/"+end}`)} | ${blue(`Timeout: ${wait}`)}`)
        } else {
            console.log(`${yellow("[BreakGuessIt]")} ${green(`Done!`)}`)
        }

        start++
    }, wait)
}
loop()

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
