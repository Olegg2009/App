function first() {
    alert(`Будет ${150+150}`)
}
function second(){
    let age = prompt('Введите свой возраст: ')
    if ( age < 18){
        alert(`Ты еще карапуз`)
    }
    else if (age > 64){
        alert('Тебе на пенсию пора')
    }
    else{
        alert('можно')
    }
}
function third(){
    document.getElementById('zp').innerHTML = 100;
}