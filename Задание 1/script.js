let userName;
let names;

function checkName() {
    userName = document.getElementById('field').value;

    let userName1 = userName.trim();

    let arrOfName = userName1.split(" ");

    // for (let names of arrOfName) {     моя первоначальная версия для своего же ревью)
    //     names = names.toLowerCase(); 
    //     names = names[0].toUpperCase() + names.slice(1);
    //     console.log(names);
    // }

    for(let i = 0; i< arrOfName.length; i++){
        arrOfName[i] = arrOfName[i][0].toUpperCase() + arrOfName[i].slice(1).toLowerCase();
    }

    console.log(arrOfName);

    document.getElementById('surname').value = arrOfName[0];
    document.getElementById('name').value = arrOfName[1];
    document.getElementById('second-name').value = arrOfName[2];
}



