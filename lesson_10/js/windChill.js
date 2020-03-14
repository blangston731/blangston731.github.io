let s = parseFloat(document.getElementById("speed").textContent);
let t = parseFloat(document.getElementById("temp1").textContent);

if (t < 50 || s > 3) {
    document.getElementById("chill").textContent = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16)).toFixed(1);;
} else {
    document.getElementById("chill").textContent = "N\/A";
}