const array = ["Coding like poetry should be short and concise.", "It’s not a bug, it’s an undocumented feature.", 
    "First, solve the problem. Then, write the code.", "Code is like humor. When you have to explain it, it’s bad.", 
    "Make it work, make it right, make it fast.", "Clean code always looks like it was written by someone who cares."];
const button = document.getElementById("id_button_quote");
const display = document.getElementById("id_display");


function handleButtonClick(event)
{
    let i = Math.floor(Math.random() * array.length)
    if (event)
    {
        display.innerText = array[i];
    }
}


button.addEventListener('click', handleButtonClick);