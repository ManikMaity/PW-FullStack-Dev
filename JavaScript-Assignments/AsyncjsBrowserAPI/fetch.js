const url = "https://cat-fact.herokuapp.com/facts";
const text = document.getElementById("text");
const btn = document.getElementById("getFactBtn");
let count = 0;

async function getFacts (){
    console.log("getting data ...")
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    text.innerText = data[count].text;
    count++; 
}


// function getFacts(){
//     fetch(url).then((res) =>{
//         return res.json();
//     }).then((data) =>{
//         text.innerHTML = data[count].text;
//     })
// }
btn.addEventListener("click", getFacts);
