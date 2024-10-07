document.getElementById('surpriseBtn').addEventListener('click', function() {
    const messages = [
        "Seninle her şey daha güzel!",
        "Gülümsemek sana çok yakışıyor!",
        "Bana her zaman ilham veriyorsun.",
        "Bu dünya senin gibi birine sahip olduğu için çok şanslı!",
        "Seni sevmek benim en büyük şansım!",
        "Yüzündeki gülüş beni her defasında mutlu ediyor!",
        "Ne zaman karanlık hissetsen, ışığın benim!",
        "Seninle olduğum her an paha biçilemez!",
        "Zor günlerin bile sonu gelir, sen güçlü birisin!",
        "Hayatımın en güzel rengi sensin!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById('randomMessage').textContent = randomMessage;
    document.getElementById('message').classList.remove('hidden');
});

// Kalplerin yukarı doğru hareket etmesi
function createHeart() {
    const heartContainer = document.getElementById("heartContainer");
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
