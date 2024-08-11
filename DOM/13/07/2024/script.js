const inputBox = document.getElementById("tier");
const submitBtnEle = document.getElementById("submit");
const tierSection = document.querySelector(".tier-list-section");
const imageForm = document.getElementById("image-form")
const imageInputBox = document.getElementById("image-input");
const nonTierImageContainer = document.querySelector(".non-tier-section");

submitBtnEle.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBox.value == ""){
        alert("Please enter the value");
        return;
    }
    tierSection.appendChild(createTierList(inputBox.value));
    inputBox.value = "";
})

imageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const imageUrl = imageInputBox.value;
    imageInputBox.value = "";
    if(imageUrl.trim() == ""){
        alert("Please enter a valid image.")
        return;
    }
    const newImageDiv = createTierImageItem(imageUrl);
    nonTierImageContainer.appendChild(newImageDiv);

})

function createTierImageItem (txt = ""){
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("item-container");
    const img = document.createElement("img");
    img.src = txt;
    imageDiv.appendChild(img);
    return imageDiv;
}


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