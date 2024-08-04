let tries = 0;
let maxTries = 3;

while (tries < maxTries) {
    let pwd = +prompt("Введите пароль!");

    if (pwd === 7777) {
        alert("Пароль верный, проходите");
        break; 
    } else {
        tries++;
        if (tries < maxTries) {
            alert(`Введите пароль! ${tries > 0 ? "Попытка номер " + tries : ""}`);
        } else {
            alert("Попытки закончились, повторите позже");
        }
    }
}