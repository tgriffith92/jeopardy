const addNumberFiveOne = () => {

     event.preventDefault();

    let numberFive = document.querySelector('.football');
    
    let firstFive = document.querySelector('.firstFive');
    
    //make the number 1 a child of the first 500 container
    firstFive.appendChild(numberFive);

}

//onclick move the number 1 into the first 500 container
document.querySelector('.firstFive').addEventListener('click', addNumberFiveOne);

const addNumberFourOne = () => {

    event.preventDefault();

   let numberFour = document.querySelector('.football');
   
   let firstFour = document.querySelector('.firstFour');
   
   //make the number 1 a child of the first 400 container
   firstFour.appendChild(numberFour);

}

//onclick move the number 1 into the first 400 container
document.querySelector('.firstFour').addEventListener('click', addNumberFourOne);

const addNumberThreeOne = () => {

    event.preventDefault();

   let numberThree = document.querySelector('.football');
   
   let firstThree = document.querySelector('.firstThree');
   
   //make the number 1 a child of the first 300 container
   firstThree.appendChild(numberThree);

}

//onclick move the number 1 into the first 300 container
document.querySelector('.firstThree').addEventListener('click', addNumberThreeOne);

const addNumberTwoOne = () => {

    event.preventDefault();

   let numberTwo = document.querySelector('.football');
   
   let firstTwo = document.querySelector('.firstTwo');
   
   //make the number 1 a child of the first 200 container
   firstThree.appendChild(numberThree);

}

//onclick move the number 1 into the first 200 container
document.querySelector('.firstTwo').addEventListener('click', addNumberTwoOne);