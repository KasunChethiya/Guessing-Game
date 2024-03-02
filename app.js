let num = Math.random();
let inputNum;
let randomNum = num*10;
randomNum = Math.round();

function game(){
   
    while(randomNum==inputNum){
        if(randomNum<inputNum){
            console.log("Your number is too much"); break;
        }
        
        else if(randomNum>inputNum){
            console.log("Your number is larger"); break;
        }
        else {
            console.log("You won")
        }
    }

}




