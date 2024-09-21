let values = [];

function handleButtonClick(event) {
    const button = event.target;
    const value = button.innerText;

    if (button.classList.contains('equal'))
    {
        //CALCULATE HERE
        values = [];
    }
    else if (button.classList.contains('clear'))
    {
        values = [];
        document.getElementById('resultDisplay').textContent = values;
    }
    else
    {
        values.push(value);
        document.getElementById('resultDisplay').textContent = values.join('');
    }
}

//adding events to each buttong to check when the buttons are clicked
const buttons = document.querySelectorAll('.digit, .operator, .equal, .clear');
buttons.forEach(button => 
{
    button.addEventListener('click', handleButtonClick);
});