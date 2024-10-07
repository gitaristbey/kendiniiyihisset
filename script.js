document.getElementById('surpriseBtn').addEventListener('click', function() {
    const messages = [
        "Seninle her gün bir mucize.",
        "Gözlerin, hayatımın ışığı.",
        "Her anımda seni düşünüyorum.",
        "Seninle her şey daha güzel.",
        "Seni düşünmeden bir gün bile geçmiyor.",
        "Kalbim sadece senin için atıyor.",
        "Gülüşün, dünyamı aydınlatıyor.",
        "Sen, benim hayalimdeki kişisin.",
        "Her sabah seninle uyanmayı hayal ediyorum.",
        "Seninle her şey tamamlanıyor.",
        "Seninle her şey daha anlamlı.",
        "Sen benim en büyük şansım.",
        "Yüzündeki her gülümseme, içimi ısıtıyor.",
        "Seninle olduğum her an özel.",
        "Seni sevmenin tarifi yok.",
        "Kalbimin tek sahibi sensin.",
        "Hayatımın en güzel kısmı sensin.",
        "Seninle geleceğim çok parlak.",
        "Her şeyinle mükemmelsin.",
        "Seninle olduğumda zaman duruyor.",
        "Gözlerinde kayboluyorum.",
        "Kalbimde hep bir yerin var.",
        "Seninle her an daha değerli.",
        "Sana sahip olduğum için çok şanslıyım.",
        "Her gün seninle daha güzel.",
        "Sana her baktığımda mutluluğu görüyorum.",
        "Seninle hayat bir harika.",
        "Kalbim hep seni arıyor.",
        "Sana her geçen gün daha çok aşık oluyorum.",
        "Sadece seninle eksiksizim.",
        "Sen benim her şeyimsin.",
        "Seninle olan her an bir hediye.",
        "Gözlerin beni büyülüyor.",
        "Sen benim rüyalarımın gerçeğisin.",
        "Sana olan sevgim sonsuz.",
        "Her gün seni daha çok seviyorum.",
        "Seninle her şey daha renkli.",
        "Sen hayatıma anlam katıyorsun.",
        "Seninle olmak bir rüya gibi.",
        "Sadece seninle mutlu oluyorum.",
        "Seni sevmenin sonu yok.",
        "Her an seni düşünüyorum.",
        "Sana olan aşkım sınırsız.",
        "Her gülüşün kalbimi çalıyor.",
        "Seninle olmak en büyük mutluluk.",
        "Her şey seninle daha güzel.",
        "Seninle her anı çok seviyorum.",
        "Sana her bakışımda yeniden aşık oluyorum.",
        "Sana olan sevgim hiç bitmeyecek.",
        "Seni her şeyden çok seviyorum.",
        "Seninle her şey tamamlanıyor.",
        "Seninle hayatımın her anı daha güzel.",
        "Sana her gün yeniden aşık oluyorum.",
        "Seninle her şey yolunda.",
        "Seninle her şey daha anlamlı.",
        "Sen hayatımın en güzel parçasısın.",
        "Seni tanımak hayatımın en güzel anıydı.",
        "Seninle her şey daha kolay.",
        "Seni her geçen gün daha çok seviyorum.",
        "Her gün seni görmek bana huzur veriyor.",
        "Her şey seninle anlam kazanıyor.",
        "Seninle olmak en güzel his.",
        "Seninle hayat daha renkli.",
        "Sana olan sevgim sonsuz.",
        "Seninle birlikte olmak en güzel an.",
        "Sen benim hayatımdaki tek gerçeksin.",
        "Her gün seni daha çok seviyorum.",
        "Seni düşündüğüm her an kalbim çarpıyor.",
        "Sana olan sevgim tarif edilemez.",
        "Seninle olduğumda her şey yolunda.",
        "Seninle olmak her anı değerli kılıyor.",
        "Sana olan aşkım hep büyüyor.",
        "Seninle hayat daha güzel.",
        "Seninle birlikte her şey anlam kazanıyor.",
        "Sana sahip olduğum için minnettarım.",
        "Seninle olduğumda dünya duruyor.",
        "Her şey seninle anlamlı.",
        "Seninle olmak en büyük mutluluk.",
        "Seninle her an özel.",
        "Her gün seninle yeniden başlıyor.",
        "Sana her baktığımda mutluluğu görüyorum.",
        "Seninle olmak benim en büyük hayalim.",
        "Seninle her anımı çok seviyorum.",
        "Seni sevmenin tarifi yok.",
        "Seninle her şey daha güzel.",
        "Her gülüşün beni büyülüyor.",
        "Sen benim her şeyimsin.",
        "Seninle olduğumda her şey daha güzel.",
        "Her gün seni daha çok seviyorum.",
        "Sana sahip olduğum için çok şanslıyım.",
        "Seninle olduğum her an değerli.",
        "Sana her an yeniden aşık oluyorum.",
        "Her şey seninle daha anlamlı.",
        "Sana olan sevgim sonsuz.",
        "Seni her şeyden çok seviyorum.",
        "Seninle olmak bir rüya gibi.",
        "Seni düşündüğüm her an beni mutlu ediyor."
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById('randomMessage').textContent = randomMessage;
    document.getElementById('message').classList.remove('hidden');
});


function createHeart() {
    const heartContainer = document.getElementById("heartContainer");
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw"; // Kalp, rastgele bir yatay konumda ortaya çıkacak
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Kalbin uçma süresi rastgele olacak
    heartContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove(); // 5 saniye sonra kalbi kaldır
    }, 5000);
}

setInterval(createHeart, 300); // Her 300 milisaniyede bir kalp oluştur

