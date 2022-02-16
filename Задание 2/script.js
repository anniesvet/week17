function checkSpam() {
let comment = document.getElementById('comment').value;
let lowerString = comment.toLowerCase();

let srtringChanged = lowerString.replace(/xxx|viagra/g, "***");
console.log(srtringChanged);

document.getElementById('message').innerHTML = srtringChanged;
}










