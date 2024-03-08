fetch("./data.json").then(response => response.json())
.then(birds => testingBirds(birds));

function testingBirds(birdsData){
    var cards = document.getElementsByClassName("card shadow-sm");
    var body = document.getElementsByClassName("card-body");
    let cardCounter = 0;
    for(var i = 0; i < birdsData.birds.length; i++){
        if(birdsData.birds[i].state == "Nebraska"){
            let img = document.createElement("img");
            img.src = birdsData.birds[i].image
            img.style.width = "100%";
            img.style.height = "auto";

            paragraph = document.createElement("p");
            paragraph.classList.add("card-text");
            paragraph.innerText = birdsData.birds[i].description;

            cards[cardCounter % cards.length].appendChild(img);
            body[cardCounter % cards.length].appendChild(paragraph);
            cardCounter++;
        }
    }
}

function unhidePopMap(){
    var popImage = document.getElementById('bird-pop');
    if(popImage.style.display == 'none'){
    popImage.style.display = 'block';
    }
    else{
    popImage.style.display = 'none';
    }
}




