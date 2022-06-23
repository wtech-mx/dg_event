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
                let pause = document.querySelector(".pause")
                pause.classList.toggle("sub-sin")
            } else {
                vid.pause();
                let pause = document.querySelector(".pause")
                pause.classList.toggle("sub")
            }
    }

    function enableMute() {
            if (vid.muted == true) {
                vid.muted = false;
                let mute = document.querySelector(".mute")
                mute.classList.toggle("sub-sin")
            } else {
                vid.muted = true;
                let mute = document.querySelector(".mute")
                mute.classList.toggle("sub")
            }
    }