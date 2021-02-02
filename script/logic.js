
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
    }, 2200);
}

//wordChangeinStart();

const emailButton = () => {
    const email_button = document.querySelectorAll(".email-button");
    email_button.forEach((btn) => {
        btn.addEventListener("click", () =>{
            location.href = 'mailto:juan_fe_7@live.com';
        });
    })
};

emailButton();