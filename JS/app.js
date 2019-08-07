//create container for the football answers
const footballAnswers = ['This quarterback plays for the New England Patriots and has 6 Super Bowl Rings.', 
                        'This is the number of games in the NFL regular season.', 
                        'This is the first African American head coach to win a Super Bowl.', 
                        'These “penalties” are simultaneous violations by the offense and defense that cancel each other out.', 
                        'This is the first year the Atlanta Falcons played in the NFL.'];

//create a new div to hold the football answers
const footballDiv = () => {
    let footballCont = document.createElement('DIV');

    footballCont.innerText = footballAnswers[0];

    footballCont.classList.add('footballAns');

    document.querySelector('body').appendChild(footballCont);
}

footballDiv();
//first column
const firstFiveCont = () => {

     event.preventDefault();

    let numberFive = document.querySelector('.football');
    
    let firstFive = document.querySelector('.firstFive');
    
    //make the number 1 a child of the first 500 container
    firstFive.appendChild(numberFive);

}

//onclick move the number 1 into the first 500 container
document.querySelector('.firstFive').addEventListener('click', firstFiveCont);

const firstFourCont = () => {

    event.preventDefault();

   let numberFour = document.querySelector('.football');
   
   let firstFour = document.querySelector('.firstFour');
   
   //make the number 1 a child of the first 400 container
   firstFour.appendChild(numberFour);

}

//onclick move the number 1 into the first 400 container
document.querySelector('.firstFour').addEventListener('click', firstFourCont);

const firstThreeCont = () => {

    event.preventDefault();

   let numberThree = document.querySelector('.football');
   
   let firstThree = document.querySelector('.firstThree');
   
   //make the number 1 a child of the first 300 container
   firstThree.appendChild(numberThree);

}

//onclick move the number 1 into the first 300 container
document.querySelector('.firstThree').addEventListener('click', firstThreeCont);

const firstTwoCont = () => {

    event.preventDefault();

   let numberTwo = document.querySelector('.football');
   
   let firstTwo = document.querySelector('.firstTwo');
   
   //make the number 1 a child of the first 200 container
   firstTwo.appendChild(numberTwo);

}

//onclick move the number 1 into the first 200 container
document.querySelector('.firstTwo').addEventListener('click', firstTwoCont);

const firstOneCont = () => {

    event.preventDefault();

   let numberOne = document.querySelector('.football');
   
   let firstOne = document.querySelector('.firstOne');
   
   //make the number 1 a child of the first 100 container
   firstOne.appendChild(numberOne);

}

//onclick move the number 1 into the first 100 container
document.querySelector('.firstOne').addEventListener('click', firstOneCont);

//second column
const secondFiveCont = () => {

    event.preventDefault();

   let numberFive = document.querySelector('.videoGames');
   
   let secondFive = document.querySelector('.secondFive');
   
   //make the number 2 a child of the second 500 container
   secondFive.appendChild(numberFive);

}

//onclick move the number 2 into the second 500 container
document.querySelector('.secondFive').addEventListener('click', secondFiveCont);

const secondFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.videoGames');
  
  let secondFour = document.querySelector('.secondFour');
  
  //make the number 2 a child of the second 400 container
  secondFour.appendChild(numberFour);

}

//onclick move the number 2 into the second 400 container
document.querySelector('.secondFour').addEventListener('click', secondFourCont);

const secondThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.videoGames');
  
  let secondThree = document.querySelector('.secondThree');
  
  //make the number 2 a child of the second 300 container
  secondThree.appendChild(numberThree);

}

//onclick move the number 2 into the second 300 container
document.querySelector('.secondThree').addEventListener('click', secondThreeCont);

const secondTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.videoGames');
  
  let secondTwo = document.querySelector('.secondTwo');
  
  //make the number 2 a child of the second 200 container
  secondTwo.appendChild(numberTwo);

}

//onclick move the number 2 into the second 200 container
document.querySelector('.secondTwo').addEventListener('click', secondTwoCont);

const secondOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.videoGames');
  
  let secondOne = document.querySelector('.secondOne');
  
  //make the number 2 a child of the second 100 container
  secondOne.appendChild(numberOne);

}

//onclick move the number 2 into the second 100 container
document.querySelector('.secondOne').addEventListener('click', secondOneCont);

//third column
const thirdFiveCont = () => {

    event.preventDefault();

   let numberFive = document.querySelector('.anime');
   
   let thirdFive = document.querySelector('.thirdFive');
   
   //make the number 3 a child of the third 500 container
   thirdFive.appendChild(numberFive);

}

//onclick move the number 3 into the third 500 container
document.querySelector('.thirdFive').addEventListener('click', thirdFiveCont);

const thirdFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.anime');
  
  let thirdFour = document.querySelector('.thirdFour');
  
  //make the number 3 a child of the third 400 container
  thirdFour.appendChild(numberFour);

}

//onclick move the number 3 into the third 400 container
document.querySelector('.thirdFour').addEventListener('click', thirdFourCont);

const thirdThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.anime');
  
  let thirdThree = document.querySelector('.thirdThree');
  
  //make the number 3 a child of the third 300 container
  thirdThree.appendChild(numberThree);

}

//onclick move the number 3 into the third 300 container
document.querySelector('.thirdThree').addEventListener('click', thirdThreeCont);

const thirdTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.anime');
  
  let thirdTwo = document.querySelector('.thirdTwo');
  
  //make the number 3 a child of the third 200 container
  thirdTwo.appendChild(numberTwo);

}

//onclick move the number 3 into the third 200 container
document.querySelector('.thirdTwo').addEventListener('click', thirdTwoCont);

const thirdOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.anime');
  
  let thirdOne = document.querySelector('.thirdOne');
  
  //make the number 3 a child of the third 100 container
  thirdOne.appendChild(numberOne);

}

//onclick move the number 3 into the third 100 container
document.querySelector('.thirdOne').addEventListener('click', thirdOneCont);

//fourth column
const fourthFiveCont = () => {

    event.preventDefault();

   let numberFive = document.querySelector('.basketball');
   
   let fourthFive = document.querySelector('.fourthFive');
   
   //make the number 4 a child of the third 500 container
   fourthFive.appendChild(numberFive);

}

//onclick move the number 4 into the third 500 container
document.querySelector('.fourthFive').addEventListener('click', fourthFiveCont);

const fourthFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.basketball');
  
  let fourthFour = document.querySelector('.fourthFour');
  
  //make the number 4 a child of the third 400 container
  fourthFour.appendChild(numberFour);

}

//onclick move the number 4 into the third 400 container
document.querySelector('.fourthFour').addEventListener('click', fourthFourCont);

const fourthThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.basketball');
  
  let fourthThree = document.querySelector('.fourthThree');
  
  //make the number 4 a child of the third 300 container
  fourthThree.appendChild(numberThree);

}

//onclick move the number 4 into the third 300 container
document.querySelector('.fourthThree').addEventListener('click', fourthThreeCont);

const fourthTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.basketball');
  
  let fourthTwo = document.querySelector('.fourthTwo');
  
  //make the number 4 a child of the third 200 container
  fourthTwo.appendChild(numberTwo);

}

//onclick move the number 4 into the third 200 container
document.querySelector('.fourthTwo').addEventListener('click', fourthTwoCont);

const fourthOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.basketball');
  
  let fourthOne = document.querySelector('.fourthOne');
  
  //make the number 4 a child of the third 100 container
  fourthOne.appendChild(numberOne);

}

//onclick move the number 4 into the third 100 container
document.querySelector('.fourthOne').addEventListener('click', fourthOneCont);

//fifth column
const fifthFiveCont = () => {

    event.preventDefault();

   let numberFive = document.querySelector('.marvelMovies');
   
   let fifthFive = document.querySelector('.fifthFive');
   
   //make the number 5 a child of the third 500 container
   fifthFive.appendChild(numberFive);

}

//onclick move the number 5 into the third 500 container
document.querySelector('.fifthFive').addEventListener('click', fifthFiveCont);

const fifthFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.marvelMovies');
  
  let fifthFour = document.querySelector('.fifthFour');
  
  //make the number 5 a child of the third 400 container
  fifthFour.appendChild(numberFour);

}

//onclick move the number 5 into the third 400 container
document.querySelector('.fifthFour').addEventListener('click', fifthFourCont);

const fifthThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.marvelMovies');
  
  let fifthThree = document.querySelector('.fifthThree');
  
  //make the number 5 a child of the third 300 container
  fifthThree.appendChild(numberThree);

}

//onclick move the number 5 into the third 300 container
document.querySelector('.fifthThree').addEventListener('click', fifthThreeCont);

const fifthTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.marvelMovies');
  
  let fifthTwo = document.querySelector('.fifthTwo');
  
  //make the number 5 a child of the third 200 container
  fifthTwo.appendChild(numberTwo);

}

//onclick move the number 5 into the third 200 container
document.querySelector('.fifthTwo').addEventListener('click', fifthTwoCont);

const fifthOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.marvelMovies');
 
  let fifthOne = document.querySelector('.fifthOne');
  
  //make the number 5 a child of the third 100 container
  fifthOne.appendChild(numberOne);

}

//onclick move the number 5 into the third 100 container
document.querySelector('.fifthOne').addEventListener('click', fifthOneCont);


let footballQuestions = [];