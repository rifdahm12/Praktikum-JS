// SOAL A1
const btnNav = document.querySelector('.btn-nav'); 
//nama class yang dipanggil sebelumnya salah

btnNav.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Selamat datang di TaskFlow!');
});

// SOAL A2
const heading = document.querySelector('.hero h1'); 
//class yang dipanggil salah dan kalau pakai getElementById kurang tepat karna yang dipanggil bukan ID

heading.innerText = 'TaskFlow - Solusi Tim Modern';

// SOAL A3
const cards = document.querySelectorAll('.feature-card'); //class yang dipanggil salah

let total = 0;
for (let i = 0; i < cards.length; i++) { //tidak pakai kurang dari sama dengan karena card nya cuman ada 3 
    total++;
}

console.log('Jumlah fitur: ' + total);

// SOAL B1
const btnPrm = document.querySelector('.btn-primary');

btnPrm.addEventListener('click', function() {
    btnPrm.innerText = 'Mendaftar...';
    btnPrm.style.backgroundColor = '#94a3b8';
    setTimeout(() => {
        btnPrm.innerText = 'Coba Gratis 14 Hari';
        btnPrm.style.backgroundColor = '';
    }, 2000);
})

// SOAL B2
const cardHighlight = document.querySelectorAll('.feature-card');

cardHighlight.forEach(card => {
    card.addEventListener('click', function() {
        cardHighlight.forEach(c => {c.classList.remove('active');
    });
        this.classList.add('active');
    });
});

// SOAL B3
const reviewInput = document.getElementById('review-input');
const reviewBtn = document.getElementById('review-btn');
const reviewMsg = document.getElementById('review-msg');

reviewBtn.addEventListener('click', function() {
    const ulasan = reviewInput.value.trim();

    if (ulasan === "") {
        reviewMsg.innerText = "Ulasan tidak boleh kosong.";
        reviewMsg.style.color = "#ef4444";
    }
    else if (ulasan.length < 10) {
        reviewMsg.innerText = "Ulasan terlalu singkat. Minimal 10 karakter.";
        reviewMsg.style.color = "#f97316";
    }
    else {
        reviewMsg.innerText = "Ulasan berhasil terkirim! Terima kasih.";
        reviewMsg.style.color = "#22c55e";
        reviewInput.value = "";
    }
});