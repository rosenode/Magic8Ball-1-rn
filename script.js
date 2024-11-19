
let userName=''
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello, Jane!');

let userQuestion = prompt('Ask a question!');

let eightBall=''
let randomNumber = Math.floor(Math.random() * 7);
switch(randomNumber) {
  case 0: eightBall='It is certain.';
  image="caseZeroImage.png";
    break;
  case 1: eightBall='It is decidedly so.';
  image="caseOneImage.png";
    break;
  case 2: eightBall='Reply hazy try again.';
  image="caseTwoImage.png";
   break;
  case 3: eightBall='Cannot predict now.';
  image="caseThreeImage.png";
    break;
  case 4: eightBall='Do not count on it.';
  image="caseFourImage.png";
    break;
  case 5: eightBall='My sources say no.';
  image="caseFiveImage.png";
    break;
  case 6: eightBall='Outlook not so good.';
  image="caseSixImage.png";
    break;
  case 7: eightBall='Signs point to yes.';
  image="caseSevenImage.png";
    break;
}

switch(eightBall) {
  case 0: document.getElementById('eightImage').src = 'caseZeroImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 1: document.getElementById('eightImage').src = 'caseOneImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 2: document.getElementById('eightImage').src = 'caseTwoImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 3: document.getElementById('eightImage').src = 'caseThreeImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 4: document.getElementById('eightImage').src = 'caseFourImage.jpg';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 5: document.getElementById('eightImage').src = 'caseFiveImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 6: document.getElementById('eightImage').src = 'caseSixImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
  case 7: document.getElementById('eightImage').src = 'caseSevenImage.png';
  document.getElementById('eightImage').style.display = 'block';
  break;
}

let theQuestion = `${userQuestion}`
let theAnswer = `${eightBall}`

let OutputDiv = document.getElementById("OutputDiv");

OutputDiv.innerHTML = `<p>${theAnswer}</p>`;
OutputDiv2.innerHTML = `<p>${theQuestion}</p>`;
