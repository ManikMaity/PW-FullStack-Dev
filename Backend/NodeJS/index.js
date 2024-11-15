const linearSearch = require("./commonJsModule");
const { binarySearch } = require("./commonJsModule");
const fs = require("fs");
const os = require("os");

let dataObj = [];
// fs.readFile("data.json", "utf8", (err, data) => {
//     dataObj = JSON.parse(data);
//     console.log(dataObj)
//     dataObj.push({name : "Swapan Maity", email : "swapan@gmail.com"})
//     fs.writeFile("data.json", JSON.stringify(dataObj, null, 2), (err) => {
//         if (err) {
//             console.log(err);
//         }
//     })
// })

console.log(os);

// fs.readFile("image.png", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

