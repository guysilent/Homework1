let length = 10;
let max = 10;
let charts = ['bar', 'radar', 'pie',  'polarArea', 'bubble'];
let currentChart = 0;

// create simple lables
let labels = [];
for (let i = 0; i < length; i++) {
    labels.push(i + 1);
}

// create random colors - this is in a separate for loop just for readability
let colors = [];
for (let i = 0; i < length; i++) {
    colors.push(`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.4)`);
}

let randomArray = Array.from({length: max}, () => Math.floor(Math.random() * max));



let button = document.getElementById("Button");

button.addEventListener('click', changeChartType)



changeChartType();
function changeChartType() {
    let currentCanvas = document.getElementById("myChart");
    if (currentCanvas != null){
        currentCanvas.remove();
    }
    
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'myChart');
    document.body.insertBefore(canvas, document.getElementById('buttonDiv'));
    let context = document.getElementById("myChart");
    let myChart = new Chart(context, {
        type: charts[currentChart],
        data: {
            labels: labels,
            datasets: [{
                data: randomArray,
                backgroundColor: colors,
                borderWidth: 2
            }]
    
        },
        options: {
            legend: {display: false}
        }
    });

    currentChart = (currentChart + 1) % 5;
}



