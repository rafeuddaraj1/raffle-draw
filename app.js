/* 
* Title: Raffle Draw Application
* Description: Raffle Draw Application 2021 Practice Time. Some Common Problem Shuffle IIFE 
* Author: Rafe Uddaraj (Rafe JS)
* Data: 9/10/2021
*/

// Selection Part 
const allName = document.getElementById('all-name');
const studentListShow = document.getElementById('show-students');
const studentList = document.getElementById('student-list');
const display = document.getElementById('display');
const giveATryBtn = document.getElementById('give-away');
const firstWinner = document.getElementById('first-winner');
const secondWinner = document.getElementById('second-winner');
const thirdWinner = document.getElementById('third-winner');



// Participant Name Array
let participant = [];

// function 

const createElement = function (text, number) {
  const listItem = document.createElement('li');
  listItem.textContent = `(${number + 1}). ${text}`;
  listItem.className = 'list-group-item';
  return listItem;
};

const shuffle = function (arr) {
  const shuffleArr = [...arr]
  for (let i = shuffleArr.length - 1; i > 0; i--){
    const rand = Math.floor(Math.random() * (i + 1))
    const temp = shuffleArr[rand]
    shuffleArr[rand] = shuffleArr[i]
    shuffleArr[i] = temp
  }
  return shuffleArr
}

allName.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (this.value === '' || this.value === '\n') {
      alert('Please Provide Some Students Names');
      this.value = '';
    } else {
      const names = e.target.value.split(', ');
      participant.push(...names);
      participant.forEach((name, count) => {
        const listItem = createElement(name, count);
        studentListShow.addEventListener('click', function () {
          studentList.appendChild(listItem);
        });
      });
    }
    this.value = '';
  }
});

giveATryBtn.addEventListener('click', function () {
  if (participant.length <= 0) {
    alert('Please Provide Some Students Names');
  } else {
    let shuffleArr = shuffle(participant)
    for (let i = 0; i < shuffleArr.length; i++){
      setTimeout(() => {
        
        display.innerHTML = shuffleArr[i]

        if (shuffleArr.length - 1 === i) {
          
          if (!firstWinner.innerHTML) {
            firstWinner.innerHTML = shuffleArr[i]
            participant.splice(shuffleArr[i],1)
          }else if (!secondWinner.innerHTML) {
            secondWinner.innerHTML = shuffleArr[i]
            participant.splice(shuffleArr[i],1)
          } else if (!thirdWinner.innerHTML) {
            thirdWinner.innerHTML = shuffleArr[i]
            participant.splice(shuffleArr[i], 1)
            display.innerHTML = 'Congratulations'
            this.remove()
          }

        }

      },i*100)
    }
  }
});


