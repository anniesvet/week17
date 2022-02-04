function checkSpam() {
let comment = document.getElementById('comment').value;
let lowerString = comment.toLowerCase();

if(lowerString.includes('viagra')){
    let changeViagra = lowerString.replace('viagra', "***");
    console.log(changeViagra);
} else if (lowerString.includes('xxx')) {
    let changeXxx = lowerString.replace('xxx', "***");
    console.log(changeXxx);
} else console.log(lowerString);
}
console.log(checkSpam());







