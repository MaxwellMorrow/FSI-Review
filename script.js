



//onload set votes

let dogVotes = parseInt(localStorage.getItem('dogVotes'));
if (dogVotes === null){
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}
console.log(dogVotes)
document.querySelector('#doggo-votes').textContent = dogVotes;


let catVotes = 0;



let fishVotes= 0;




//selectors for each Animal Div
let dogDiv = document.querySelector('#doggo');
let catDiv = document.querySelector('#catto');
let fishDiv = document.querySelector('#fish');

// Created and append dog vote button
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = 'Vote for Doggo';
dogDiv.append(dogVoteBtn)

//created and append cat vote button
let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = 'Vote for Catto';
catDiv.append(catVoteBtn)

//created and append fish vote button 
let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = 'Vote for Fish';
fishDiv.append(fishVoteBtn)

dogVoteBtn.addEventListener('click', function()
{
    dogVotes = dogVotes + 1;
    console.log(dogVotes)
    document.querySelector('#doggo-votes').textContent = dogVotes;
    localStorage.setItem('dogVotes', dogVotes)

    document.querySelector('#total-votes').textContent = dogVotes + catVotes + fishVotes;
})
catVoteBtn.addEventListener('click', function ()
{
    catVotes = catVotes + 1;
    document.querySelector('#catto-votes').textContent = catVotes;
    document.querySelector('#total-votes').textContent = dogVotes + catVotes + fishVotes;
})
fishVoteBtn.addEventListener('click', function()
{
    fishVotes = fishVotes + 1
    document.querySelector('#fish-votes').textcontent = fishVotes;
    document.querySelector('#total-votes').textContent = dogVotes + catVotes + fishVotes;
})




