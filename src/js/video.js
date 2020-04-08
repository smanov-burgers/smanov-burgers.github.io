$(document).ready(function () {
    const video = document.getElementById('video');
    const playBtn = $('#play');
    const player = $('#player');
    const progress = $('#timeline');
    const volume = $('#volume');
    function togglePlayPause() {
        player.toggleClass('paused')

        if (video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
    }

    playBtn.on('click', function () {
        togglePlayPause();
    });

    video.addEventListener('timeupdate', function () {
        let curPos = (video.currentTime / video.duration) * 100;
        progress.val(Math.ceil(curPos));
    });

    progress.on('change', function () {
        video.currentTime = (video.duration * (progress.val() / 100));
        // progress.val(Math.ceil(curPos));
    });

    volume.on('change', function () {
        video.volume = volume.val()/100;
        // progress.val(Math.ceil(curPos));
    });
});