
/*=======================================
 Alert Box
========================================*/

// Grab the div that the banner will be inside
const alertBanner = document.getElementById("alert");

// HTML for the banner
alertBanner.innerHTML = ` 
   <div class="alert">
      <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks 
      to complete </p>
      <p class="alert-banner-close">x</p>
   </div>
`;
// make the X button close the banner when clicked
alertBanner.addEventListener('click', e => {
   const element = e.target;
   if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = 'none'
   }

});

/*=======================================
 traffic chart
========================================*/
var ctx = document.getElementById('traffic-chart');
var volume = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
var dates = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
                 '11-17','18-24', '25-31'];

/*
To create a chart, we first need to create an instance of the Chart().

*/


   var trafficChart = new Chart(ctx, {
    type: "line",
    data: {
       labels: dates,
       datasets: [
       {
           label: "Traffic",
           data: volume,
           lineTension: 0.3,
           fill: {
            target: 'origin',
            above: 'rgba(116, 119, 191, 0.66)',   // Area will be purple above the origin
            below: 'rgba(116, 119, 191, 0.66)'    // And lighter purple below the origin
            
          }
       }
       ]
    }

    
    
   });

/*=======================================
daily traffic chart
========================================*/
var trafficDaily = document.getElementById('traffic-daily-chart');
var dailyVolume = [75, 115, 175, 125, 225, 200, 100];
var days = ['Sun', 'M', 'T', 'W','Th','F','Sat'];

/*
To create a chart, we first need to create an instance of the Chart().

*/


   var trafficDailyChart = new Chart(trafficDaily, {
    type: "bar",
    data: {
       labels: days,
       datasets: [
       {
           label: "Traffic",
           data: dailyVolume,
           backgroundColor: '#7477BF',
           borderColor: "rgba(255, 99, 132, 1)",
           borderWidth: 1
       }
       ]
    }
    
   });

/*=======================================
Mobile User chart
========================================*/
var mobileUsers = document.getElementById('mobile-user-chart');
var mobileVolume = [2000, 550, 500];
var mobileLabels = ['Desktop', 'Tablet', 'Phones'];




const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
                    }
                 }
            }
    };


   var mobileUsersChart = new Chart(mobileUsers, {
    type: "doughnut",
    data: {
       labels: mobileLabels,
       options: mobileOptions,
       datasets: [
       {
           label: "Mobile Users",
           data: mobileVolume,
           backgroundColor: ['#7477BF', '#FF66FF', '#FCB233'],
           borderColor: "rgba(255, 99, 132, 1)",
           borderWidth: 1
       }
       ]
    }
    
    
   });















