// Fungsi untuk mengubah pesan di kartu ucapan
function changeMessage() {
    const greeting = document.getElementById("greeting");
    const message = document.getElementById("message");

    message.textContent = "Thank you for being an amazing person. Enjoy your day!";

    // Tambahkan efek animasi pada teks
    greeting.style.animation = "fadeIn 1s ease-out";
    message.style.animation = "fadeIn 1s ease-out";
}
