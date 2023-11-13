const bookButton = document.getElementById("book");
const homeButton = document.getElementById("home");
const homeworkButton = document.getElementById("homework");



bookButton.onclick = function(){
    bookButton.style.background = "#ec256e";
    bookButton.style.color = "#fff";
    homeButton.style.background = "transparent";
    homeButton.style.color = "#d4d5d9";
    homeworkButton.style.background = "transparent";
    homeworkButton.style.color = "#d4d5d9";
}

homeButton.onclick = function(){
    bookButton.style.background = "transparent";
    bookButton.style.color = "#d4d5d9";
    homeButton.style.background = "#ec256e";
    homeButton.style.color = "#fff";
    homeworkButton.style.background = "transparent";
    homeworkButton.style.color = "#d4d5d9";
}

homeworkButton.onclick = function(){
    bookButton.style.background = "transparent";
    bookButton.style.color = "#d4d5d9";
    homeButton.style.background = "transparent";
    homeButton.style.color = "#d4d5d9";
    homeworkButton.style.background = "#ec256e";
    homeworkButton.style.color = "#fff";
}
