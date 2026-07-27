const cards = [];

function addCard() {

    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;

    if(question === "" || answer === ""){
        alert("Please fill both fields.");
        return;
    }

    cards.push({
        question,
        answer,
        showAnswer:false
    });

    document.getElementById("question").value="";
    document.getElementById("answer").value="";

    displayCards();
}

function displayCards(){

    const container = document.getElementById("cards");
    container.innerHTML="";

    cards.forEach((card,index)=>{

        const div = document.createElement("div");
        div.className="card";

        div.innerHTML = card.showAnswer ? card.answer : card.question;

        div.onclick = function(){

            cards[index].showAnswer = !cards[index].showAnswer;
            displayCards();

        }

        container.appendChild(div);

    });

}
