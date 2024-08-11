const inputBox = document.getElementById("tier");
const submitBtnEle = document.getElementById("submit");
const tierSection = document.querySelector(".tier-list-section");

submitBtnEle.addEventListener("click", (e) => {
    if (inputBox.value == ""){
        alert("Please enter the value");
        return;
    }
    e.preventDefault();
    tierSection.appendChild(createTierList(inputBox.value));
    inputBox.value = "";
})


function createTierList (txt = ""){
    const newTierList = document.createElement("div");
    newTierList.classList.add("tier-list");

    const heading = document.createElement("h1");
    heading.textContent = txt;

    const tierListItem = document.createElement("div");
    tierListItem.classList.add("tier-list-items");

    newTierList.appendChild(heading);
    newTierList.appendChild(tierListItem);

    return newTierList;
}