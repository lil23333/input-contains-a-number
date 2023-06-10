let inp = document.querySelector('input');
function func () {
    let arr = inp.value.split(' ');
    let newArr = (''+arr).split('').map(Number);
    console.log(newArr.indexOf(3)!= -1);
}
inp.addEventListener('blur', func);
