let length = 10;
let max = 500;


let randomArray = Array.from({length: max}, () => Math.floor(Math.random() * max));

let outerDiv = document.createElement("div");
outerDiv.setAttribute("id", "outerDiv");
document.body.appendChild(outerDiv);
let barWidth = Math.round((window.innerWidth - 50) / length);

for (let i = 0; i < length; i++){
    let iterationDiv = document.createElement("div");
    iterationDiv.setAttribute("id", "innerBar");
    iterationDiv.setAttribute("style", "width:" + 800 / length + "px;" + "height:" + randomArray[i] + "px;" + "max-width:" + barWidth + "px;" + "overflow:hidden;");
    iterationDiv.style.left = (800 / length * i) + "px";
    outerDiv.appendChild(iterationDiv);
}





