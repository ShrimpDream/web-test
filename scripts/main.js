let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if ((mySrc === 'images/redemption.jpg')) {
        myImage.setAttribute('src', 'images/trade.png');
    } else {
        myImage.setAttribute('src', 'images/redemption.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Dance With ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let sotredName = localStorage.getItem('name');
    myHeading.textContent = 'Dance With ' + sotredName;
}

myButton.onclick = function() {
    setUserName();
}
