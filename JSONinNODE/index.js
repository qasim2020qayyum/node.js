const fs = require("fs");
const bioData= {
    name : "qasim",
    age : 25,
    work : "developer"
}

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData, (err)=>{
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log(data);
    const nodData = JSON.parse(data);
    console.log(nodData);
})