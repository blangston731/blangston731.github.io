let s = parseFloat(document.getElementById("speed").textContent); 
let t = parseFloat(document.getElementById("temp").textContent);
let none = "N\/A";
let equation = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16)).toFixed(1);

if (t > 50 || s < 3){
document.getElementById("chill").textContent = none;
}
else {
    document.getElementById("chill").textContent = equation;
}