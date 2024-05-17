// Selecciona los elementos del DOM necesarios
const disco = document.getElementById('disco'); // Elemento que representa el disco giratorio
const playlist = document.getElementById('playlist'); // Lista de reproducción
const audio = document.getElementById('audio'); // Elemento de audio
let isPlaying = false; // Variable que indica si hay una canción reproduciéndose

// Agrega un evento de clic a la lista de reproducción
playlist.addEventListener('click', function(e) {
    // Verifica si el elemento clickeado es un <li> (un elemento de la lista)
    if (e.target.tagName === 'LI') {
        // Obtiene el nombre de la canción desde el atributo de datos del elemento
        const songName = e.target.dataset.song;
        // Crea la ruta del archivo de la canción basada en el nombre de la canción
        const songPath = `music/${songName.replace(/\s/g, '')}.mp3`; // Ajusta la ruta a tus archivos de música

        // Establece la fuente de audio como la canción seleccionada y la reproduce
        audio.src = songPath;
        audio.play();
        // Agrega la clase 'playing' al elemento disco para representar que la canción está reproduciéndose
        disco.classList.add('playing');
        isPlaying = true; // Cambia el estado de reproducción a verdadero
    }
});

// Agrega un evento de pausa al elemento de audio
audio.addEventListener('pause', function() {
    // Elimina la clase 'playing' del elemento disco cuando la canción se pausa
    disco.classList.remove('playing');
    isPlaying = false; // Cambia el estado de reproducción a falso
});

// Agrega un evento de reproducción al elemento de audio
audio.addEventListener('play', function() {
    // Agrega la clase 'playing' al elemento disco solo si hay una canción cargada y reproduciéndose
    if (audio.src) {
        disco.classList.add('playing');
        isPlaying = true; // Cambia el estado de reproducción a verdadero
    }
});

// Agrega un evento de finalización de reproducción al elemento de audio
audio.addEventListener('ended', function() {
    // Elimina la clase 'playing' del elemento disco cuando la canción termina de reproducirse
    disco.classList.remove('playing');
    isPlaying = false; // Cambia el estado de reproducción a falso
});
