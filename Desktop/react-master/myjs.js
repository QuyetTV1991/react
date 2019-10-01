let callButton = document.querySelector('.call');
let markInput = document.querySelector('.mark');


callButton.addEventListener('click', function() {
    let mark = markInput.value
    if (mark < 0 || mark > 10)
    alert('Input Illegal')
    else if (mark < 5)
    alert('Weak Student')
    else if (mark < 6.5)
    alert('Average Student')
    else if (mark < 8)
    alert('Good Student')
    else
    alert('Excellent Student')
})