// // Mendapatkan elemen yang ingin Anda hentikan animasinya
// var scrollLeft = document.querySelector('.scroll-left');
// // Mendapatkan elemen yang menjadi penanda berhenti
// var stopElement = document.querySelector('.rectangle-10');

// // Mendeteksi saat halaman di-scroll
// window.addEventListener('scroll', function() {
//     // Mendapatkan posisi atas dari elemen penanda berhenti
//     var stopElementTop = stopElement.getBoundingClientRect().top;
//     // Mendapatkan tinggi dari viewport
//     var windowHeight = window.innerHeight;

//     // Jika posisi atas elemen penanda berhenti kurang dari atau sama dengan tinggi viewport
//     // Artinya elemen penanda berhenti sudah masuk ke dalam viewport
//     if (stopElementTop <= windowHeight) {
//         // Menghentikan animasi marquee
//         scrollLeft.querySelector('marquee').stop();
//     }
// });


// // Mendapatkan elemen yang ingin Anda hentikan animasinya
// var scrollLeft = document.querySelector('.scroll-left');
// // Mendapatkan elemen yang menjadi penanda berhenti
// var stopElement = document.querySelector('.rectangle-10');

// // Mendeteksi saat halaman di-scroll
// window.addEventListener('scroll', function() {
//     // Mendapatkan posisi atas dan bawah dari elemen penanda berhenti
//     var stopElementTop = stopElement.getBoundingClientRect().top;
//     var stopElementBottom = stopElement.getBoundingClientRect().bottom;
//     // Mendapatkan tinggi dari viewport
//     var windowHeight = window.innerHeight;

//     // Jika posisi atas elemen penanda berhenti kurang dari atau sama dengan tinggi viewport
//     // dan posisi bawah elemen penanda berhenti lebih besar dari 0
//     // Artinya elemen penanda berhenti masih berada dalam viewport
//     if (stopElementTop <= windowHeight && stopElementBottom >= 0) {
//         // Menghentikan animasi marquee
//         scrollLeft.querySelector('marquee').stop();
//     } else {
//         // Jika elemen penanda berhenti keluar dari viewport, maka jalankan animasi marquee kembali
//         scrollLeft.querySelector('marquee').start();
//     }
// });
