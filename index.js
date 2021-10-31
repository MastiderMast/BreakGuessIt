const sendkeys = require('sendkeys')

/*
for (let i = 0; i < 100; i++) {

    sendkeys(`${i}`)
    console.log(`${i}`)

}
*/

for (let i = 0; i <= 5; i++) {
    console.log(i) 
    setTimeout(function(){ 
        console.log("Ready")
    }, 1000);
}