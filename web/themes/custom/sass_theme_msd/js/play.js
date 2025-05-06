var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('VideoWrapper__video', {
    height: '390',
    width: '640',
    videoId: 'Z1pe-tosawQ',  
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  document.getElementById('VideoWrapper__playButton').addEventListener('click', function(event) {
      document.querySelector('.VideoWrapper__image').style.display = 'none';
       document.querySelector('.VideoWrapper__playButton').style.display = 'none';
      player.playVideo();
  });   
}



