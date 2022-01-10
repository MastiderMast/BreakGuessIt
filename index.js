const sendkeys = require('sendkeys')
const { green, blue, yellow } = require('chalk')

console.clear()
var start = 1
var end = 100

console.log(`${yellow("[BreakGuessIt]")} ${green(`Start counting from ${start} to ${end}`)}`)

function loop() {
    var wait = randomIntFromInterval(486, 3623)

    setTimeout(function() {
        if (start <= end) {
            loop()
            sendkeys.sync(`${start}`)
            sendkeys.sync(`{ENTER}`)

            var percent = (start / end) * 100 
            var newpercent = Math.round((percent + Number.EPSILON) * 100) / 100

            console.log(`${yellow("[BreakGuessIt]")} ${green(`${start+"/"+end+" "+Math.round(newpercent)+"%"}`)} | ${blue(`Timeout: ${wait}`)}`)
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
