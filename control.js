let display = document.querySelector("#display");
let inputBox = document.querySelector("#input-box");
let updateButton = document.querySelector("#update-button");
display.innerHTML ="Hi";
updateButton.innerHTML ="Go";

// function
let hello = () => {
    console.log("hello")
}


// calling function also known as invoking function
hello();
hello();
hello();
hello();


let changeDisplayText = ()=> {
    display.innerHTML = "hello123"
}

// setTimeout(changeDisplayText,10000)

updateButton.addEventListener("click", changeDisplayText);

// updateButton.addEventListener("click",()=>{
//     display.innerHTML = inputBox.value
// });