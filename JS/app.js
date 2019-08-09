//create a function for the if statements and call them for each Q&A
//create an array to cycle through the questions and answers


//store the point total
let total = document.querySelector('.points');

let newTotal = parseFloat(total.innerText);

const correctChoice = document.querySelector('.correct');
const correctChoice2 = document.querySelector('.correct2');
const correctChoice3 = document.querySelector('.correct3');
const correctChoice4 = document.querySelector('.correct4');
const correctChoice5 = document.querySelector('.correct5');

const footballClass = document.querySelector('.football');

const correctAnswerOne = () => {
    
    if(correctChoice.checked == true) {

        newTotal += 100;
        total.innerText = newTotal;
        console.log(newTotal);

     } else {

         newTotal -= 100;
         total.innerText = newTotal;
         console.log(newTotal);
     }
}

const correctAnswerTwo = () => {
    
    if(correctChoice2.checked == true) {

        newTotal += 200;
        total.innerText = newTotal;
        console.log(newTotal);

     } else {

         newTotal -= 200;
         total.innerText = newTotal;
         console.log(newTotal);
     }
}

const correctAnswerThree = () => {
    
    if(correctChoice3.checked == true) {

        newTotal += 300;
        total.innerText = newTotal;
        console.log(newTotal);

     } else {

         newTotal -= 300;
         total.innerText = newTotal;
         console.log(newTotal);
     }
}

const correctAnswerFour = () => {
    
    if(correctChoice4.checked == true) {

        newTotal += 400;
        total.innerText = newTotal;
        console.log(newTotal);

     } else {

         newTotal -= 400;
         total.innerText = newTotal;
         console.log(newTotal);
     }
}

const correctAnswerFive = () => {

    
    if(correctChoice5.checked == true) {

        newTotal += 500;
        total.innerText = newTotal;
        console.log(newTotal);

     } else {

         newTotal -= 500;
         total.innerText = newTotal;
         console.log(newTotal);
     }
}
//check if the correct radio button is checked for the football category
const footballQuestionsOne = () => {

    document.querySelector('.footballEasy').addEventListener('submit', function() {
        event.preventDefault();

        correctAnswerOne();

    });
    
}
footballQuestionsOne();

const footballQuestionsTwo = () => {

    document.querySelector('.footballMedium').addEventListener('submit', function() {
        event.preventDefault();
       
        correctAnswerTwo();

    });
    
}
footballQuestionsTwo();

const footballQuestionsThree = () => {

    document.querySelector('.footballHard').addEventListener('submit', function() {
        event.preventDefault();
       
        correctAnswerThree();

    });
    
}
footballQuestionsThree();

const footballQuestionsFour = () => {

    document.querySelector('.footballVeryHard').addEventListener('submit', function() {
        event.preventDefault();
        
        correctAnswerFour();

    });
    
}
footballQuestionsFour();

const footballQuestionsFive = () => {

    document.querySelector('.footballInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        correctAnswerFive();

    });
    
}
footballQuestionsFive();

const footballQADisappear = () => {
    document.querySelector('.footballQA').style.display = 'none';
}

const gamerQADisappear = () => {
    document.querySelector('.videoGamesQA').style.display = 'none';
}

//make the football container disappear
const footballDisappearOne = () => {

    footballQADisappear();
    document.querySelector('.footballEasy').style.display = 'none';
}

//onclick make the questions disappear
document.querySelector('.footballSubmit').addEventListener('click', footballDisappearOne);

const footballDisappearTwo = () => {

    footballQADisappear();
    document.querySelector('.footballMedium').style.display = 'none';
}

//onclick make the questions disappear
document.querySelector('.footballSubmit2').addEventListener('click', footballDisappearTwo);
 
const footballDisappearThree = () => {

    footballQADisappear();
    document.querySelector('.footballHard').style.display = 'none';
   
}

//onclick make the questions disappear
document.querySelector('.footballSubmit3').addEventListener('click', footballDisappearThree);

const footballDisappearFour = () => {

    footballQADisappear();
    document.querySelector('.footballVeryHard').style.display = 'none';
   
}

//onclick make the questions disappear
document.querySelector('.footballSubmit4').addEventListener('click', footballDisappearFour);

const footballDisappearFive = () => {

    footballQADisappear();
    document.querySelector('.footballInsane').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.footballSubmit5').addEventListener('click', footballDisappearFive);

//check if the correct radio button is checked for the video games category
// const gamerQuestionsOne = () => {

//     document.querySelector('.gamerEasy').addEventListener('submit', function() {
//         event.preventDefault();

//         correctAnswer();

//     });
    
// }
// gamerQuestionsOne();

// const gamerQuestionsTwo = () => {

//     document.querySelector('.gamerMedium').addEventListener('submit', function() {
//         event.preventDefault();
       
//         correctAnswer();

//     });
    
// }
// gamerQuestionsTwo();

// const gamerQuestionsThree = () => {

//     document.querySelector('.gamerHard').addEventListener('submit', function() {
//         event.preventDefault();
       
//         correctAnswer();

//     });
    
// }
// gamerQuestionsThree();

// const gamerQuestionsFour = () => {

//     document.querySelector('.gamerVeryHard').addEventListener('submit', function() {
//         event.preventDefault();
        
//         correctAnswer();

//     });
    
// }
// gamerQuestionsFour();

const gamerQuestionsFive = () => {

    document.querySelector('.gamerInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        correctAnswerFive();

    });
    
}
gamerQuestionsFive();

const gamerDisappearFive = () => {

    gamerQADisappear();
    document.querySelector('.gamerInsane').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.gamerSubmit5').addEventListener('click', gamerDisappearFive);
 
//create a new div to hold the football answers
const firstFiveCont = () => {
    event.preventDefault();

    let numberFive = document.querySelector('.football');
    
    let firstFive = document.querySelector('.firstFive');
    
    //make the number 1 a child of the first 500 container
    firstFive.appendChild(numberFive);
    
    document.querySelector('.footballQA').style.display = 'block';
    document.querySelector('.footballInsane').style.display = 'block';

}

//onclick move the number 1 into the first 500 container and make the container appear
document.querySelector('.firstFive').addEventListener('click', firstFiveCont);

const firstFourCont = () => {

    event.preventDefault();

   let numberFour = document.querySelector('.football');
   
   let firstFour = document.querySelector('.firstFour');
   
   //make the number 1 a child of the first 400 container
   firstFour.appendChild(numberFour);

   document.querySelector('.footballQA').style.display = 'block';
   document.querySelector('.footballVeryHard').style.display = 'block';
}

//onclick move the number 1 into the first 400 container and make the container appear
document.querySelector('.firstFour').addEventListener('click', firstFourCont);

const firstThreeCont = () => {

    event.preventDefault();

   let numberThree = document.querySelector('.football');
   
   let firstThree = document.querySelector('.firstThree');
   
   //make the number 1 a child of the first 300 container
   firstThree.appendChild(numberThree);

   document.querySelector('.footballQA').style.display = 'block';
   document.querySelector('.footballHard').style.display = 'block';
}

//onclick move the number 1 into the first 300 container
document.querySelector('.firstThree').addEventListener('click', firstThreeCont);

const firstTwoCont = () => {

    event.preventDefault();

   let numberTwo = document.querySelector('.football');
   
   let firstTwo = document.querySelector('.firstTwo');
   
   //make the number 1 a child of the first 200 container
   firstTwo.appendChild(numberTwo);

   document.querySelector('.footballQA').style.display = 'block';
   document.querySelector('.footballMedium').style.display = 'block';
}

//onclick move the number 1 into the first 200 container
document.querySelector('.firstTwo').addEventListener('click', firstTwoCont);

const firstOneCont = () => {

    event.preventDefault();

   let numberOne = document.querySelector('.football');
   
   let firstOne = document.querySelector('.firstOne');
   
   //make the number 1 a child of the first 100 container
   firstOne.appendChild(numberOne);

   document.querySelector('.footballQA').style.display = 'block';
   document.querySelector('.footballEasy').style.display = 'block';
}

//onclick move the number 1 into the first 100 container
document.querySelector('.firstOne').addEventListener('click', firstOneCont);

//second column
const secondFiveCont = () => {

    event.preventDefault();

   let videoFive = document.querySelector('.videoGames');
   
   let secondFive = document.querySelector('.secondFive');
   
   //make the number 2 a child of the second 500 container
   secondFive.appendChild(videoFive);

   document.querySelector('.videoGamesQA').style.display = 'block';
   document.querySelector('.gamerInsane').style.display = 'block';
}

// //onclick move the number 2 into the second 500 container
document.querySelector('.secondFive').addEventListener('click', secondFiveCont);

// const secondFourCont = () => {

//    event.preventDefault();

//   let numberFour = document.querySelector('.videoGames');
  
//   let secondFour = document.querySelector('.secondFour');
  
//   //make the number 2 a child of the second 400 container
//   secondFour.appendChild(numberFour);

//   document.querySelector('.videoGamesQA').style.display = 'block';
//   document.querySelector('.gamerVeryHard').style.display = 'block';
// }

// // //onclick move the number 2 into the second 400 container
// document.querySelector('.secondFour').addEventListener('click', secondFourCont);

// const secondThreeCont = () => {

//    event.preventDefault();

//   let numberThree = document.querySelector('.gamer');
  
//   let secondThree = document.querySelector('.secondThree');
  
//   //make the number 2 a child of the second 300 container
//   secondThree.appendChild(numberThree);

//   document.querySelector('.videoGamesQA').style.display = 'block';
// }

// //onclick move the number 2 into the second 300 container
// document.querySelector('.secondThree').addEventListener('click', secondThreeCont);

// const secondTwoCont = () => {

//    event.preventDefault();

//   let numberTwo = document.querySelector('.gamer');
  
//   let secondTwo = document.querySelector('.secondTwo');
  
//   //make the number 2 a child of the second 200 container
//   secondTwo.appendChild(numberTwo);

//   document.querySelector('.videoGamesQA').style.display = 'block';
// }

// //onclick move the number 2 into the second 200 container
// document.querySelector('.secondTwo').addEventListener('click', secondTwoCont);

// const secondOneCont = () => {

//    event.preventDefault();

//   let numberOne = document.querySelector('.gamer');
  
//   let secondOne = document.querySelector('.secondOne');
  
//   //make the number 2 a child of the second 100 container
//   secondOne.appendChild(numberOne);

//   document.querySelector('.videoGamesQA').style.display = 'block';
// }

// //onclick move the number 2 into the second 100 container
// document.querySelector('.secondOne').addEventListener('click', secondOneCont);

//third column
const thirdFiveCont = () => {

    event.preventDefault();

   let numberFive = document.querySelector('.anime');
   
   let thirdFive = document.querySelector('.thirdFive');
   
   //make the number 3 a child of the third 500 container
   thirdFive.appendChild(numberFive);

   document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 3 into the third 500 container
document.querySelector('.thirdFive').addEventListener('click', thirdFiveCont);

const thirdFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.anime');
  
  let thirdFour = document.querySelector('.thirdFour');
  
  //make the number 3 a child of the third 400 container
  thirdFour.appendChild(numberFour);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 3 into the third 400 container
document.querySelector('.thirdFour').addEventListener('click', thirdFourCont);

const thirdThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.anime');
  
  let thirdThree = document.querySelector('.thirdThree');
  
  //make the number 3 a child of the third 300 container
  thirdThree.appendChild(numberThree);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 3 into the third 300 container
document.querySelector('.thirdThree').addEventListener('click', thirdThreeCont);

const thirdTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.anime');
  
  let thirdTwo = document.querySelector('.thirdTwo');
  
  //make the number 3 a child of the third 200 container
  thirdTwo.appendChild(numberTwo);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 3 into the third 200 container
document.querySelector('.thirdTwo').addEventListener('click', thirdTwoCont);

const thirdOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.anime');
  
  let thirdOne = document.querySelector('.thirdOne');
  
  //make the number 3 a child of the third 100 container
  thirdOne.appendChild(numberOne);

  document.querySelector('.footballQA').style.display = 'block';
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

   document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 4 into the third 500 container
document.querySelector('.fourthFive').addEventListener('click', fourthFiveCont);

const fourthFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.basketball');
  
  let fourthFour = document.querySelector('.fourthFour');
  
  //make the number 4 a child of the third 400 container
  fourthFour.appendChild(numberFour);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 4 into the third 400 container
document.querySelector('.fourthFour').addEventListener('click', fourthFourCont);

const fourthThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.basketball');
  
  let fourthThree = document.querySelector('.fourthThree');
  
  //make the number 4 a child of the third 300 container
  fourthThree.appendChild(numberThree);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 4 into the third 300 container
document.querySelector('.fourthThree').addEventListener('click', fourthThreeCont);

const fourthTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.basketball');
  
  let fourthTwo = document.querySelector('.fourthTwo');
  
  //make the number 4 a child of the third 200 container
  fourthTwo.appendChild(numberTwo);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 4 into the third 200 container
document.querySelector('.fourthTwo').addEventListener('click', fourthTwoCont);

const fourthOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.basketball');
  
  let fourthOne = document.querySelector('.fourthOne');
  
  //make the number 4 a child of the third 100 container
  fourthOne.appendChild(numberOne);

  document.querySelector('.footballQA').style.display = 'block';
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

   document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 5 into the third 500 container
document.querySelector('.fifthFive').addEventListener('click', fifthFiveCont);

const fifthFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.marvelMovies');
  
  let fifthFour = document.querySelector('.fifthFour');
  
  //make the number 5 a child of the third 400 container
  fifthFour.appendChild(numberFour);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 5 into the third 400 container
document.querySelector('.fifthFour').addEventListener('click', fifthFourCont);

const fifthThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.marvelMovies');
  
  let fifthThree = document.querySelector('.fifthThree');
  
  //make the number 5 a child of the third 300 container
  fifthThree.appendChild(numberThree);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 5 into the third 300 container
document.querySelector('.fifthThree').addEventListener('click', fifthThreeCont);

const fifthTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.marvelMovies');
  
  let fifthTwo = document.querySelector('.fifthTwo');
  
  //make the number 5 a child of the third 200 container
  fifthTwo.appendChild(numberTwo);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 5 into the third 200 container
document.querySelector('.fifthTwo').addEventListener('click', fifthTwoCont);

const fifthOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.marvelMovies');
 
  let fifthOne = document.querySelector('.fifthOne');
  
  //make the number 5 a child of the third 100 container
  fifthOne.appendChild(numberOne);

  document.querySelector('.footballQA').style.display = 'block';
}

//onclick move the number 5 into the third 100 container
document.querySelector('.fifthOne').addEventListener('click', fifthOneCont);