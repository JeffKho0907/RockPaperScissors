function getComputerChoice() {
    let x = Math.floor(Math.random()*3);

    if (x === 0) {
        x = 'paper';
    } else if (x ===1) {
        x = 'rock';
    } else if (x ===2) {
        x = 'scissors';
    }

    
    return x;
}



function shoot(compChoice, userChoice) {
    
        userChoice = prompt('rock, paper, scissors?');
        compChoice = getComputerChoice();
        console.log(compChoice);    
        /*if((userChoice.toLowerCase() !== 'rock') ){
            alert('Please select only rock, paper or scissors!')
            return shoot();*/
        
         if ((userChoice.toLowerCase()=='rock' && compChoice =='scissors') || (userChoice.toLowerCase()== 'scissors' && compChoice == 'paper' )|| (userChoice.toLowerCase() == 'paper' && compChoice =='rock')){
            alert('User Wins');
            return 'win';
        
        }else if((userChoice.toLowerCase()=='rock' && compChoice =='rock') || (userChoice.toLowerCase()== 'scissors' && compChoice == 'scissors' )|| (userChoice.toLowerCase() == 'paper' && compChoice =='paper')) {
            alert('Tie Round');
            return 'tie';
        } else if((userChoice.toLowerCase()=='scissors' && compChoice =='rock') || (userChoice.toLowerCase()== 'paper' && compChoice == 'scissors' )|| (userChoice.toLowerCase() == 'rock' && compChoice =='paper')) {
            alert('Computer Wins');
            return 'lose';
        } else {
            alert('Input can only be rock, paper and scissors!')
        }

     
}


function game() {
     
    let userScore = 0;
    let compScore = 0;
    
    for ( let i= 0; i<10; i++) {
        let x = shoot();
        
        if(x == 'win') {
            userScore++;
            alert(`Computer: ${compScore}  You:${userScore}`);
        } else if(x == 'lose'){
            compScore++
            alert(`Computer: ${compScore}  You:${userScore}`);
        } else if (x == 'tie'){
            
            alert(`Computer: ${compScore}  You:${userScore}`);
        } else {
            continue;
        }
        

        if(compScore == 3 || userScore == 3) break;
        
    }

    if (compScore>userScore) {
        alert('The Computer beats you')
    } else {
        alert('You win!')
    }
}

game();

