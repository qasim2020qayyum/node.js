const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayName", ()=>{
    console.log("qasim");
})


event.on("checkPage", (sc, msg)=> {
    console.log(`status code is ${sc} and the page is ${msg} `);
})


event.emit("sayName")
event.emit("checkPage", 200, "ok")
