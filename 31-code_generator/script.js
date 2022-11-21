const clipboardEl = document.getElementById('clipboard');
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateBtn = document.querySelector('.generate-btn');

clipboardEl.addEventListener('click', () => {
    const code = resultEl.innerText;

    if(!code) { return };

    navigator.clipboard.writeText(code);
    alert('Votre code a été copié!')
})

// les 4 fonctions qui génère respectivement min, maj, nbr et chars spéciaux
const randomFunctions = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// function getRandomUpperCase() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomLowerCase() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//     const symbols = '!?-_@#^$%&*~';

//     return symbols[Math.floor(Math.random() * symbols.length)];
// }



// ma propre solution 4 fonctions (intervalle de nombre)
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48);
}

function getRandomSymbol() {
    const symbols = '!?-_@#^$%&*~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}



generateBtn.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generateCode(hasUpper, hasLower, hasNumber, hasSymbol, length);
})

function generateCode(upper, lower, number, symbol, length) {
    let generatedCode = '';

    const getTypesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(getTypesCount === 0) {
        return 'Veuillez choisir au moins un type';
    }

    for(let i = 0; i < length; i += getTypesCount) {
        typesArr.forEach(type => {
            const functionName = Object.keys(type)[0];
            generatedCode += randomFunctions[functionName]();
        });
    }

    return generatedCode.slice(0, length);
}