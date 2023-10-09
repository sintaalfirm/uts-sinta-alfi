var map = L.map('map',{
    center: [-7.79558, 110.36949],
    zoom: 12
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

var marker = L.marker([-7.77425, 110.38105]).bindPopup('<b>Wisdom Park</b><br> <img src="https://www.gotravelly.com/blog/wp-content/uploads/2020/12/wisdom-park-ugm.jpg" width="160" height"120"><br> <a href="https://maps.app.goo.gl/Es6yxP7CG3WuLdKz8">Link tempat>></a>').addTo(map);
var marker = L.marker([-7.76527, 110.37224]).bindPopup('<b>Smart Green Learning Center (SGLC)k</b><br> <img src="https://th.bing.com/th/id/OIP._GmweElSk22oHqy-UAbqDAHaEK?pid=ImgDet&rs=1" width="160" height"120"><br> <a href="https://maps.app.goo.gl/9FSdrnvTM4dAeJUN9">Link tempat>></a>').addTo(map);
var marker = L.marker([-7.77206, 110.38232]).bindPopup('Lembah UGM').addTo(map);
var marker = L.marker([-7.7719, 110.3778]).bindPopup('Grha Sabha Permana').addTo(map);
var marker = L.marker([-7.76746, 110.38408]).bindPopup('Kedokteran UGM').addTo(map);

function validasiPassword() {
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (password === "Selesai") {
        errorMessage.textContent = ""; // Menghapus pesan error jika password benar
        alert("Pekerjaan telah selesai!");
    } else {
        errorMessage.textContent = "Password tidak valid. Silakan coba lagi."; // Menampilkan pesan error
    }
}