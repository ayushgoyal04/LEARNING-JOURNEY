let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval("display.innerText");
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});  





/*let screen = document.getElementById('display');
buttons = document.querySelectorAll('buttons');
screenValue = ''
for(item of buttons)
{
   item.addEventListener('click', (e)=>{
   buttonText = e.target.innerText;
   console.log('button text is' + buttonText); if(buttonText == 'C')
{
   screenValue ='';
   screen.value = screenValue;
}
   else if(buttonText == '='){
   screen.values = eval(screenValue);
}
   else if(buttonText == '<')
{

   screen.value = screen.value.substr(0, screen.value.length - 1);
}
   else {
   screenValue +=buttonText;
   screen.value = screenValue;
}
})
} */



