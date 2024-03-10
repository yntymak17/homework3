// const yodaSays = ["on JavaScript", "programming ", "I like "];
// correctString = yodaSays[2] +yodaSays[1] + yodaSays[0];
// console.log(correctString);
//Задание1========================================================



// const user = prompt("Введите данные для входа");

// if (user === "admin") {
//     const password = prompt("Введите пароль для входа");

//     if (password === "1234") {
//         alert("Добро Пожаловать!");
//     } else if (!password || password === "") {
//         alert("Авторизация не успешна");
//     } else {
//         alert("Неправильный пароль");
//     }
// } else if (!user || user === "") {
//     alert("Авторизация не успешна");
// } else {
//     alert("Имя пользователя не найдено");
// }
//Задание2========================================================




// const drinks = ['milk', 'beer', 'beer', 'milk', 'milk'];

// for (const drink of drinks) { 
//     } if (drinks === 'milk') {
//         console.log('good');
//     } else if (drinks === 'beer') {
//         console.log('bad');
//     }
//Задание3========================================================



// const symbol = prompt("Введите символ:");
// let rectangle = "";

// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < 20; j++) {
//         rectangle += symbol;
//     }
//     rectangle += "\n";
// }

// alert(rectangle);
//Задание4========================================================







// const seconds = parseInt(prompt("Введите количество секунд:"));

// console.log(seconds);

// if (seconds >= 28800) {
//     console.log(`Осталось ${Math.floor((seconds / 3600))} часов`);
// } else if (seconds >= 3600) {
//     console.log(`Осталось ${Math.floor((seconds / 3600))} часов`);
// } else if (seconds >= 60) {
//     console.log(`Осталось ${Math.floor((seconds / 60))} минут`);
// } else if (seconds > 0) {
//     console.log("Осталось менее часа");
// } else {
//     console.log("Рабочий день закончился");
// }
//Задание5========================================================






// let val = 10

// console.log(Math.random() * val);
 //Задание6========================================================

function Calculator() {
    
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 9) + 1;

    
    var correctAnswer = num1 * num2;

    
    var userAnswer = prompt("What is " + num1 + " * " + num2 + "?");

    
    if (userAnswer !== null && userAnswer !== "") {
        userAnswer = parseInt(userAnswer);
        if (userAnswer === correctAnswer) {
            alert("You are correct!");
        } else {
            alert("Неправильный ответ.Правильный ответ это: " + correctAnswer + ".");
        }
    } else {
        alert("You are wrong. Please enter a valid number.");
    }
}

Calculator();

//Задание7========================================================