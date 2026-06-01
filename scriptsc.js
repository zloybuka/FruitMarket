window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 document.body.style.transform='scale(1)';
    }
    else if(width <= 1280 && width > 720)
    {
   	 document.body.style.transform='scale(0.8)';
    }
    else if(width < 720)
    {
        document.body.style.transform='scale(0.5)';
    }
}