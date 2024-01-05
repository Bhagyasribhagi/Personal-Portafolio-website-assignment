let saveButton = document.getElementById("saveButton");

let textareaE = document.getElementById("message");
//let enterdText=document.getElementById("text");
let projectName=document.getElementById("name");
let projectLink=document.getElementById("link");

let pNameE=document.getElementById("pname");
let pLinkE=document.getElementById("plink");
let pmsgE=document.getElementById("pmsg");

saveButton.onclick = function() {
    let userEnterText = textareaE.value;
    let userProjectName=projectName.value;
    let userProjectLink=projectLink.value;
    localStorage.setItem("userEnterText", userEnterText);
    localStorage.setItem("userProjectName", userProjectName);
    localStorage.setItem("userProjectLink", userProjectLink);
}

let storedUserText = localStorage.getItem("userEnterText");
let storedUserProjectName = localStorage.getItem("userProjectName");
let storedUserProjectLink = localStorage.getItem("userProjectLink");
console.log(storedUserText)

pNameE.textContent=storedUserProjectName;
pLinkE.textContent=storedUserProjectLink;
pmsgE.textContent=storedUserText;

if (storedUserText === null) {
    textareaE.value = "";

} else {
    textareaE.value = storedUserText;
}