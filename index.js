function findFirstUniqueChar(text) {
    const words = text.split(/[ ,.!?]/);

    function findUniqueChar(word, index = 0) {
        if (index === word.length) {
            return null;
        }

        const char = word[index];
        const restOfWord = word.slice(0, index) + word.slice(index + 1);

        if (!/^[а-яА-Яa-zA-ZіІїЇєЄґҐ]$/u.test(char)) {
            return findUniqueChar(word, index + 1);
        }

        if (restOfWord.includes(char)) {
            return findUniqueChar(word, index + 1);
        } else {
            return char;
        }
    }
    const uniqueChars = [];

    for (const word of words) {
        const uniqueChar = findUniqueChar(word);

        if (uniqueChar) {
            uniqueChars.push(uniqueChar);
        }
    }

    for (const char of uniqueChars) {
        if (uniqueChars.indexOf(char) === uniqueChars.lastIndexOf(char)) {
            return char;
        }
    }

    return null;
}

document
    .getElementById('find-unique-letter-btn')
    .addEventListener('click', function () {
        let text = document.getElementById('text-input').value;
        let uniqueChar = findFirstUniqueChar(text);
        let resultElement = document.getElementById('result');

        if (uniqueChar) {
            resultElement.innerHTML = 'Унікальна літера: ' + uniqueChar;
        } else {
            resultElement.innerHTML = 'Унікальної літери не знайдено';
        }
    });

// smile

const faceButton = document.querySelector('.face-button');
const faceContainer = document.querySelector('.face-container');
const containerCoords = document.querySelector('#container');
const mouseCoords = containerCoords.getBoundingClientRect();

function moveFace(e) {
    const mouseX = e.pageX - containerCoords.offsetLeft;
    const mouseY = e.pageY - containerCoords.offsetTop;

    TweenMax.to(faceButton, 0.3, {
        x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 50,
        y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 50,
        ease: Power4.easeOut,
    });

    TweenMax.to(faceContainer, 0.3, {
        x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 25,
        y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 25,
        ease: Power4.easeOut,
    });
}

faceButton.addEventListener('mousemove', moveFace);

faceButton.addEventListener('mouseenter', function (e) {
    TweenMax.to(faceButton, 0.3, {
        scale: 0.975,
    });
});

faceButton.addEventListener('mouseleave', function (e) {
    TweenMax.to(faceButton, 0.3, {
        x: 0,
        y: 0,
        scale: 1,
    });

    TweenMax.to(faceContainer, 0.3, {
        x: 0,
        y: 0,
        scale: 1,
    });
});
