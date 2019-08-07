const addNumberFiveOne = () => {

     event.preventDefault();

    let numberFive = document.querySelector('.football');
    
    let firstFive = document.querySelector('.firstFive');
    
    //make the number 1 a child of the first 500 container
    firstFive.appendChild(numberFive);

    //set the innerText of firstFive equal to numberFive
    firstFive = numberFive;
    
    return firstFive;
}

document.querySelector('.firstFive').addEventListener('click', addNumberFiveOne);

const addNumberFourOne = () => {

    event.preventDefault();

   let numberFour = document.querySelector('.football');
   
   let firstFour = document.querySelector('.firstFour');
   
   //make the number 1 a child of the first 500 container
   firstFour.appendChild(numberFour);

   //set the innerText of firstFive equal to numberFive
   firstFour = numberFour;
   
   return firstFour;
}

document.querySelector('.firstFour').addEventListener('click', addNumberFourOne);

