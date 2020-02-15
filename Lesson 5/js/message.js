var today = new Date();
var date = today.getDay();
var sat = "Saturday = Preston Pancakes in the Park!  9:00 a\.m\. Saturday at the city park pavilion\.";
if (date == 6){
    document.getElementById("msg").textContent = sat;
}
