

/*=======================================
 Bell Notification
========================================*/

// show the notification list when the bell is clicked
let bell = document.querySelector('.bell');
let activeBell = document.querySelector('.active-bell');
let dropdownMenu = document.querySelector('.dropdown-menu');

bell.addEventListener('click', e => {
   dropdownMenu.style.display = 'block' // display drop down menu
   activeBell.style.display = 'none'; // make green dot go away

});

// hide notification list when click outside the menu
window.addEventListener('mouseup', function(event){
   if (event.target != dropdownMenu && event.target.parentNode != dropdownMenu) { 
      dropdownMenu.style.display = 'none';
   }
   

});





/*=======================================
 Alert Box
========================================*/

// Grab the div that the banner will be inside
const alertBanner = document.getElementById("alert");

// HTML for the banner
alertBanner.innerHTML = ` 
   <div class="alert">
      <p><strong>Alert:</strong> You have <strong>2</strong> unread messages! </p>
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
var labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
                 '11-17','18-24', '25-31'];


   /* Traffic options for scale starting at 0, hiding the legend */

   let trafficOptions = {
      aspectRatio: 2.5,
      animation: {
         duration: 0
      },
      scales: {
         y: {
            beginAtZero: true
         }
      },
      plugins: {
         legend: {
            display: false,
          }
      }
   };

/*
To create a chart, we first need to create an instance of the Chart().

*/


   var trafficChart = new Chart(ctx, {
    type: "line",
    data: {
       labels: labels,
       datasets: [
       {
           
           data: volume,
           lineTension: 0.3,
           fill: {
            target: 'origin',
            above: 'rgba(116, 119, 191, 0.66)',   // Area will be purple above the origin
            below: 'rgba(116, 119, 191, 0.66)'    // And lighter purple below the origin
            
          }
       }
       ]
    },
    options: trafficOptions

   });

   /* Hourly/Daily/Weekly/Monthly traffic changes */

   var hourly = document.getElementById('hourly');
   var daily = document.getElementById('daily');
   var weekly = document.getElementById('weekly');
   var monthly = document.getElementById('monthly');


   // when clicked, remove "active" class from everything except the one that was clicked
   hourly.addEventListener('click', e => {
      e.preventDefault();
      daily.classList.remove('active');
      hourly.classList.add('active');
      weekly.classList.remove('active');
      monthly.classList.remove('active');

   /* put in new traffic data */
   trafficChart.data.datasets[0].data = [999, 100, 100, 100, 100, 950, 999];
   trafficChart.data.labels = ["12-1", "1-2", "3-4", "5-6", "7-8", "9-10", "11-12"];
   trafficChart.update();

   });

   // when clicked, remove "active" class from everything except the one that was clicked
   daily.addEventListener('click', e => {
      e.preventDefault();
      daily.classList.add('active');
      hourly.classList.remove('active');
      weekly.classList.remove('active');
      monthly.classList.remove('active');
   
     /* put in new traffic data */
     trafficChart.data.datasets[0].data = [1200, 1050, 2500, 1745, 2678, 540, 80];
     trafficChart.data.labels = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
     trafficChart.update();
   
   });

   // when clicked, remove "active" class from everything except the one that was clicked
   weekly.addEventListener('click', e => {
      e.preventDefault();
      daily.classList.remove('active');
      hourly.classList.remove('active');
      weekly.classList.add('active');
      monthly.classList.remove('active');
   
     /* put in new traffic data */
     trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
     trafficChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
     '11-17','18-24', '25-31'];
     trafficChart.update();
   
   });

   // when clicked, remove "active" class from everything except the one that was clicked
   monthly.addEventListener('click', e => {
      e.preventDefault();
      daily.classList.remove('active');
      hourly.classList.remove('active');
      weekly.classList.remove('active');
      monthly.classList.add('active');
   
     /* put in new traffic data */
     trafficChart.data.datasets[0].data = [1600, 12050, 10000, 12000, 15500, 17500, 12500, 10850, 22050, 15000, 20500, 11111];
     trafficChart.data.labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug',
     'Sept','Oct', 'Nov', 'Dec'];
     trafficChart.update();
   
   });



/*=======================================
daily traffic chart
========================================*/
var trafficDaily = document.getElementById('traffic-daily-chart');
var dailyVolume = [75, 115, 175, 125, 225, 200, 100];
var days = ['Sun', 'M', 'T', 'W','Th','F','Sat'];

let dailyOptions = {
   aspectRatio: 2.5,
   animation: {
      duration: 0
   },
   scales: {
      y: {
         beginAtZero: true
      }
   },
   plugins: {
      legend: {
         display: false,
       }
   }
};


/*
To create a chart, we first need to create an instance of the Chart().

*/


   var trafficDailyChart = new Chart(trafficDaily, {
    type: "bar",
    data: {
       labels: days,
       datasets: [
       {
           
           data: dailyVolume,
           backgroundColor: '#7477BF',
           borderColor: "#FFFFFF",
           borderWidth: 1
       }
       ]
    },

   options: dailyOptions

  });


/*=======================================
Mobile User chart
========================================*/
var mobileUsers = document.getElementById('mobile-user-chart');
var mobileVolume = [2000, 550, 500];
var mobileLabels = ['Desktop', 'Tablet', 'Phones'];





const mobileOptions = {
   aspectRatio: 2.5,
   animation: {
      duration: 0
   },
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
       datasets: [
       {
           label: "Mobile Users",
           data: mobileVolume,
           backgroundColor: ['#7477BF', '#68CB88', '#00B8CB'],
           borderColor: "#FFFFFF",
           borderWidth: 1
       }
       ]
      },

      options: mobileOptions
   
     });

/*=============================================
Message User
=============================================*/

  /*===========================================================
  Template code from 
  https://www.w3schools.com/howto/howto_js_autocomplete.asp
  with minor changes.
  Autocomplete for Search User input box with 
  id="search-user"
  ============================================================*/


function autocomplete(inp, arr) {
   /*the autocomplete function takes two arguments,
   the text field element and an array of possible autocompleted values:*/
   var currentFocus;
   /*execute a function when someone writes in the text field:*/
   inp.addEventListener("input", function(e) {
       var a, b, i, val = this.value;
       /*close any already open lists of autocompleted values*/
       closeAllLists();
       if (!val) { return false;}
       currentFocus = -1;
       /*create a DIV element that will contain the items (values):*/
       a = document.createElement("DIV");
       a.setAttribute("id", this.id + "autocomplete-list");
       a.setAttribute("class", "autocomplete-items");
       /*append the DIV element as a child of the autocomplete container:*/
       this.parentNode.appendChild(a);
       /*for each item in the array...*/
       for (i = 0; i < arr.length; i++) {
         /*check if the item starts with the same letters as the text field value:*/
         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           /*create a DIV element for each matching element:*/
           b = document.createElement("DIV");
           /*make the matching letters bold:*/
           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
           b.innerHTML += arr[i].substr(val.length);
           /*insert a input field that will hold the current array item's value:*/
           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
           /*execute a function when someone clicks on the item value (DIV element):*/
           b.addEventListener("click", function(e) {
               /*insert the value for the autocomplete text field:*/
               inp.value = this.getElementsByTagName("input")[0].value;
               /*close the list of autocompleted values,
               (or any other open lists of autocompleted values:*/
               closeAllLists();
           });
           a.appendChild(b);
         }
       }
   });
   /*execute a function presses a key on the keyboard:*/
   inp.addEventListener("keydown", function(e) {
       var x = document.getElementById(this.id + "autocomplete-list");
       if (x) x = x.getElementsByTagName("div");
       if (e.keyCode == 40) {
         /*If the arrow DOWN key is pressed,
         increase the currentFocus variable:*/
         currentFocus++;
         /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 38) { //up
         /*If the arrow UP key is pressed,
         decrease the currentFocus variable:*/
         currentFocus--;
         /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 13) {
         /*If the ENTER key is pressed, prevent the form from being submitted,*/
         e.preventDefault();
         if (currentFocus > -1) {
           /*and simulate a click on the "active" item:*/
           if (x) x[currentFocus].click();
         }
       }
   });
   function addActive(x) {
     /*a function to classify an item as "active":*/
     if (!x) return false;
     /*start by removing the "active" class on all items:*/
     removeActive(x);
     if (currentFocus >= x.length) currentFocus = 0;
     if (currentFocus < 0) currentFocus = (x.length - 1);
     /*add class "autocomplete-active":*/
     x[currentFocus].classList.add("autocomplete-active");
   }
   function removeActive(x) {
     /*a function to remove the "active" class from all autocomplete items:*/
     for (var i = 0; i < x.length; i++) {
       x[i].classList.remove("autocomplete-active");
     }
   }
   function closeAllLists(elmnt) {
     /*close all autocomplete lists in the document,
     except the one passed as an argument:*/
     var x = document.getElementsByClassName("autocomplete-items");
     for (var i = 0; i < x.length; i++) {
       if (elmnt != x[i] && elmnt != inp) {
         x[i].parentNode.removeChild(x[i]);
       }
     }
   }
   /*execute a function when someone clicks in the document:*/
   document.addEventListener("click", function (e) {
       closeAllLists(e.target);
   });
 }

 var users = [
   "Victoria Chambers",
   "Dale Byrd",
   "Dawn Wood",
   "Dan Oliver"
   ];

autocomplete(document.getElementById("search-user"), users);




// make the send button create a popup or error message

function send() {

   let user = document.getElementById('search-user');
   let message = document.getElementById('message-user');

   // if message, create popup

   if (user.value === "" && message.value === "") {
         window.alert("Message not sent - Need to Select User and write a message");
      } else if (user.value === ""){
         window.alert("Message not sent - Need to Select User");
      } else if (message.value === "") {
         window.alert("Message not sent - Need to write a message");
      } else {
         window.alert("Message sent successfully!");
      }
}


/*=============================================
Settings - Toggle Switch, Timezone, Save/Cancel
=============================================*/

let email = document.getElementById('email');
let profile = document.getElementById('profile');
let timezone = document.getElementById('timezone');

// Grab each value and set it to local storage
function save(){
   localStorage.setItem('email', email.checked);
   localStorage.setItem('profile', profile.checked);
   localStorage.setItem('timezone', timezone.value);

}

// grab the values from local storage
function load(){    
   let checkedEmail = JSON.parse(localStorage.getItem('email'));
   let checkedProfile = JSON.parse(localStorage.getItem('profile'));
   let checkedTimezone = localStorage.getItem('timezone');
   document.getElementById("email").checked = checkedEmail;
   document.getElementById("profile").checked = checkedProfile;
   

   if (checkedTimezone != null) {
      document.getElementById("timezone").value = checkedTimezone;
   }
   
}

function del(){
   location.reload();
   localStorage.clear()

}
// make sure the loading function gets called
load();













