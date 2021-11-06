prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById('snapshot');
Webcam.attach('#snapshot');

function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fAz1tN5dC/model.json', modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is "+prediction_1;
    var utterthis = new speechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}
