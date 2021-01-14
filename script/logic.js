
const wordChangeinStart = () =>{
    let domSpace = document.getElementById("for-array");
    let counter = 0;
    const wordArray = [
        "impact.",
        "good.",
        "fun."
    ]
    setInterval(() => {
        counter++;
        if (counter === 3) {
            counter = 0;
        }
        domSpace.textContent = wordArray[counter];
    }, 2500);
}

//wordChangeinStart();