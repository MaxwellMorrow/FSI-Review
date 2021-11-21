








//onload set vote counts
let dogVotes = localStorage.getItem('dogVotes');
if (dogVotes === null){
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}
document.querySelector('#doggo-votes').textContent = dogVotes;

let catVotes = localStorage.getItem('catVotes');
if (catVotes === null){
    catVotes = 0;
} else {
    catVotes = parseInt(catVotes)
}
document.querySelector('#catto-votes').textContent = catVotes;

let fishVotes = localStorage.getItem('fishVotes');
if (fishVotes === null){
    fishVotes = 0;
} else {
    fishVotes = parseInt(fishVotes)
}
document.querySelector('#fish-votes').textContent = fishVotes;



//trying to grab total votes into local storage
document.querySelector('#total-votes').textContent = localStorage.getItem('totalVotes')



//vote counter selectors
let dogVoteCt = document.querySelector('#doggo-votes');
let catVoteCt = document.querySelector('#catto-votes');
let fishVoteCt = document.querySelector('#fish-votes');
let totalVoteCt = document.querySelector('#total-votes');


//Animal div selectors
let dogDiv = document.querySelector('#doggo');
let catDiv = document.querySelector('#catto');
let fishDiv = document.querySelector('#fish');

//create and append dog vote button
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = 'Vote for Doggo';
dogDiv.append(dogVoteBtn);

//create and append cat vote button
let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = 'Vote for Catto';
catDiv.append(catVoteBtn);

//create and append fish vote button
let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = 'Vote for Fish';
fishDiv.append(fishVoteBtn);

//Dog vote button event listener
dogVoteBtn.addEventListener('click', function(){
   dogVotes = dogVotes + 1
   dogVoteCt.textContent = dogVotes
   localStorage.setItem('dogVotes',dogVotes)
   totalVoteCt.textContent = dogVotes + catVotes + fishVotes
   localStorage.setItem('totalVotes', dogVotes + catVotes + fishVotes)
})

catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1
    catVoteCt.textContent = catVotes
    localStorage.setItem('catVotes',catVotes)
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    localStorage.setItem('totalVotes', dogVotes + catVotes + fishVotes)
 })

 fishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1
    fishVoteCt.textContent = fishVotes
    localStorage.setItem('fishVotes',fishVotes)
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    localStorage.setItem('totalVotes', dogVotes + catVotes + fishVotes)
 })

 //subtract dog vote button
let subdogVoteBtn =document.createElement('button');
subdogVoteBtn.textContent = "downvote Doggo";
dogDiv.append(subdogVoteBtn);

subdogVoteBtn.addEventListener('click', function(){
    dogVotes = dogVotes - 1
    dogVoteCt.textContent = dogVotes
    localStorage.setItem('dogVotes',dogVotes)
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    localStorage.setItem('totalVotes', dogVotes + catVotes + fishVotes)
 })

 //subtract cat button 

 let subcatVoteBtn = document.createElement('button');
 subcatVoteBtn.textContent= "downvote Catto";
 catDiv.append(subcatVoteBtn);

 subcatVoteBtn.addEventListener('click', function(){
    catVotes = catVotes - 1
    catVoteCt.textContent = catVotes
    localStorage.setItem('catVotes',catVotes)
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    localStorage.setItem('totalVotes', dogVotes + catVotes + fishVotes)
 })

 // subtract fish button

 let subfishVoteBtn = document.createElement('button');
 subfishVoteBtn.textContent="downvote Fish";
 fishDiv.append(subfishVoteBtn);

 subfishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes - 1
    fishVoteCt.textContent = fishVotes
    localStorage.setItem('catVotes',catVotes)
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    localStorage.setItem('totalVotes', dogVotes + catVotes + fishVotes)
 })

let favBtn = document.querySelector('#favbtn')

favBtn.addEventListener('click', function(){
    if (dogVotes > catVotes , fishVotes){
        console.log('dog wins')
    }else if (catVotes > dogVotes , fishVotes){
        console.log('cat wins')
    }
})

