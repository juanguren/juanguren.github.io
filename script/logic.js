const SECONDS_FOR_CHANGE = 2200;

const responsiveNavBar = () => {
  const nav = document.getElementById("hamburguer-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  const bar1 = document.getElementsByClassName("bar1")[0];
  const bar2 = document.getElementsByClassName("bar2")[0];
  const bar3 = document.getElementsByClassName("bar3")[0];

  nav.addEventListener("click", () => {
    mobileMenu.style.display === "none"
      ? (mobileMenu.style.display = "block")
      : (mobileMenu.style.display = "none");

    bar1.classList.toggle("transformBar1");
    bar2.classList.toggle("disappear");
    bar3.classList.toggle("transformBar3");
  });
};

responsiveNavBar();

const wordChangeinStart = () => {
  let counter = 0;
  let domSpace = document.getElementById("for-array");
  const wordArray = ["impact.", "good.", "fun."];

  setInterval(() => {
    counter++;
    if (counter === 3) counter = 0;

    domSpace.textContent = wordArray[counter];
    wordArray.forEach(() => {
      domSpace.classList.add("aboutWord");
      setTimeout(() => {
        domSpace.classList.remove("aboutWord");
      }, 1000);
    });
  }, SECONDS_FOR_CHANGE);
};

wordChangeinStart();

const emailButton = () => {
  const email_button = document.querySelectorAll(".email-button");
  email_button.forEach((btn) => {
    btn.addEventListener("click", () => {
      location.href = "mailto:juan_fe_7@live.com";
    });
  });
};

emailButton();

const fixMobileNav = () => {
  const isDesktop = window.matchMedia(
    "(min-width: 768px) and (max-width: 2000px)"
  );
  const mobileNav = document.getElementById("mobile-menu");
  isDesktop.addEventListener("change", (e) => {
    if (e.matches) {
      mobileNav.style.display = "none";
    }
  });
};

fixMobileNav();
