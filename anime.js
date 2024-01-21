document.addEventListener('DOMContentLoaded', function () {
    // Efecto de aparición de letras con anime.js
    var mainText = document.getElementById('mainText');
    var textContent = mainText.textContent;

    mainText.innerHTML = ''; // 

  
    for (var i = 0; i < textContent.length; i++) {
        var span = document.createElement('span');
        span.textContent = textContent[i];
        span.style.opacity = 0; 
        mainText.appendChild(span);

        
        anime({
            targets: span,
            opacity: 1,
            duration: 3000, // Duración de la animación en milisegundos
            easing: 'easeInOutQuad', 
            delay: i * 100, 
            loop: true, 
            direction: 'alternate', 
            loopBegin: function (anim) {
                if (anim.currentTime >= 900000) {
                    anim.pause();
                    setTimeout(function () {
                        anim.play();
                    }, 900000);
                }
            },
        });
    }
});
