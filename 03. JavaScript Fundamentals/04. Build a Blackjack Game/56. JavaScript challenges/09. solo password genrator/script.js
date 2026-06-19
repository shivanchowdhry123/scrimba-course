const passBox1 = document.getElementById('passBox1');
const passBox2 = document.getElementById('passBox2');
const generateBtn = document.getElementById('generateBtn');

const lengthRange = document.getElementById('lengthRange');
const lengthVal = document.getElementById('lengthVal');
const numbersEl = document.getElementById('includeNumbers');
const symbolsEl = document.getElementById('includeSymbols');

const charSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Simple update value track for slider
lengthRange.addEventListener('input', (e) => {
    lengthVal.textContent = e.target.value;
});

function generateSinglePasscode() {
    let length = parseInt(lengthRange.value);
    let allowedChars = charSets.uppercase + charSets.lowercase; // Base letters always on
    let mandatoryChars = [];

    // Always include a guaranteed uppercase and lowercase
    mandatoryChars.push(charSets.uppercase[Math.floor(Math.random() * charSets.uppercase.length)]);
    mandatoryChars.push(charSets.lowercase[Math.floor(Math.random() * charSets.lowercase.length)]);

    // Check optional stretch goals
    if (numbersEl.checked) {
        allowedChars += charSets.numbers;
        mandatoryChars.push(charSets.numbers[Math.floor(Math.random() * charSets.numbers.length)]);
    }
    if (symbolsEl.checked) {
        allowedChars += charSets.symbols;
        mandatoryChars.push(charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]);
    }

    let generatedPasscode = [...mandatoryChars];
    const remainingLength = length - mandatoryChars.length;

    // Fill out the remaining requested length
    for (let i = 0; i < remainingLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPasscode.push(allowedChars[randomIndex]);
    }

    // Shuffle characters to avoid predictable patterns at the beginning
    for (let i = generatedPasscode.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [generatedPasscode[i], generatedPasscode[j]] = [generatedPasscode[j], generatedPasscode[i]];
    }

    return generatedPasscode.join('');
}

function updatePasscodes() {
    passBox1.textContent = generateSinglePasscode();
    passBox2.textContent = generateSinglePasscode();
}

// Stretch Goal: Copy-on-click implementation
function setupCopyFeature(element) {
    element.addEventListener('click', () => {
        const text = element.textContent;
        if (text === 'Copied!') return;
        
        navigator.clipboard.writeText(text).then(() => {
            const originalText = text;
            element.textContent = 'Copied!';
            element.classList.add('copied');
            
            setTimeout(() => {
                element.textContent = originalText;
                element.classList.remove('copied');
            }, 1000);
        });
    });
}

generateBtn.addEventListener('click', updatePasscodes);
setupCopyFeature(passBox1);
setupCopyFeature(passBox2);

// Initial call on execution
updatePasscodes();