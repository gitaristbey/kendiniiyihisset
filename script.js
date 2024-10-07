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

// Uçan kalpler oluşturma
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw"; // Kalplerin rastgele yatay konumda başlaması
    heart.style.animationDuration = Math.random() * 5 + 5 + "s"; // Farklı hızlarda uçmalarını sağla
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Animasyon bitince kalbi sil
    }, 10000); // 10 saniye sonra kaldır
}

// Her 1 saniyede bir yeni bir kalp oluştur
setInterval(createHeart, 1000);
