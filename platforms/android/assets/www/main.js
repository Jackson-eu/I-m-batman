
function getPhoneGapPath() {

    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 ); //strip off index.html
    return 'file://' + path;
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    // Play audio
    function playAudio(url) {
        // Play the audio file at url
        var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
            document.getElementById('centro').src = "img/bg/Bottom-top.png";

        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
        );
        // Play audio
        my_media.play();
    }

    playAudio(getPhoneGapPath() + 'batman.mp3');

    document.getElementById("btlogo").addEventListener('click', function(){
        document.getElementById('centro').src = "img/bg/Bottom-down.png";
        playAudio(getPhoneGapPath() + 'batman.mp3');
        return false;
    });

}