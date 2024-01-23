function ChangeColor() {
    var items = document.querySelectorAll("#list li");

    for(var i = 0; i < items.length; i++) {
        if(i % 2 === 1) {
            items[i].classList.toggle('blue-bold');
        } else {
            items[i].classList.remove('blue-bold');
        }
    }
}

function ResetBtn() {
    var items = document.querySelectorAll("#list li");

    for(var i = 0; i < items.length; i++) {
        if(i % 2 === 1) {
            items[i].classList.remove('blue-bold');
        } else {
            items[i].classList.remove('blue-bold');
        }
    }
}