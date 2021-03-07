const body = document.querySelector('body');
const container = document.createElement('div');
const resultContainer = document.createElement('div');
const key = document.createElement('div');
const img = document.createElement('img');
const codeKey = document.createElement('div');
const blinkingNote = document.createElement('p');


body.append(container);
body.append(blinkingNote);
body.append(resultContainer);
resultContainer.append(key);
resultContainer.append(img);
resultContainer.append(codeKey);

blinkingNote.classList.toggle('blinkingNotes');
resultContainer.classList.toggle('resultContainer');
key.classList.toggle('key');
codeKey.classList.toggle('codeKey');
img.classList.toggle('img');
img.setAttribute('src', 'arrow.png');


blinkingNote.textContent = 'PRESS A KEY';
container.textContent = 'Key Code Genrater';
container.classList.toggle('container');

window.addEventListener('click', window.onkeydown = (e) => {
    blinkingNote.style.display = 'none';
    img.style.animation = 'opacity 3s ease-in-out infinite';
    img.style.opacity = '1';

    //strict mouse click
    if(e.code == undefined){
        return;
    }
    console.log(e.code.length);

    key.innerText = e.key;
    codeKey.innerText = e.keyCode;    
});

