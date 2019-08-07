const addNumber = () => {

    
     event.preventDefault();

     
    let numberFive = document.querySelector('.football');
    
    let firstFive = document.querySelector('.firstFive');
    
    firstFive.appendChild(numberFive);

    //set the innerText of firstFive equal to numberFive
    firstFive = numberFive;
    
    return firstFive;
}

    document.querySelector('.firstFive').addEventListener('click', addNumber);

