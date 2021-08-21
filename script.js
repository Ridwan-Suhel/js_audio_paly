for(let i=0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        let text = this.innerHTML;
        audioPlay(text);
    });
}

function audioPlay(findText){
    switch(findText){
        case "A":
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;

        case "B":
            var audio = new Audio("audio/b.mp3");
            audio.play();
            break;

        case "C":
            var audio = new Audio("audio/c.mp3");
            audio.play();
            break;
            
    }
}