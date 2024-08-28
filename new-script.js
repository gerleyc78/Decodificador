document.getElementById('btnEncrypt').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput === "") {
        alert("Por favor, ingrese un mensaje para codificar o decodificar.");
        return;
    }
    const codedMessage = codeMessage(userInput);
    document.getElementById('output').innerText = `Mensaje codificado: ${codedMessage}`;
});

document.getElementById('btnDecrypt').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput === "") {
        alert("Por favor, ingrese un mensaje para codificar o decodificar.");
        return;
    }
    const decodedMessage = decodeMessage(userInput);
    document.getElementById('output').innerText = `Mensaje decodificado: ${decodedMessage}`;
});

function codeMessage(message) {
    let coded = '';
    for (let i = 0; i < message.length; i++) {
        coded += String.fromCharCode(message.charCodeAt(i) + 5);
    }
    return coded;
}

function decodeMessage(message) {
    let decoded = '';
    for (let i = 0; i < message.length; i++) {
        decoded += String.fromCharCode(message.charCodeAt(i) - 5);
    }
    return decoded;
}
