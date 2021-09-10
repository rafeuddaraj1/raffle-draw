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


const shuffle = function (arr) {
  const shuffleArr = [...arr];
  for (let i = shuffleArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    const temp = shuffleArr[rand];
    shuffleArr[rand] = shuffleArr[i];
    shuffleArr[i] = temp;
  }
  return shuffleArr;
};

giveATryBtn.addEventListener('click', function () {
  if (participant.length === 0) {
    alert('Please Provide Some Students ');
  } else {
    const shuffleName = shuffle(participant);
    console.log(shuffleName);
    shuffleName.forEach((names, index) => {
      setTimeout(() => {
        display.innerHTML = shuffleName[index];

        if (shuffleName.length - 1 === index) {

          if (!firstWinner.innerHTML) {
            const ind = participant.indexOf(shuffleName[index]);
            firstWinner.innerHTML = shuffleName[index];
            participant.splice(ind, 1);
          }
          else if (!secondWinner.innerHTML) {
            const ind = participant.indexOf(shuffleName[index]);
            secondWinner.innerHTML = shuffleName[index];
            participant.splice(ind, 1);
          }
          else if (!thirdWinner.innerHTML) {
            const ind = participant.indexOf(shuffleName[index]);
            thirdWinner.innerHTML = shuffleName[index];
            participant.splice(ind, 1);
          }

        }
      }, index * 100);
    });
  }
  console.log(participant);
});

// const nameCollection = function (event) {
//   if (event.key === 'Enter') {
//     if (this.value === '' || this.value === '\n') {
//       alert('Please Provide Some Students Names')
//     } else {
//       const names = event.target.value.split(', ')
//       this.value = ''
//       nameStore(names,participant,studentList,studentListShow)
//     }
//   }
// }


// const nameStore = function (names,participantNames,listShow,showBtn) {
//   const name = names
//   participantNames.push(...name)
//   participantNames.forEach(participantName => {
//     const listItem = createElement(participantName)
//     showBtn.onclick = studentsListShow(listShow,listItem)
//   })
// }

// const studentsListShow = function (listShow, listItem) {
//   listShow.appendChild(listItem)
// }



// const giveATryAction = function () {
//   if (participant.length === 0) {
//     alert('Please Provide Some Students')
//   } else {
//     const shuffleArr = shuffle(participant)
//     shuffleArr.forEach((names, index, arr) => {
//       setTimeout(()=>displayBind(index, arr, display), 100 * index)
//     })
//   }
// }


// const displayBind = function (index,arr,display) {
//   display.innerHTML = arr[index]
//   if (firstWinner) {
//     winner(index,arr,firstWinner.innerHTML)
//   }
//   else if (secondWinner) {
//     winner(index,arr,secondWinner.innerHTML)
//   }
//   else if (thirdWinner) {
//     winner(index,arr,thirdWinner.innerHTML)
//   }
// }

// const winner = function (index,arr,condition) {
//   if (!condition) {
//     condition = arr[index]
//     const ind = participant[arr[index]]
//     participant.splice(ind)
//   } 
// }




// allName.addEventListener('keypress', nameCollection);
// giveATryBtn.addEventListener('click',giveATryAction)