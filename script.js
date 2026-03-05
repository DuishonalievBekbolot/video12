const btn = document.getElementById('playBtn')
const video = document.getElementById('video')
const replayBtn = document.getElementById('replayBtn')
const body = document.querySelector('body')

    btn.addEventListener("click", () => {
      video.style.display = "block";
      video.play();       
      btn.style.display = "none";  
      replayBtn.style.display = "block"
      body.style.flexDirection = "column"
    });

    replayBtn.addEventListener("click", () => {
        video.play()
    })