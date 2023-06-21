let player={name:"Mathu",credits:100};
let isAlive=false;
let game_res=false;
let cards=[];
let sum=0;
let message="";
document.getElementById("player").textContent=player.name+" : $"+player.credits;
function getRandomCard(){
   let rand_no=Math.floor(Math.random()*13)+1;
  if(rand_no>10){
    return 10;
  }else if(rand_no===1){
    return 11;
  }else{
    return rand_no;
  }
}
function startgame(){
  isAlive=true;
  let first=getRandomCard();
  let second=getRandomCard();
  cards=[first,second];
  sum=first+second;
  rendergame();
}
function rendergame(){
if(sum<=20){
  message="Do you want to draw a new card?";
  player.credits-=5;
}
else if(sum===21){
  message="Congratulations! You've got Blackjack";
  game_res=true;
  player.credits+=50
}
else if(sum>21){
  message="You're out of the game!";
  isAlive=false;
}
  document.getElementById("message-el").textContent=message;
  document.getElementById("disp-sum").textContent="Sum : "+sum;
  document.getElementById("cards-el").textContent="Cards : ";
  for(let i=0;i<cards.length;i++){
    document.getElementById("cards-el").textContent+=cards[i]+" ";
  }
  document.getElementById("player").textContent=player.name+" : $"+player.credits;
}
function newcard(){
  if (isAlive===true && game_res===false){
  let card_new=getRandomCard();
  sum+=card_new;
  cards.push(card_new);
  rendergame();
  }
}