var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function (SpeechResults){
   console.log(SpeechResults)
   output=SpeechResults.results[0][0].transcript
   if (output=="take my selfie") {
    document.getElementById("textbox").innerHTML=output;
    speak();
    Webcam.attach( '#camera')
setTimeout(
    function () {
        snapshot();
        save()
    },5000
)
  
   }
   
}


function speak() {
    var synth = window.speechSynthesis;

    speakdata="taking your selfie in 5 seconds"
    saythis= new SpeechSynthesisUtterance(speakdata);

    synth.speak(saythis)
}

//code for setting up the webcam

Webcam.set({
    width :  360,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 90
})

function snapshot() {
    Webcam.snap(
        function (img) {
            document.getElementById("result").innerHTML=`<img src=${img} id="selfie">`
        }
    )
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image
    link.click()
}