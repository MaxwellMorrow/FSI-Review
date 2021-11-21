









//count selectors
let dogVoteCt = document.querySelector('#doggo-votes');
let catVoteCt = document.querySelector('#catto-votes');
let fishVoteCt = document.querySelector('#fish-votes');
let totalVoteCt = document.querySelector('#total-votes');
//div selectors
let dogDiv = document.querySelector('#doggo');
let catDiv = document.querySelector('#catto');
let fishDiv = document.querySelector('#fish');

//onload vote count dog
let dogVotes = localStorage.getItem('dogvotes')
if(dogVotes === null){
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}
dogVoteCt.textContent = dogVotes


//onload vote count cat
let catVotes = localStorage.getItem('catvotes')
if(catVotes === null){
    catVotes = 0;
} else {
    catVotes = parseInt(catVotes)
}
catVoteCt.textContent = catVotes


//onload vote count fish
let fishVotes = localStorage.getItem('fishvotes')
if(fishVotes === null){
    fishVotes = 0;
} else {
    fishVotes = parseInt(fishVotes)
}
fishVoteCt.textContent = fishVotes
//total vote count set
let totalVotes = dogVotes + catVotes + fishVotes
totalVoteCt.textContent = totalVotes


//dog vote button
dogVoteBtn = document.createElement('button');
console.log(dogVoteBtn);
dogVoteBtn.textContent = ('Vote for Doggo');
dogDiv.append(dogVoteBtn);

//cat vote button
catVoteBtn = document.createElement('button');
console.log(catVoteBtn);
catVoteBtn.textContent = ('Vote for Catto');
catDiv.append(catVoteBtn);

//fish vote button
fishVoteBtn = document.createElement('button');
console.log(fishVoteBtn);
fishVoteBtn.textContent = ('Vote for Fish');
fishDiv.append(fishVoteBtn);

//dog vote button event listener
dogVoteBtn.addEventListener('click',function(){
    dogVotes = dogVotes + 1 
    dogVoteCt.textContent = dogVotes
    localStorage.setItem('dogvotes',dogVotes);
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
   
})

//cat vote button event listener
catVoteBtn.addEventListener('click',function(){
    catVotes = catVotes + 1 
    catVoteCt.textContent = catVotes
    localStorage.setItem('catvotes',catVotes);
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    
})

//fish vote button even listener
fishVoteBtn.addEventListener('click',function(){
    fishVotes = fishVotes + 1 
    fishVoteCt.textContent = fishVotes
    localStorage.setItem('fishvotes',fishVotes);
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    
})

//sub dog vote button
subdogVoteBtn = document.createElement('button');
console.log(subdogVoteBtn);
subdogVoteBtn.textContent = ('Downvote Doggo');
dogDiv.append(subdogVoteBtn);

//sub cat vote button
subcatVoteBtn = document.createElement('button');
console.log(subcatVoteBtn);
subcatVoteBtn.textContent = ('Downvote Catto');
catDiv.append(subcatVoteBtn);

//sub fish vote button
subfishVoteBtn = document.createElement('button');
console.log(subfishVoteBtn);
subfishVoteBtn.textContent = ('Downvote Fish');
fishDiv.append(subfishVoteBtn);

// sub dog vote button even listner
subdogVoteBtn.addEventListener('click',function(){
    if(dogVotes > 0){
    dogVotes = dogVotes - 1 
    dogVoteCt.textContent = dogVotes
    localStorage.setItem('dogvotes',dogVotes);
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    }
})

//sub cat vote button event listener
subcatVoteBtn.addEventListener('click',function(){
    if(catVotes > 0){
    catVotes = catVotes - 1 
    catVoteCt.textContent = catVotes
    localStorage.setItem('catvotes',catVotes);
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    }
})

//sub fish vote button event listener
subfishVoteBtn.addEventListener('click',function(){
    if(fishVotes > 0){
    fishVotes = fishVotes - 1 
    fishVoteCt.textContent = fishVotes
    localStorage.setItem('fishvotes',fishVotes);
    totalVoteCt.textContent = dogVotes + catVotes + fishVotes
    }
})

let favbtn = document.querySelector('#favbtn');
favbtn.addEventListener('click',function(){
    
})