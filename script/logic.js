//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js
const responsiveNavBar = () =>{
    const nav = document.getElementById('hamburguer-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    const bar1 = document.getElementsByClassName('bar1')[0];
    const bar2 = document.getElementsByClassName('bar2')[0];
    const bar3 = document.getElementsByClassName('bar3')[0];

    nav.addEventListener('click', () =>{
        mobileMenu.style.display === "none"
         ? mobileMenu.style.display = "block"
         : mobileMenu.style.display = "none";
        
        bar1.classList.toggle('transformBar1'); 
        bar2.classList.toggle('disappear');
        bar3.classList.toggle('transformBar3');
    });
}

responsiveNavBar();

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

const fixMobileNav = () =>{
    const isDesktop = window.matchMedia('(min-width: 768px) and (max-width: 2000px)');
    const mobileNav = document.getElementById('mobile-menu');
    isDesktop.addEventListener('change', (e) =>{
        if (e.matches) {
            mobileNav.style.display = 'none'; 
        }
    });
}

fixMobileNav();

