const choices=["rock","paper","scissor"]
let player=document.getElementById("player")
let computer=document.getElementById("computer")
let resultdisplay=document.getElementById("result")
let playercount=document.getElementById("playercount")
let computercount=document.getElementById("computercount")
let pcount=0;
let ccount=0

function play(choice){
    let computerchoice=choices[Math.floor(Math.random() * 3)]
    let result=" "
    if(computerchoice===choice){
        result=`ITS'S A TIE !`
    }else{
        switch(choice){
            case "rock":
                if(computerchoice==="scissor"){
                    result="YOU WIN!"

                }else{
                    result="YOU LOSE!"

                }
                break;
            case "paper":
                if(computerchoice==="rock"){
                    result="YOU WIN!"
    
                }else{
                    result="YOU LOSE!"
    
                }
                break;
            case "scissor":
                if(computerchoice==="paper"){
                    result="YOU WIN!"
    
                }else{
                    result="YOU LOSE!"
    
                }
                break;
        }

    }
    player.textContent=`PLAYER :${choice}`
    computer.textContent=`COMPUTER :${computerchoice}`
    resultdisplay.textContent=result;

    if(result==="YOU WIN!"){
        pcount++
        playercount.textContent=pcount
        playercount.classList.add("greentext")
        resultdisplay.style.color="green"
    }
    else if(result==="YOU LOSE!"){
        ccount++;
        computercount.textContent=ccount
        computercount.classList.add("redtext")
        resultdisplay.style.color="red"
    }else{
        resultdisplay.style.color="black"
    }


}