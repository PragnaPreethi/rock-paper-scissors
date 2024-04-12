 let choices=document.querySelectorAll(".choice")
 let msg_display=document.querySelector("#msg");
 let countu=0,countc=0;
 let userScore=document.querySelector("#user");
 let compScore=document.querySelector("#comp");



 const getComChoice=()=>{
    const options=['rock','paper','scissors'];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
 }

 //fun for win
 //case1:draw
 const drawgame=()=>{
    console.log("draw");
    msg_display.innerText="draw";
    msg_display.style.backgroundColor = "blue";
 }
//case 2:win or lose
const showWin=(userWin,userChoice,comChoice)=>{
    if(userWin){
        countu++;
        userScore.innerText=countu;
        msg_display.innerText=`you won! your ${userChoice} beats ${comChoice} `;
        msg_display.style.backgroundColor = "green";
    }
    else{
        countc++;
        compScore.innerHTML=countc;
        msg_display.innerText=`You Lost!${comChoice} beats your ${userChoice}`;
        msg_display.style.backgroundColor = "red";
    }
}

 const playgame=(userChoice)=>{
    //userchoice
    console.log("user clicked "+userChoice);
    //com
    let comChoice=getComChoice();
    console.log("computer  clicked "+comChoice);
    //check for conditons to win or lose
    //case 1: draw
    if(userChoice==comChoice)
    {
       drawgame();
    }
    //case 2:win or lose
    else
    {//user has 3 options,computer has 3 options
        let userWin=true;
        if(userChoice=="rock"){
            //comp can choose paper or scissors
            userWin=comChoice==='paper'?false:true;
        }
        else if(userChoice=='paper'){
              //com=rock,scissors;
              userWin=comChoice==='scissors'?false:true;
        }
        else{
            userWin=comChoice==='rock'?false:true;
        }
        showWin(userWin,userChoice,comChoice);
    }
 }

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         playgame(userChoice);
    });
 });