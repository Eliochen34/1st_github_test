
let myVaiable;
myVaiable = 'Bob';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/todolist.png') {
      myImage.setAttribute ('src','images/checklist.png');
    } else {
      myImage.setAttribute ('src','images/todolist.png');
    }
}

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate'){
//     alert('Yay, I love chocolate ice cream!');
// }else {
//     alert(Awwww, 'but chocolate is my favorite...' );
// }

// function multiply(num1, num2){
//     let result = num1*num2;
//     return result;
// }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }





// multiply(4,7);
// multiply(20,20);
// multiply(0.5,3);
