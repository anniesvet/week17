// function checkSpam() {
// let comment = document.getElementById('comment').value;
// let lowerString = comment.toLowerCase();

// let srtringChanged = lowerString.replace(/xxx|viagra/g, "***");
// console.log(srtringChanged);

// document.getElementById('message').innerHTML = srtringChanged;
// }

document.addEventListener("DOMContentLoaded", function(event) {
    let name = localStorage.getItem("name");
    if(name != null) {
        document.getElementById("name").value = name;
    }
});

comment.value = localStorage.getItem('comment');
    comment.oninput = () => {
    localStorage.setItem('comment', comment.value)
    };

function sendMessage (author, comment) {
    document.getElementById("chat").innerHTML = author + ': ' + comment;
}

function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;

    if(localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }

    sendMessage(author, comment);
}

