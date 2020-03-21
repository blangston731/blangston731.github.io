var d = new Date();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var n = weekday[d.getDay()];

for (let i = 0; i < weekday.length; i++) {
    document.getElementById(`day${i+1}`).textContent = n;
}