// This is for the progress bar

  document.addEventListener("DOMContentLoaded", function() {
    const progressBarContainers = document.querySelectorAll(".progress-bar-container");

    progressBarContainers.forEach(container => {
      const progressBars = container.querySelectorAll(".progress-bar");

      progressBars.forEach(bar => {
        const width = parseInt(bar.style.width);
        let currentWidth = 0;

        const loading = setInterval(() => {
          if (currentWidth >= width) {
            clearInterval(loading);
          } else {
            currentWidth++;
            bar.style.width = currentWidth + "%";
            bar.innerText = currentWidth + "%";
          }
        }, 20);
      });
    });
  });



//  this is for the videos in hobbies section
  document.addEventListener("DOMContentLoaded", function () {
    const hobbyVideos = document.querySelectorAll(".home-hobbies video");

    hobbyVideos.forEach((video) => {
      video.addEventListener("mouseover", function () {
        this.play();
        this.muted = false;
      });

      video.addEventListener("mouseout", function () {
        this.pause();
      });
    });
  });

