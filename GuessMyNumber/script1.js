// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").innerText = 'Correct Number';

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value) // for input property
// document.querySelector(".guess").value = 23;

// document.querySelector(".check").addEventListener('click', function(){
//  console.log(document.querySelector(".guess").value)
//  console.log(document.querySelector(".message").innertext = 'Correct Number')

// })

// function for message
 const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
 }



let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Please Enter a Number');
  } else if (guess > 20) {
    displayMessage("EnterNumber between 1 and 20");
  } else if (guess === secretNumber) {
    displayMessage('You Won its correct Number');
    document.querySelector('.number').textContent = secretNumber;
      
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector('.number').style.width = "30rem"

    if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
   

  } else if(guess !== secretNumber){
    if (score > 1) {
        document.querySelector('.message').textContent = guess>secretNumber ? "Too high" : "Too low;"
        score--;
        document.querySelector('.score').textContent = score;
      }else{
          displayMessage('Your chances are completed  playAgain');
          document.querySelector('.score').textContent = 0;
      }
  }
  // Dry Code
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = guess > secretNumber ? "Too high" : "Too low";
//       score--;
//       document.querySelector('.score').textContent = score;

//     }else{
//         document.querySelector('.message').textContent =
//         'Your chances are completed  playAgain';
//         document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if(score>1){
//         document.querySelector('.message').textContent = 'Too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//     }else{
//         document.querySelector('.message').textContent =
//         'Your chances are completed  playAgain';
//         document.querySelector('.score').textContent = 0;   
//   } 
// }

});



// const f = function(){
//     document.querySelector(".again").addEventListener('click', ()=>{
//         document.querySelector('.guess').value = '';
//         document.querySelector('.number').textContent = "?";
//         document.querySelector(".number").style.width = "15rem";
//         document.querySelector('.message').textContent = "Start guessing..."
//         document.querySelector('body').style.backgroundColor = "#222";
//         document.querySelector('.score').textContent = 20;
//         secretNumber = Math.trunc(Math.random() * 20) + 1;
// }

document.querySelector(".again").addEventListener('click', ()=>{
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    // score = 20;
    document.querySelector('.score').textContent = 20;
   
 document.querySelector('.guess').value = '';
 document.querySelector('.number').textContent = "?";
 document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
 document.querySelector('body').style.backgroundColor = "#222";

})