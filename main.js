var SpeechRecognition = webkit.SpeechRecognition;
var recognition = new SpeechRecognition;
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();
}
function speak(){
    var synth = window.SpeechSynthesis;
    var data = document.getElementById("textbox").value;
    var words = new SpeechSynthesisUtterance(data);
    synth.speak(words);
    Webcam.set({
        width: 100,
        height: 250,
        image_format: 'png',
        png_quality: 90
    });
}
var camera = document.getElementById("camera");