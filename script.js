
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", addToList);

// function addToList( {
//         userInput = input.value;
// };

const btn = document.querySelector(".btn");

const input = document.querySelector("#inputTodo");

const userInput = document.createElement("p");
userInput.className = "usrer-input";
userInput.style.border = "1px solid gray";
userInput.style.borderRadius = "5px";
userInput.style.padding = "20px";

const todoOutput = document.querySelector("#todo-output");




btn.addEventListener("click", addToList);

function addToList(){
    todoOutput.appendChild("userInput");
     const userInput = input.value;


};