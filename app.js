window.addEventListener('load',init);

const levels={
  easy:5,
  medium:3,
  hard:2
}

const currentLevel=levels.easy;

let time=currentLevel;
let score=0;
let isPlaying;

//Dom elements

const word=document.querySelector('#word');
const second=document.querySelector('.second');
const input=document.querySelector('#input');
const notification=document.querySelector('.notification');
const scoreD=document.querySelector('#score');
const timeD=document.querySelector('#time');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];


// Init game

function init(){
  //show number of seconds in uI
  second.innerHTML=currentLevel;
  // load word from array
  showWord(words);

  //match words
  input.addEventListener('input',startMatch);

  // call countdown every seconds
  setInterval(countdown,1000);

  //Check status of game

  setInterval(showStatus,1000);


}


//Start match
function startMatch(){
  if(matchWords()){
    isPlaying=true;
    time=currentLevel+1;
    showWord(words);
    input.value='';
    score++;
  }

  if(score ===-1){
    scoreD.innerHTML=0;

  }
  else{
    scoreD.innerHTML=score;
  }
}

//Match words
function matchWords(){
  if(input.value==word.innerHTML){
    notification.innerHTML='Correct!!';

    return true;
  }
  else{
    notification.innerHTML='';
    return false;
  }

}

//Show words
function showWord(words){
  const randIndex=Math.floor(Math.random()*words.length);
  // console.log(randIndex);
  word.innerHTML=words[randIndex];
}

//countdown of game
function countdown(){
  if(time>0){
    time--;
  }
  else if(time===0){
    isPlaying=false;
  }
  timeD.innerHTML=time;
}

//Status of game

 function showStatus(){
   if(!isPlaying && time===0){

     notification.innerHTML='Game Over!!';

     score=-1;
   }

 }
