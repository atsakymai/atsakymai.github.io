const bookButton = document.getElementById("book");
const homeButton = document.getElementById("home");
const learnButton = document.getElementById("learn");
const Slider = document.getElementById("Slider");
const SeeAll = document.getElementById("SeeAll")
const background = document.getElementById("background");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");


let choice = "";


bookButton.onclick = function(){
    bookButton.style.background = "#ec256e";
    bookButton.style.color = "#fff";
    homeButton.style.background = "transparent";
    homeButton.style.color = "#d4d5d9";
    learnButton.style.background = "transparent";
    learnButton.style.color = "#d4d5d9";
}

homeButton.onclick = function(){
    bookButton.style.background = "transparent";
    bookButton.style.color = "#d4d5d9";
    homeButton.style.background = "#ec256e";
    homeButton.style.color = "#fff";
    learnButton.style.background = "transparent";
    learnButton.style.color = "#d4d5d9";
}

learnButton.onclick = function(){
    bookButton.style.background = "transparent";
    bookButton.style.color = "#d4d5d9";
    homeButton.style.background = "transparent";
    homeButton.style.color = "#d4d5d9";
    learnButton.style.background = "#ec256e";
    learnButton.style.color = "#fff";
}

div1.onclick = function(){
    background.style.left = "0px";
    choice = "All";
    console.log(choice);
}

div2.onclick = function(){
    background.style.left = "70px";
    choice = "Div";
    console.log(choice);
}
