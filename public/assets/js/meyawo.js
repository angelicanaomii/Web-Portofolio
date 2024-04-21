/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// document.addEventListener("DOMContentLoaded", function() {
//     var text = " I'm Angelica Naomi";
//     var index = 0;
//     var typingEffect = setInterval(function() {
//       document.getElementById("typing-animation").textContent += text[index];
//       index++;
//       if (index >= text.length) {
//         clearInterval(typingEffect);
//       }
//     }, 100); // Delay 0.1 detik (100ms)
//   });

document.addEventListener("DOMContentLoaded", function() {
    var text = "I'm Angelica Naomi";
    
    // Fungsi untuk memulai animasi mengetik
    function startTyping() {
        var index = 0;
        var typingEffect = setInterval(function() {
            var element = document.getElementById("typing-animation");
            element.textContent += text[index];
            index++;

            if (index >= text.length) {
                clearInterval(typingEffect);
                // Hapus teks dan mulai kembali animasi setelah 2 detik
                setTimeout(function() {
                    element.textContent = ""; // Hapus teks
                    startTyping(); // Mulai kembali animasi mengetik
                }, 3000); // Delay 2 detik (2000 ms)
            }
        }, 100); // Delay 0.1 detik (100 ms) antara setiap karakter
    }

    // Panggil fungsi untuk pertama kali memulai animasi mengetik
    startTyping();
});
