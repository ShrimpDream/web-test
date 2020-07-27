let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if ((mySrc === 'https://dingyue.ws.126.net/M4imylKU1aSJyl7S6Xk20ZRBJUAz3rkmy1krJuQswslN11561361935985.jpeg')) {
        myImage.setAttribute('src', 'https://i.imgur.com/Q6wTgHV.jpg');
    } else {
        myImage.setAttribute('src', 'https://dingyue.ws.126.net/M4imylKU1aSJyl7S6Xk20ZRBJUAz3rkmy1krJuQswslN11561361935985.jpeg');
    }
}
