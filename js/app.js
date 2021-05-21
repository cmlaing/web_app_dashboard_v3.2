


/*
Sample traffic chart
*/
var ctx = document.getElementById('traffic-chart');
var volume = [600, 1300, 1000, 2000, 1500, 1700, 1200, 1900, 2300, 1500, 2500];
var frameworks = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
                 '11-17','18-24', '25-31'];

/*
To create a chart, we first need to create an instance of the Chart().

To create an instance, you need to call the new Chart(), so type the following code:
*/


var trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'Traffic',
           data: volume
           }]
    },
   });


