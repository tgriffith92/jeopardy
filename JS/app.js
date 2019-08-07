const addNumber = () => {

    
     event.preventDefault();

     
    let numberFive = document.querySelector('.football').innerText;
    
    let firstFive = document.querySelector('.firstFive').innerText;
    
    document.querySelector('.football').remove();
    firstFive = numberFive;
    console.log(firstFive);
    return firstFive;
}

    document.querySelector('.firstFive').addEventListener('click', addNumber);

