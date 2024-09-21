let values = [];

function handleButtonClick(event) {
    const button = event.target;
    const value = button.innerText;

    if (button.classList.contains('equal'))
    {
        document.getElementById('resultDisplay').textContent = calculateResult(values);
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

function calculateResult(values)
{
    const numbers = values.join('');
    let result = 0;
    let currentNumber = '';
    let operator = '+';
    for (let i = 0; i < numbers.length; i++)
    {
        const char = numbers[i];
        if (char >= '0' && char <= '9') 
        {
            currentNumber += char;
        }
        else
        {
            if (currentNumber != null)
            {
                const num = parseFloat(currentNumber);
                if (operator == '+')
                    result += num;
                else if (operator == '-')
                    result -= num;
                else if (operator == '/')
                    result /= num;
                else if (operator == '*')
                    result *= num;
                currentNumber = '';
            }
            operator = char;
        }
    }
    if (currentNumber != null)
    {
        const num = parseFloat(currentNumber);
        if (operator == '+')
            result += num;
        else if (operator == '-')
            result -= num;
        else if (operator == '/')
            result /= num;
        else if (operator == '*')
            result *= num;
        currentNumber = '';
    }
    return result;
}
//adding events to each buttong to check when the buttons are clicked
const buttons = document.querySelectorAll('.digit, .operator, .equal, .clear');
buttons.forEach(button => 
{
    button.addEventListener('click', handleButtonClick);
});