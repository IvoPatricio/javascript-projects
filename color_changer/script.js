const buttons = document.querySelectorAll('.green, .red, .yellow, .white');
const background = document.getElementById('backgroundColor');

function handleButtonClick(event) {
    const buttonClick = event.target;
    if (buttonClick.classList.contains('green')) {
        backgroundColor.style.backgroundColor = 'green';
    } else if (buttonClick.classList.contains('red')) {
        backgroundColor.style.backgroundColor = 'red';
    } else if (buttonClick.classList.contains('yellow')) {
        backgroundColor.style.backgroundColor = 'yellow';
    } else if (buttonClick.classList.contains('white')) {
        backgroundColor.style.backgroundColor = 'white';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});