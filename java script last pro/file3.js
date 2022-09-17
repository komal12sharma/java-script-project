// // synchrononus programming
console.log("script start");
for (let i = 1; i < 10000; i++) {
    console.log("inside for loop");
}
console.log("script end");
// settimeout
console.log("script start");
function hello() {
    console.log("hello world !")
}
setTimeout(hello, 1000);
console.log("script end");

console.log("hey");
setTimeout(() => {
    console.log("inside settimeout");
}, 0);

for (let i = 1; i < 10000; i++) {
    console.log("....")
}
console.log("script end");

// setInterval
console.log("script start");
setInterval(() => {
    console.log(Math.random());
}, 1000);
console.log("script end");
const body = document.body;
const button = document.querySelector("button");
// console.log(button);
const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red},${green}, ${blue})`;
    body.style.background = rgb;
}, 1000);
button.addEventListener("click", () => {
    clearInterval(intervalId);
    button.textContent = body.style.background;
});
console.log(intervalId);