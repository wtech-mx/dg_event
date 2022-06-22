    var vid = document.getElementById("myVideo");

    function playVid() {
      vid.play();
    }

    function pauseVid() {
      vid.pause();
    }

    function pauseplayVid() {
            if (vid.paused) {
                vid.play();
            } else {
                vid.pause();

            }
    }

    function enableMute() {
            if (vid.muted == true) {
                vid.muted = false;
            } else {
                vid.muted = true;
            }
    }