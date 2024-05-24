//Klavyeden girilen bir sayinin faktoriyelini hesaplayiniz
/* let value = parseInt(prompt("Sayi giriniz"))
let fakt = 1;
for (let i = 1; i <= value; i++) {
    fakt *= i;
}

alert(`${value}! = ${fakt}`); */



/* Asagida tamm verilen f(x, y) fonksiyonunu klavyeden girilen x ve y degerleri için
hesaplayintz.
    x > 0, y‹0 ise f(x, y) = 4x + 2y + 4
x›0, y = 0ise f(x, y) = 2x - y + 3
x < 0, y›0 ise f(x, y) = 3x + 4y + 3 */

/* let x = parseInt(prompt("X degerini giriniz"));
let y = parseInt(prompt("Y degerini giriniz"));
let sonuc;
if (x > 0 && y < 0) {
    sonuc = 4 * x + 2 * y + 4;
} else if (x > 0 && y == 0) {
    sonuc = 2 * x - y + 3;
} else if (x < 0 && y > 0) {
    sonuc = 3 * x + 4 * y + 3;
}
console.log(sonuc);
 */

// 100Lük sistende verilen notlar harfli sistende gösteren bir uygulama yaz171z.
/* let point = parseInt(prompt("Notunuzu giriniz"));
let pointTenSystem = parseInt(point / 10);


switch (pointTenSystem) {
    case 10: console.log("AA"); break;
    case 9: console.log("AA"); break;
    case 8: console.log("BA"); break;
    case 7: console.log("BB"); break;
    case 6: console.log("CB"); break;
    case 5: console.log("CC"); break;
    default: console.log("Gecemediniz"); break;
}
 */
//  Carpim tablosunu olusturan bir uygulama yazzz.
/* let text = ""
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        text += `${i} X ${j} = ${i * j} ${"\t"}`
    }
    text += `\n`
}
console.log(text); */


/* let persons = [
    { name: "Elif", id: 11 },
    { name: "Marali", id: 22 },
    { name: "Yunus", id: 33 },
    { name: "Emre", id: 44 }
]

const sonuc = persons.find((person) => person.id == 11)
console.log(sonuc); */

//call,apply,bind
/*
function hello() {
    console.log(`Hello ${this.name} ${this.age}`);
}

let obj = { name: "Elif", age: 21 };
hello.call(obj); */


//filter
/* const persons = [
    { name: "Elif", surname: "Marali", age: 21 },
    { name: "Yunus Emre", surname: "Kupucu", age: 22 },
    { name: "Tolgahan", surname: "Marali", age: 28 }
]

const result = persons.filter((person) => person.surname == "Marali");
console.log(result); */

/* 
console.log("1. log");

function promiseFunc(text) {
    return new Promise((resolve, reject) => {
        let result = true;
        if (result) {
            resolve(text);
        } else {
            reject(new Error("Hata alindi"))
        }
    })
}

promiseFunc("2. log").then((pr) => console.log(pr)).catch((err) => console.log(err));


console.log("3. log"); */


/* console.log("İşlem 1 başladı.");

setTimeout(() => {
    console.log("Asenkron işlem tamamlandı.");
}, 2000);

console.log("İşlem 2 devam ediyor."); */


/* function fetchData() {
    return new Promise((resolve, reject) => {
        let data = "Eld";
        if (data) {
            resolve(data);
        } else {
            reject(new Error("Hataaa"))
        }
    })
}

fetchData().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


function getData(text) {
    return new Promise((resolve, reject) => {
        if (text) {
            resolve(text);
        } else {
            reject("hataaa")
        }
    })
}

getData("1. log")
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })


getData("2. log")
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

getData("3. log")
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })


Promise.all([
    getData("1.log"), getData("2.log"), getData("3.log"),
]).then((data) => {
    for (let i of data) {
        console.log(i);
    }
}).catch((err) => console.log(err)); */

/* 
const getUser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

getUser() */
/* 
const kutuDom = document.getElementById("kutu");
kutuDom.addEventListener("mouseover", () => {
    kutuDom.textContent = "uzerindeyim";
    kutuDom.style.backgroundColor = "red";

})
kutuDom.addEventListener("mouseout", () => {
    kutuDom.textContent = "uzerime gel";
    kutuDom.style.backgroundColor = "white";
})

const input = document.getElementById("isim");
const sonuc = document.getElementById("sonuc");
input.addEventListener("input", () => {
    sonuc.textContent = "Merhaba" + input.value;
})

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ad = form.elements.ad.value;
    const email = form.elements.email.value;
    alert(ad + " " + email)
});

const addElement = () => {
    const listDom = document.getElementById("list");
    const createLi = document.createElement("li");
    const textLi = document.createTextNode("3");
    createLi.appendChild(textLi);
    listDom.appendChild(createLi);
} */

const taskInputDom = document.getElementById("taskInput");
const taskListDom = document.getElementById("taskList");

let tasks = [];
let id = 0;

const addTask = () => {
    let newValue = taskInputDom.value;
    tasks.push({ text: newValue, id: id, done: false });
    id++;
    taskInputDom.value = ""
    displayTask()
}
const displayTask = () => {
    taskListDom.textContent = ""
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.addEventListener("click", () => {
            deleteTask(task.id)
        })
        li.append(deleteButton);
        li.style.textDecoration = task.done ? "line-through" : "none";
        taskListDom.appendChild(li);
        li.addEventListener("click", () => {
            task.done = !task.done;
            displayTask();
        })

    })
}


const deleteTask = (id) => {
    tasks.splice(id, 1);
    displayTask()
}