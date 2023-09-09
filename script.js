const display = document.getElementById('display');

function getNumber(input)
{
    display.value += input;
}
function deleteNo()
{
    display.value = display.value.slice(0, -1);
}
function reset()
{
    display.value = ' ';
}
function result()
{
    try
    {
        display.value = eval(display.value)
    }
    catch(error)
    {
        display.value= 'error'
    }
}