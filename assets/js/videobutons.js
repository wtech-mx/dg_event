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
                pause.classList.remove("sub")
            } else {
                vid.pause();
                let pause = document.querySelector(".pause")
                pause.classList.toggle("sub")
                pause.classList.remove("sub-sin")
            }
    }

    function enableMute() {
            if (vid.muted == true) {
                vid.muted = false;
                let mute = document.querySelector(".mute")
                mute.classList.toggle("sub")
                mute.classList.remove("sub-sin")
            } else {
                vid.muted = true;
                let mute = document.querySelector(".mute")
                mute.classList.toggle("sub-sin")
                mute.classList.remove("sub")
            }
    }