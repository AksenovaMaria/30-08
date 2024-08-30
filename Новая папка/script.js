// 1. //Инициализация всех переменнных 
// //Первая сторона
// const inputData1 = document.querySelector(".input-rectangle1");
// //Вторая сторона
// const inputData2 = document.querySelector(".input-rectangle2");
// // Кнопка площади
// const btnSquare = document.querySelector("#btn-square");
// // Кнопка периметра
// const btnPerimetr = document.querySelector("#btn-perimetr");
// // Посчитать все
// const btnAll = document.querySelector("#btn-all");

// // Поле с результатом площади
// const resSquare = document.querySelector(".res-square")
// // Поле с результатом периметра
// const resPerimetr = document.querySelector(".res-perimetr");




// // Проверка введенных данных (Проверяем, что значения не пустые)
// function checkData(inp1, inp2) {
//     if (inp1 == "" && inp2 == "") {
//         alert("Введите значение")
//         return false;
//     }
//     else {
//         return true
//     }

// }




// // Площадь прямоугольника находим
// btnSquare.addEventListener("click", () => {
//     const data1 = inputData1.value; //Получаем значение которое вводит пользователь
//     const data2 = inputData2.value; //Получаем значение которое вводит пользователь

//     if (checkData(data1, data2) == true) {
//         const res = +data1 * data2;
//         resSquare.textContent = `Площадь: ${res}`;

//     }
// })




// // Находим периметр
// btnPerimetr.addEventListener("click", () => {
//     const data1 = inputData1.value; //Получаем значение которое вводит пользователь
//     const data2 = inputData2.value; //Получаем значение которое вводит пользователь

//     if (checkData(data1, data2) == true) {
//         const res = (+data1 * 2) + (data2 * 2);
//         resPerimetr.textContent = `Периметр: ${res}`;
//     }
// })


// // Посчитать всё 

// btnAll.addEventListener("click", () => {
//     const data1 = inputData1.value; //Получаем значение которое вводит пользователь
//     const data2 = inputData2.value; //Получаем значение которое вводит пользователь

//     if (checkData(data1, data2) == true) {
//         resSquare.textContent = `Площадь: ${+data1 * data2}`;
//         resPerimetr.textContent = `Периметр: ${(+data1 * 2) + (data2 * 2)}`;

//     }
// })







// // Игра "Угадай число"

// // 1. Инициализация переменных 
// // Поле ввода
// const inputNum = document.querySelector(".game__num");
// // кнопка
// const btnRes = document.querySelector(".btn__num");
// // поле результата
// const res = document.querySelector(".game__res");


// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }


// const randomNum = getRandomArbitrary(1, 10);
// console.log(randomNum);

// btnRes.addEventListener("click", () => {
//     if (inputNum.value == "") {
//         res.textContent = "Введите значение";
//     }
//     else if (inputNum.value == randomNum) {
//         res.textContent = "Вы угадали число";
//     }
//     else {
//         if (inputNum.value > randomNum) {
//             res.textContent = "Вы не угадали число, ваше число больше";
//         }
//         else {
//             res.textContent = "Вы не угадали число, ваше число меньше";
//         }
//     }


// })




const nameData = document.getElementById("form__name");
const emailData = document.getElementById("form__email");
const passwordData = document.getElementById("form__password");
const passwordData2 = document.getElementById("form__password-second");
const showPassword = document.querySelector(".form-label>input[type='checkbox']");
// console.log(showPassword);
const btnSave = document.querySelector(".form .btn");
const date = document.getElementById("form__date");
console.log(date);


const resForm = document.querySelector(".result-form");



// Функция "показывать пароль"

function showPasswordData(flag) {
    if (flag == true) {
        //показывать пароль
        passwordData.setAttribute("type", "text");
        passwordData2.setAttribute("type", "text");
    }
    else {
        //скрывать пароль
        passwordData.setAttribute("type", "password");
        passwordData2.setAttribute("type", "password");
    }
}


showPassword.addEventListener("click", () => {
    showPasswordData(showPassword.checked);
})


btnSave.addEventListener("click", (event) => {
    event.preventDefault();
    if (nameData.value === ""
        && emailData.value === ""
        && passwordData.value === ""
        && passwordData2.value === "") {
        alert("Введите данные");
        return;
    }

    if (passwordData.value != passwordData2.value) {
        alert("Пароли не совпадают");
        return;
    }

    const today = new Date();
    const inputData = new Date(date.value);

    if (isNaN(inputData.getTime())) {
        alert("Введите дату");
        return;
    }

    if (inputData < today) {
        alert("Нельзя вернуться в прошлое");
        return
    }

    alert("Вы зарегистрировались");

    window.localStorage.setItem("name" , nameData.value);
    window.localStorage.setItem("email" , emailData.value);
    window.localStorage.setItem("pass1" , passwordData.value);
    window.localStorage.setItem("pass2" , passwordData2.value);

    let name = window.localStorage.setItem("name");
    let email = window.localStorage.setItem("email");
    let pass1 = window.localStorage.setItem("pass1");
    let pass2 = window.localStorage.setItem("pass2");

    resForm.textContent = (`Имя ${name}; почта ${email}; пароль1 ${pass1}; пароль2 ${pass2};`)
})




