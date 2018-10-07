var jukebox = document.querySelector("ul.player");
jukebox.addEventListener(
  "click",
  function(e) {
    var songName = e.target.getAttribute("data-src");
    var audioPlayer = document.querySelector("#player"); //to pause, stop -- id player made life easier

    if (audioPlayer) {
      if (songName === audioPlayer.getAttribute("src")) {  //kod r je samo src... // data-src je bio defitivni problem
        if (audioPlayer.paused) {
          audioPlayer.play();
          e.target.id = "playing";
        } else {
          audioPlayer.pause();
          e.target.id = "paused";
        }
      } else {
        audioPlayer.src = songName;
        audioPlayer.play();
        if (document.querySelector("#playing")) {
          document.querySelector("#playing").id = "";
        } else {
          document.querySelector("#paused").id = "";
        }
        e.target.id = "playing";  //ovdje sam bio zaboravio id ... ali to nije uzrok, probacu poslije da vidim opet sta radi greska
      }
    } else {
      var audioPlayer = document.createElement("audio");
      audioPlayer.id = "player";
      e.target.id = "playing";
      audioPlayer.src = songName;
      document.body.appendChild(audioPlayer);
      audioPlayer.play();

      audioPlayer.addEventListener(
        "ended",
        function() {
          audioPlayer.parentElement.removeChild(audioPlayer);  // ovdje cu probati promijeniti na parent node mozda je to -- nije
          e.target.id = "";
        },
        false
      );
    }
  },
  false
);
