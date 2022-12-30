var myvid = document.getElementById('myvideo');
var myvids = [
    "https://github.com/Priva28/quanta.github.io/raw/main/apoc%20dreams%20quanta.mp4", 
    "https://user-images.githubusercontent.com/40876121/209416048-cf5b7b0a-6780-4cae-bd9a-f2976dff2f08.mp4"
];

function getRandomIndex(max) {
    /* The function will return a random number between 0 and max - 1 */
    return Math.floor(Math.random() * Math.floor(max));
}

function randomlyChooseVideo() {
    activeVideo = getRandomIndex(myvids.length);

    // update the video source and play
    myvid.src = myvids[activeVideo];
    myvid.play();
}

/* The initial active video will radomly be choosen between 0 and videoArray length - 1 */
var activeVideo = getRandomIndex(myvids.length);

window.onload = function(e) {
    randomlyChooseVideo()
}

myvid.addEventListener('ended', function(e) {
    randomlyChooseVideo()
});