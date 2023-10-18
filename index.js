const incrementCounter = () => {
    let value = document.getElementById("counter").innerText; // 0
    let parsedValue = parseInt(value);
    parsedValue++; // integer
    document.getElementById("counter").innerText = parsedValue.toString();
}


const  decrementCounter = () => {
    let value = document.getElementById("counter").innerText; // 0
    let parsedValue = parseInt(value);
    parsedValue--; // integer
    document.getElementById("counter").innerText = parsedValue.toString();
}


// ES6 Features
// Arrow Functions

// const incCounter = () => {

// }




document.getElementById("incBtn").addEventListener("click" , incrementCounter);
document.getElementById("decBtn").addEventListener("click" , decrementCounter);