let letters = ['S', 'O', 'U', 'N', 'D'];
let audios = {};

function addLetterButtons() {
    const appContainer = document.querySelector('#app-container');
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.setAttribute('class', 'btn-sound');
        button.innerText = letter;
        appContainer.appendChild(button);
    });
}

function createAudios(){
    for (let i = 0; i < letters.length; i++) {
        audios[letters[i]] = new Audio('./audio/'+ letters[i] + '.wav');
    }
}

function addClickButtonListeners() {
    const appContainer = document.querySelector('#app-container').children;
    const buttonList = Array.from(appContainer);
    buttonList.forEach((button) => {
        button.addEventListener('click', (event) => {
            audios[button.innerText].play();
        });
    });
}

function addKeydownListeners() {
    window.addEventListener('keydown', (event) => {
        let letter = event.key.toUpperCase();
        if (audios[letter]) {
            audios[letter].play()
        }
    });
}

function init(){
    addLetterButtons();
    createAudios();
    addClickButtonListeners();
    addKeydownListeners();
}

init();






