/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const timeReduce = 100; //how much time is shaved off after every turn
const startingLives = 3;
//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6)];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var currentLives = startingLives;
var timeSeconds = -1;
var intervalID;

function getRandomInt(max) { // randomizes an integer in the range 1 to max (INCLUSIVE)
  return Math.floor(Math.random() * max) + 1;
}

function startGame(){
  //initialize game variables
  currentLives = startingLives;
  clueHoldTime = 1000;
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
  
    // swap the Start and Stop buttons
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 225.5,
  2: 273.6,
  3: 336.6,
  4: 395,
  5: 415.2,
  6: 470.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  displayImg(btn);
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  hideImg(btn);
}

function displayImg(btn) {
  document.getElementById("img"+btn).classList.remove("hidden")
}
function hideImg(btn) {
  document.getElementById("img"+btn).classList.add("hidden")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= timeReduce;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  timeSeconds = (-1 * Math.round(progress * ((clueHoldTime + cluePauseTime) / 1000))); // this makes it so the timer only truly begins to run after all the colors are displayed
  intervalID = setInterval(displayTime, 1000);
}

function displayTime() {
  if (!gamePlaying) return;

  timeSeconds++;
  console.log("a second has passed");
  if (timeSeconds > 10) {
    loseGameTimeout();
    clearInterval(intervalID);
    timeSeconds = 0;
  }
  // only display the timer when its > 0 (so the negative offset isn't shown)
  if (timeSeconds >= 0) document.getElementById("time").innerHTML = timeSeconds;
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  var isRightChoice = (btn == pattern[guessCounter]);
  
  // add game logic here
  if (!isRightChoice && currentLives == 1) {
    loseGame();
    clearInterval(intervalID);
  }
  
  else if (!isRightChoice) {
    currentLives--;
    alert("You missed! You have " + currentLives + " lives left.");
  }
  
  else if (guessCounter < progress){
    guessCounter++;
  }
  
  else if (progress < (pattern.length - 1)) {
    clearInterval(intervalID);
    progress++;
    playClueSequence();
  }
  
  else winGame();
}

function loseGameTimeout() {
  stopGame();
  alert("Time is up. You lost.");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
