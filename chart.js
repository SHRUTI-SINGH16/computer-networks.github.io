
function binaryinput(){
    var chartss = document.getElementById("line-chart");
    var x = document.getElementById("input").value;
    
    var binput = [];
    var xaxis = [];
    for(var i=0;i<x.length;i++){
        binput.push(x[i]);
    }
    binput.push(binput[binput.length-1]); 

    var int = binput.length-1; 
    for(var j=0;j<int+1;j++){
        xaxis.push(j);
    }
    
    var lineChart = new Chart(chartss, {
        type: 'line',
        data: {
            labels: xaxis,
            datasets: [
                {
                    steppedLine: true,
                    label: "Unipolar",
                    data: binput,
                    fill: false,
                    borderColor: "#1f733e",
                    backgroundColor: "#1f733e",
                }
            ]
        },
        options: {
            scales:{
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin:0,
                        suggestedMax:2
                    }
                }]
            }
        }
    });
}