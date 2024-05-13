console.log*("works");
function readText(element) {
    console.log("Is Speaking")
			

    const text = element.textContent;



    const speech = new SpeechSynthesisUtterance(text);



    speech.lang = 'en-US';



    window.speechSynthesis.speak(speech);



}





function stopRead(element) {
    console.log("Stop Speaking")


    const text = element.textContent;



    const synth = window.speechSynthesis;



    synth.cancel();



}