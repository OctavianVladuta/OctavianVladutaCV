const speechRecognitionService = window.SpeechRecognition || window.webkitSpeechRecognition
const recognitionService = new speechRecognitionService();

const startBtn = document.querySelector(".btn-start");
const textLog = document.querySelector(".text-log");

const languages ={
    English:"en-US",
    Romanian:"ro-RO"
}

startBtn.addEventListener("click",()=>{
recognitionService.lang=determineLanguage();
recognitionService.continuous = true;

recognitionService.onresult = handleResult;


if(startBtn.classList.contains("btn-pulsating")){  
    recognitionService.stop();
    startBtn.classList.remove("btn-pulsating");
    textLog.innerHTML+="<br />"
}   else{
recognitionService.start();
startBtn.classList.add("btn-pulsating");
}



});

function determineLanguage(){
    const selected = document.querySelector("#language").value;
    switch(selected){
        case "English": 
            return languages.English;
        case "Romanian":
            return languages.Romanian;
        default:
            throw new Error("Language not supported");
    }
}

function handleResult(event){
    const results = [];
    for(const result of event.results){
        results.push(`${result[0].transcript}`);
    }
    textLog.innerHTML+= results.at(-1);

     if(textLog.textContent.includes("Open YouTube") || textLog.textContent.includes("open YouTube") )
     {
         window.open(
             'https://www.youtube.com/',
             '_blank' 
           );
     }

    // if(results.at(-1).includes("Open YouTube") || results.at(-1).includes("open YouTube") )
    // {
    //     window.open(
    //         'https://www.youtube.com/',
    //         '_blank' 
    //       );
    // }

    if(results.at(0).includes("Open YouTube") || results.at(0).includes("open YouTube") )
    {
        window.open(
            'https://www.youtube.com/',
            '_blank' 
          );
    }

    else if(textLog.textContent.includes("Open my CV") || textLog.textContent.includes("open my CV") )
    {
        window.open(
            'https://octavianvladuta.github.io/OctavianVladutaCV/',
            '_blank' 
          );
    }

}
