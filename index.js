function feedMe() {
    const cakeCount = document.getElementById('cakeCount').value;
    const cakeContainer = document.getElementById('cakeContainer');
    const messageContainer = document.getElementById('messageContainer');
    
    // Clear previous cakes and messages
    cakeContainer.innerHTML = '';
    messageContainer.innerHTML = '';

    if (cakeCount === '0') {
        messageContainer.innerText = "Go on, it's my birthday!";
        cakeContainer.innerHTML = '<div class="cake">🎂</div>';
    } else if (cakeCount >= 1 && cakeCount <= 5) {
        messageContainer.innerText = 'Enjoy!';
        for (let i = 0; i < cakeCount; i++) {
            cakeContainer.innerHTML += '<div class="cake">🧁</div>';
        }
    } else if (cakeCount > 5) {
        const randomCakes = Math.floor(Math.random() * 5) + 1;
        messageContainer.innerText = `Maybe too many?! Here's a random number of cupcakes for you to enjoy!`;
        for (let i = 0; i < randomCakes; i++) {
            cakeContainer.innerHTML += '<div class="cake">🧁</div>';
        }
    }
}
