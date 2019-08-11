//store the point total
let total = document.querySelector('.points');

let newTotal = parseFloat(total.innerText);

const win = () => {
    
        if(total.innerText >= 3500) {
            alert('Hooray you win!!!');
        } else {
            alert('You lose.');
        }
    
}

const correctChoice = document.querySelector('.correct');
const correctChoice2 = document.querySelector('.correct2');
const correctChoice3 = document.querySelector('.correct3');
const correctChoice4 = document.querySelector('.correct4');
const correctChoice5 = document.querySelector('.correct5');

const gamerChoice = document.querySelector('.gamerCorrect');
const gamerChoice2 = document.querySelector('.gamerCorrect2');
const gamerChoice3 = document.querySelector('.gamerCorrect3');
const gamerChoice4 = document.querySelector('.gamerCorrect4');
const gamerChoice5 = document.querySelector('.gamerCorrect5');

const animeChoice = document.querySelector('.animeCorrect');
const animeChoice2 = document.querySelector('.animeCorrect2');
const animeChoice3 = document.querySelector('.animeCorrect3');
const animeChoice4 = document.querySelector('.animeCorrect4');
const animeChoice5 = document.querySelector('.animeCorrect5');

const basketballChoice = document.querySelector('.basketballCorrect');
const basketballChoice2 = document.querySelector('.basketballCorrect2');
const basketballChoice3 = document.querySelector('.basketballCorrect3');
const basketballChoice4 = document.querySelector('.basketballCorrect4');
const basketballChoice5 = document.querySelector('.basketballCorrect5');

const marvelChoice = document.querySelector('.marvelCorrect');
const marvelChoice2 = document.querySelector('.marvelCorrect2');
const marvelChoice3 = document.querySelector('.marvelCorrect3');
const marvelChoice4 = document.querySelector('.marvelCorrect4');
const marvelChoice5 = document.querySelector('.marvelCorrect5');

//add 100 to the point container
const correctAnswerOne = () => {
    
    if(correctChoice.checked == true) {

        newTotal += 100;
        total.innerText = newTotal;

     } else {

         newTotal -= 100;
         total.innerText = newTotal;

     }
}

const gamerAnswerOne = () => {
    
    if(gamerChoice.checked == true) {

        newTotal += 100;
        total.innerText = newTotal;

     } else {

         newTotal -= 100;
         total.innerText = newTotal;

     }
}

const animeAnswerOne = () => {
    
    if(animeChoice.checked == true) {

        newTotal += 100;
        total.innerText = newTotal;

     } else {

         newTotal -= 100;
         total.innerText = newTotal;
     }
}

const basketballAnswerOne = () => {
    
    if(basketballChoice.checked == true) {

        newTotal += 100;
        total.innerText = newTotal

     } else {

         newTotal -= 100;
         total.innerText = newTotal;
     }
}

const marvelAnswerOne = () => {
    
    if(marvelChoice.checked == true) {

        newTotal += 100;
        total.innerText = newTotal

     } else {

         newTotal -= 100;
         total.innerText = newTotal;
     }
}

//add 200 to the point container
const correctAnswerTwo = () => {
    
    if(correctChoice2.checked == true) {

        newTotal += 200;
        total.innerText = newTotal

     } else {

         newTotal -= 200;
         total.innerText = newTotal;
     }
}

const gamerAnswerTwo = () => {
    
    if(gamerChoice2.checked == true) {

        newTotal += 200;
        total.innerText = newTotal;

     } else {

         newTotal -= 200;
         total.innerText = newTotal;
     }
}

const animeAnswerTwo = () => {
    
    if(animeChoice2.checked == true) {

        newTotal += 200;
        total.innerText = newTotal;

     } else {

         newTotal -= 200;
         total.innerText = newTotal;
     }
}

const basketballAnswerTwo = () => {
    
    if(basketballChoice2.checked == true) {

        newTotal += 200;
        total.innerText = newTotal;

     } else {

         newTotal -= 200;
         total.innerText = newTotal;
     }
}

const marvelAnswerTwo = () => {
    
    if(marvelChoice2.checked == true) {

        newTotal += 200;
        total.innerText = newTotal;

     } else {

         newTotal -= 200;
         total.innerText = newTotal;
     }
}

//add 300 to the point container
const correctAnswerThree = () => {
    
    if(correctChoice3.checked == true) {

        newTotal += 300;
        total.innerText = newTotal;

     } else {

         newTotal -= 300;
         total.innerText = newTotal;
     }
}

const gamerAnswerThree = () => {
    
    if(gamerChoice3.checked == true) {

        newTotal += 300;
        total.innerText = newTotal

     } else {

         newTotal -= 300;
         total.innerText = newTotal;
     }
}

const animeAnswerThree = () => {
    
    if(animeChoice3.checked == true) {

        newTotal += 300;
        total.innerText = newTotal

     } else {

         newTotal -= 300;
         total.innerText = newTotal;
     }
}

const basketballAnswerThree = () => {
    
    if(basketballChoice3.checked == true) {

        newTotal += 300;
        total.innerText = newTotal

     } else {

         newTotal -= 300;
         total.innerText = newTotal;
     }
}

const marvelAnswerThree = () => {
    
    if(marvelChoice3.checked == true) {

        newTotal += 300;
        total.innerText = newTotal;

     } else {

         newTotal -= 300;
         total.innerText = newTotal;

     }
}

//add 400 to the point container
const correctAnswerFour = () => {
    
    if(correctChoice4.checked == true) {

        newTotal += 400;
        total.innerText = newTotal;

     } else {

         newTotal -= 400;
         total.innerText = newTotal;

     }
}

const gamerAnswerFour = () => {
    
    if(gamerChoice4.checked == true) {

        newTotal += 400;
        total.innerText = newTotal;

     } else {

         newTotal -= 400;
         total.innerText = newTotal;

     }
}

const animeAnswerFour = () => {
    
    if(animeChoice4.checked == true) {

        newTotal += 400;
        total.innerText = newTotal;

     } else {

         newTotal -= 400;
         total.innerText = newTotal;

     }
}

const basketballAnswerFour = () => {
    
    if(basketballChoice4.checked == true) {

        newTotal += 400;
        total.innerText = newTotal;

     } else {

         newTotal -= 400;
         total.innerText = newTotal;

     }
}

const marvelAnswerFour = () => {
    
    if(marvelChoice4.checked == true) {

        newTotal += 400;
        total.innerText = newTotal;

     } else {

         newTotal -= 400;
         total.innerText = newTotal;

     }
}

//add 500 to the point container
const correctAnswerFive = () => {

    if(correctChoice5.checked == true) {

        newTotal += 500;
        total.innerText = newTotal;

     } else {

         newTotal -= 500;
         total.innerText = newTotal;

     }
}

const gamerAnswerFive = () => {
    
    if(gamerChoice5.checked == true) {

        newTotal += 500;
        total.innerText = newTotal;

     } else {

         newTotal -= 500;
         total.innerText = newTotal;

     }
}

const animeAnswerFive = () => {

    if(animeChoice5.checked == true) {

        newTotal += 500;
        total.innerText = newTotal;

     } else {

         newTotal -= 500;
         total.innerText = newTotal;

     }
}

const basketballAnswerFive = () => {

    if(basketballChoice5.checked == true) {

        newTotal += 500;
        total.innerText = newTotal;

     } else {

         newTotal -= 500;
         total.innerText = newTotal;

     }
}

const marvelAnswerFive = () => {

    if(marvelChoice5.checked == true) {

        newTotal += 500;
        total.innerText = newTotal;

     } else {

         newTotal -= 500;
         total.innerText = newTotal;

     }
}

//check if the correct radio button is checked for the football category
const footballQuestionsOne = () => {

    document.querySelector('.footballEasy').addEventListener('submit', function() {
        event.preventDefault();

        correctAnswerOne();
        document.querySelector('.firstOne').style.backgroundColor = 'black';
    });
    
}
footballQuestionsOne();

const footballQuestionsTwo = () => {

    document.querySelector('.footballMedium').addEventListener('submit', function() {
        event.preventDefault();
       
        correctAnswerTwo();
        document.querySelector('.firstTwo').style.backgroundColor = 'black';
    });
    
}
footballQuestionsTwo();

const footballQuestionsThree = () => {

    document.querySelector('.footballHard').addEventListener('submit', function() {
        event.preventDefault();
       
        correctAnswerThree();
        document.querySelector('.firstThree').style.backgroundColor = 'black';
    });
    
}
footballQuestionsThree();

const footballQuestionsFour = () => {

    document.querySelector('.footballVeryHard').addEventListener('submit', function() {
        event.preventDefault();
        
        correctAnswerFour();
        document.querySelector('.firstFour').style.backgroundColor = 'black';
    });
    
}
footballQuestionsFour();

const footballQuestionsFive = () => {

    document.querySelector('.footballInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        correctAnswerFive();
        document.querySelector('.firstFive').style.backgroundColor = 'black';
    });
    
}
footballQuestionsFive();

//make the category containers disappear
const footballQADisappear = () => {
    document.querySelector('.footballQA').style.display = 'none';
}

const gamerQADisappear = () => {
    document.querySelector('.videoGamesQA').style.display = 'none';
}

const animeQADisappear = () => {
    document.querySelector('.animeQA').style.display = 'none';
}

const basketballQADisappear = () => {
    document.querySelector('.basketballQA').style.display = 'none';
}

const marvelQADisappear = () => {
    document.querySelector('.marvelQA').style.display = 'none';
}

//make the football container disappear
const footballDisappearOne = () => {

    footballQADisappear();
    document.querySelector('.footballEasy').style.display = 'none';
    win();
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
const gamerQuestionsOne = () => {

    document.querySelector('.gamerEasy').addEventListener('submit', function() {
        event.preventDefault();

        gamerAnswerOne();
        document.querySelector('.secondOne').style.backgroundColor = 'black';
    });
    
}
gamerQuestionsOne();

const gamerDisappearOne = () => {

    gamerQADisappear();
    document.querySelector('.gamerEasy').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.gamerSubmit').addEventListener('click', gamerDisappearOne);

const gamerQuestionsTwo = () => {

    document.querySelector('.gamerMedium').addEventListener('submit', function() {
        event.preventDefault();
       
        gamerAnswerTwo();
        document.querySelector('.secondTwo').style.backgroundColor = 'black';

    });
    
}
gamerQuestionsTwo();

const gamerDisappearTwo = () => {

    gamerQADisappear();
    document.querySelector('.gamerMedium').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.gamerSubmit2').addEventListener('click', gamerDisappearTwo);

const gamerQuestionsThree = () => {

    document.querySelector('.gamerHard').addEventListener('submit', function() {
        event.preventDefault();
       
        gamerAnswerThree();
        document.querySelector('.secondThree').style.backgroundColor = 'black';

    });
    
}
gamerQuestionsThree();

const gamerDisappearThree = () => {

    gamerQADisappear();
    document.querySelector('.gamerHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.gamerSubmit3').addEventListener('click', gamerDisappearThree);

const gamerQuestionsFour = () => {

    document.querySelector('.gamerVeryHard').addEventListener('submit', function() {
        event.preventDefault();
        
        gamerAnswerFour();
        document.querySelector('.secondFour').style.backgroundColor = 'black';

    });
    
}
gamerQuestionsFour();

const gamerDisappearFour = () => {

    gamerQADisappear();
    document.querySelector('.gamerVeryHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.gamerSubmit4').addEventListener('click', gamerDisappearFour);

const gamerQuestionsFive = () => {

    document.querySelector('.gamerInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        gamerAnswerFive();
        document.querySelector('.secondFive').style.backgroundColor = 'black';

    });
    
}
gamerQuestionsFive();

const gamerDisappearFive = () => {

    gamerQADisappear();
    document.querySelector('.gamerInsane').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.gamerSubmit5').addEventListener('click', gamerDisappearFive);

const animeQuestionsOne = () => {

    document.querySelector('.animeEasy').addEventListener('submit', function() {
        event.preventDefault();
        
        animeAnswerOne();
        document.querySelector('.thirdOne').style.backgroundColor = 'black';
    });
    
}
animeQuestionsOne();

const animeDisappearOne = () => {

    animeQADisappear();
    document.querySelector('.animeEasy').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.animeSubmit').addEventListener('click', animeDisappearOne);

const animeQuestionsTwo = () => {

    document.querySelector('.animeMedium').addEventListener('submit', function() {
        event.preventDefault();
        
        animeAnswerTwo();
        document.querySelector('.thirdTwo').style.backgroundColor = 'black';
    });
    
}
animeQuestionsTwo();

const animeDisappearTwo = () => {

    animeQADisappear();
    document.querySelector('.animeMedium').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.animeSubmit2').addEventListener('click', animeDisappearTwo);

const animeQuestionsThree = () => {

    document.querySelector('.animeHard').addEventListener('submit', function() {
        event.preventDefault();
        
        animeAnswerThree();
        document.querySelector('.thirdThree').style.backgroundColor = 'black';
    });
    
}
animeQuestionsThree();

const animeDisappearThree = () => {

    animeQADisappear();
    document.querySelector('.animeHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.animeSubmit3').addEventListener('click', animeDisappearThree);

const animeQuestionsFour = () => {

    document.querySelector('.animeVeryHard').addEventListener('submit', function() {
        event.preventDefault();
        
        animeAnswerFour();
        document.querySelector('.thirdFour').style.backgroundColor = 'black';
    });
    
}
animeQuestionsFour();

const animeDisappearFour = () => {

    animeQADisappear();
    document.querySelector('.animeVeryHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.animeSubmit4').addEventListener('click', animeDisappearFour);

const animeQuestionsFive = () => {

    document.querySelector('.animeInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        animeAnswerFive();
        document.querySelector('.thirdFive').style.backgroundColor = 'black';
    });
    
}
animeQuestionsFive();

const animeDisappearFive = () => {

    animeQADisappear();
    document.querySelector('.animeInsane').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.animeSubmit5').addEventListener('click', animeDisappearFive);

const basketballQuestionsOne = () => {

    document.querySelector('.basketballEasy').addEventListener('submit', function() {
        event.preventDefault();
        
        basketballAnswerOne();
        document.querySelector('.fourthOne').style.backgroundColor = 'black';
    });
    
}
basketballQuestionsOne();

const basketballDisappearOne = () => {

    basketballQADisappear();
    document.querySelector('.basketballEasy').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.basketballSubmit').addEventListener('click', basketballDisappearOne);

const basketballQuestionsTwo = () => {

    document.querySelector('.basketballMedium').addEventListener('submit', function() {
        event.preventDefault();
        
        basketballAnswerTwo();
        document.querySelector('.fourthTwo').style.backgroundColor = 'black';
    });
    
}
basketballQuestionsTwo();

const basketballDisappearTwo = () => {

    basketballQADisappear();
    document.querySelector('.basketballMedium').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.basketballSubmit2').addEventListener('click', basketballDisappearTwo);

const basketballQuestionsThree = () => {

    document.querySelector('.basketballHard').addEventListener('submit', function() {
        event.preventDefault();
        
        basketballAnswerThree();
        document.querySelector('.fourthThree').style.backgroundColor = 'black';
    });
    
}
basketballQuestionsThree();

const basketballDisappearThree = () => {

    basketballQADisappear();
    document.querySelector('.basketballHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.basketballSubmit3').addEventListener('click', basketballDisappearThree);

const basketballQuestionsFour = () => {

    document.querySelector('.basketballVeryHard').addEventListener('submit', function() {
        event.preventDefault();
        
        basketballAnswerFour();
        document.querySelector('.fourthFour').style.backgroundColor = 'black';
    });
    
}
basketballQuestionsFour();

const basketballDisappearFour = () => {

    basketballQADisappear();
    document.querySelector('.basketballVeryHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.basketballSubmit4').addEventListener('click', basketballDisappearFour);

const basketballQuestionsFive = () => {

    document.querySelector('.basketballInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        basketballAnswerFive();
        document.querySelector('.fourthFive').style.backgroundColor = 'black';
    });
    
}
basketballQuestionsFive();

const basketballDisappearFive = () => {

    basketballQADisappear();
    document.querySelector('.basketballInsane').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.basketballSubmit5').addEventListener('click', basketballDisappearFive);

const marvelQuestionsOne = () => {

    document.querySelector('.marvelEasy').addEventListener('submit', function() {
        event.preventDefault();
        
        marvelAnswerOne();
        document.querySelector('.fifthOne').style.backgroundColor = 'black';

    });
    
}
marvelQuestionsOne();

const marvelDisappearOne = () => {

    marvelQADisappear();
    document.querySelector('.marvelEasy').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.marvelSubmit').addEventListener('click', marvelDisappearOne);

const marvelQuestionsTwo = () => {

    document.querySelector('.marvelMedium').addEventListener('submit', function() {
        event.preventDefault();
        
        marvelAnswerTwo();
        document.querySelector('.fifthTwo').style.backgroundColor = 'black';
    });
    
}
marvelQuestionsTwo();

const marvelDisappearTwo = () => {

    marvelQADisappear();
    document.querySelector('.marvelMedium').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.marvelSubmit2').addEventListener('click', marvelDisappearTwo);

const marvelQuestionsThree = () => {

    document.querySelector('.marvelHard').addEventListener('submit', function() {
        event.preventDefault();
        
        marvelAnswerThree();
        document.querySelector('.fifthThree').style.backgroundColor = 'black';
    });
    
}
marvelQuestionsThree();

const marvelDisappearThree = () => {

    marvelQADisappear();
    document.querySelector('.marvelHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.marvelSubmit3').addEventListener('click', marvelDisappearThree);

const marvelQuestionsFour = () => {

    document.querySelector('.marvelVeryHard').addEventListener('submit', function() {
        event.preventDefault();
        
        marvelAnswerFour();
        document.querySelector('.fifthFour').style.backgroundColor = 'black';
    });
    
}
marvelQuestionsFour();

const marvelDisappearFour = () => {

    marvelQADisappear();
    document.querySelector('.marvelVeryHard').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.marvelSubmit4').addEventListener('click', marvelDisappearFour);

const marvelQuestionsFive = () => {

    document.querySelector('.marvelInsane').addEventListener('submit', function() {
        event.preventDefault();
        
        marvelAnswerFive();
        document.querySelector('.fifthFive').style.backgroundColor = 'black';
    });
    
}
marvelQuestionsFive();

const marvelDisappearFive = () => {

    marvelQADisappear();
    document.querySelector('.marvelInsane').style.display = 'none';

}

//onclick make the questions disappear
document.querySelector('.marvelSubmit5').addEventListener('click', marvelDisappearFive);

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

//onclick move the number 2 into the second 500 container
document.querySelector('.secondFive').addEventListener('click', secondFiveCont);

const secondFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.videoGames');
  
  let secondFour = document.querySelector('.secondFour');
  
  //make the number 2 a child of the second 400 container
  secondFour.appendChild(numberFour);

  document.querySelector('.videoGamesQA').style.display = 'block';
  document.querySelector('.gamerVeryHard').style.display = 'block';
}

//onclick move the number 2 into the second 400 container
document.querySelector('.secondFour').addEventListener('click', secondFourCont);

const secondThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.videoGames');
  
  let secondThree = document.querySelector('.secondThree');
  
  //make the number 2 a child of the second 300 container
  secondThree.appendChild(numberThree);

  document.querySelector('.videoGamesQA').style.display = 'block';
  document.querySelector('.gamerHard').style.display = 'block';
}

//onclick move the number 2 into the second 300 container
document.querySelector('.secondThree').addEventListener('click', secondThreeCont);

const secondTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.videoGames');
  
  let secondTwo = document.querySelector('.secondTwo');
  
  //make the number 2 a child of the second 200 container
  secondTwo.appendChild(numberTwo);

  document.querySelector('.videoGamesQA').style.display = 'block';
  document.querySelector('.gamerMedium').style.display = 'block';
}

//onclick move the number 2 into the second 200 container
document.querySelector('.secondTwo').addEventListener('click', secondTwoCont);

const secondOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.videoGames');
  
  let secondOne = document.querySelector('.secondOne');
  
  //make the number 2 a child of the second 100 container
  secondOne.appendChild(numberOne);

  document.querySelector('.videoGamesQA').style.display = 'block';
  document.querySelector('.gamerEasy').style.display = 'block';
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

   document.querySelector('.animeQA').style.display = 'block';
   document.querySelector('.animeInsane').style.display = 'block';
}

//onclick move the number 3 into the third 500 container
document.querySelector('.thirdFive').addEventListener('click', thirdFiveCont);

const thirdFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.anime');
  
  let thirdFour = document.querySelector('.thirdFour');
  
  //make the number 3 a child of the third 400 container
  thirdFour.appendChild(numberFour);

  document.querySelector('.animeQA').style.display = 'block';
  document.querySelector('.animeVeryHard').style.display = 'block';
}

//onclick move the number 3 into the third 400 container
document.querySelector('.thirdFour').addEventListener('click', thirdFourCont);

const thirdThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.anime');
  
  let thirdThree = document.querySelector('.thirdThree');
  
  //make the number 3 a child of the third 300 container
  thirdThree.appendChild(numberThree);

  document.querySelector('.animeQA').style.display = 'block';
  document.querySelector('.animeHard').style.display = 'block';
}

//onclick move the number 3 into the third 300 container
document.querySelector('.thirdThree').addEventListener('click', thirdThreeCont);

const thirdTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.anime');
  
  let thirdTwo = document.querySelector('.thirdTwo');
  
  //make the number 3 a child of the third 200 container
  thirdTwo.appendChild(numberTwo);

  document.querySelector('.animeQA').style.display = 'block';
  document.querySelector('.animeMedium').style.display = 'block';
}

//onclick move the number 3 into the third 200 container
document.querySelector('.thirdTwo').addEventListener('click', thirdTwoCont);

const thirdOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.anime');
  
  let thirdOne = document.querySelector('.thirdOne');
  
  //make the number 3 a child of the third 100 container
  thirdOne.appendChild(numberOne);

  document.querySelector('.animeQA').style.display = 'block';
  document.querySelector('.animeEasy').style.display = 'block';
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

   document.querySelector('.basketballQA').style.display = 'block';
   document.querySelector('.basketballInsane').style.display = 'block';
}

//onclick move the number 4 into the third 500 container
document.querySelector('.fourthFive').addEventListener('click', fourthFiveCont);

const fourthFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.basketball');
  
  let fourthFour = document.querySelector('.fourthFour');
  
  //make the number 4 a child of the third 400 container
  fourthFour.appendChild(numberFour);

  document.querySelector('.basketballQA').style.display = 'block';
  document.querySelector('.basketballVeryHard').style.display = 'block';
}

//onclick move the number 4 into the third 400 container
document.querySelector('.fourthFour').addEventListener('click', fourthFourCont);

const fourthThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.basketball');
  
  let fourthThree = document.querySelector('.fourthThree');
  
  //make the number 4 a child of the third 300 container
  fourthThree.appendChild(numberThree);

  document.querySelector('.basketballQA').style.display = 'block';
  document.querySelector('.basketballHard').style.display = 'block';
}

//onclick move the number 4 into the third 300 container
document.querySelector('.fourthThree').addEventListener('click', fourthThreeCont);

const fourthTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.basketball');
  
  let fourthTwo = document.querySelector('.fourthTwo');
  
  //make the number 4 a child of the third 200 container
  fourthTwo.appendChild(numberTwo);

  document.querySelector('.basketballQA').style.display = 'block';
  document.querySelector('.basketballMedium').style.display = 'block';
}

//onclick move the number 4 into the third 200 container
document.querySelector('.fourthTwo').addEventListener('click', fourthTwoCont);

const fourthOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.basketball');
  
  let fourthOne = document.querySelector('.fourthOne');
  
  //make the number 4 a child of the third 100 container
  fourthOne.appendChild(numberOne);

  document.querySelector('.basketballQA').style.display = 'block';
  document.querySelector('.basketballEasy').style.display = 'block';
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

   document.querySelector('.marvelQA').style.display = 'block';
   document.querySelector('.marvelInsane').style.display = 'block';
}

//onclick move the number 5 into the third 500 container
document.querySelector('.fifthFive').addEventListener('click', fifthFiveCont);

const fifthFourCont = () => {

   event.preventDefault();

  let numberFour = document.querySelector('.marvelMovies');
  
  let fifthFour = document.querySelector('.fifthFour');
  
  //make the number 5 a child of the third 400 container
  fifthFour.appendChild(numberFour);

  document.querySelector('.marvelQA').style.display = 'block';
  document.querySelector('.marvelVeryHard').style.display = 'block';
}

//onclick move the number 5 into the third 400 container
document.querySelector('.fifthFour').addEventListener('click', fifthFourCont);

const fifthThreeCont = () => {

   event.preventDefault();

  let numberThree = document.querySelector('.marvelMovies');
  
  let fifthThree = document.querySelector('.fifthThree');
  
  //make the number 5 a child of the third 300 container
  fifthThree.appendChild(numberThree);

  document.querySelector('.marvelQA').style.display = 'block';
  document.querySelector('.marvelHard').style.display = 'block';
}

//onclick move the number 5 into the third 300 container
document.querySelector('.fifthThree').addEventListener('click', fifthThreeCont);

const fifthTwoCont = () => {

   event.preventDefault();

  let numberTwo = document.querySelector('.marvelMovies');
  
  let fifthTwo = document.querySelector('.fifthTwo');
  
  //make the number 5 a child of the third 200 container
  fifthTwo.appendChild(numberTwo);

  document.querySelector('.marvelQA').style.display = 'block';
  document.querySelector('.marvelMedium').style.display = 'block';
}

//onclick move the number 5 into the third 200 container
document.querySelector('.fifthTwo').addEventListener('click', fifthTwoCont);

const fifthOneCont = () => {

   event.preventDefault();

  let numberOne = document.querySelector('.marvelMovies');
 
  let fifthOne = document.querySelector('.fifthOne');
  
  //make the number 5 a child of the third 100 container
  fifthOne.appendChild(numberOne);

  document.querySelector('.marvelQA').style.display = 'block';
  document.querySelector('.marvelEasy').style.display = 'block';
}

//onclick move the number 5 into the third 100 container
document.querySelector('.fifthOne').addEventListener('click', fifthOneCont);