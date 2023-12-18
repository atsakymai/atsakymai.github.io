const createListButton = document.getElementById("textButton");
const submitButton = document.getElementById("submitButton");
let waitForSubmit = false;

let createdLists = 0;

function alignWidthAndHeightAndTop(FirstElementName, SecondElementName, topValue) {
    FirstElementName = document.getElementById(FirstElementName.toString());
    SecondElementName = document.getElementById(SecondElementName.toString());

    FirstElementName.style.transition = "0.3s";
    FirstElementName.style.width = SecondElementName.clientWidth + "px";
    FirstElementName.style.height = SecondElementName.clientHeight + "px";
    FirstElementName.style.top = topValue.toString();
}

createListButton.onclick = function () {
    if (!waitForSubmit) {
        alignWidthAndHeightAndTop("textButton", "textBg", "10px");
        function setToNormalProperties() {
            createListButton.style.width = "80%";
            createListButton.style.height = "80%";
            createListButton.style.top = "0";
        }
        waitForSubmit = true;
        submitButton.style.bottom = "5px";
        submitButton.style.cursor = "pointer";

        submitButton.onclick = function () {
            if(createdLists <= 5){
                setTimeout(setToNormalProperties, 10);
                waitForSubmit = false;
                submitButton.style.bottom = "0";
                submitButton.style.cursor = "default";
                createdLists += 1;
            }
        }
    }
}
