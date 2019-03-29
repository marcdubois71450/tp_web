// Ce code permet de charger l'API YOUTUBE, pour charger le lecteur de video
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//    Apres qu'il soit telecharger
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: '_nX8fJshc0U', //Id de la video
    playerVars: {
      'autoplay': 1, // Demmarrage auto de la video
      'start': 0, // Demmarrage de la video a 34 seconde
      'rel': 0, // desactiver interface de controle lecteur
      'showinfo': 0, // desactiver info lecteur
      'showsearch': 0, // desactiver info lecteur
      'controls': 0, // desactiver interface de controle lecteur
      'loop': 1, // La video tourne en boucle
      'enablejsapi': 1, //Activer le controle de l'api via javscript
      'playlist': '_nX8fJshc0U'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// Des que l'api et la video et prete
function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();

}
// Si la video et prete la partiesuivante permet de mute la video
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {

    done = true;
  }
  event.target.setVolume(0); // Reglage du son sur 0 via l'api

}