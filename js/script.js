// Conctacts pop-up
try {
  const contactBtn = document.querySelector(".header__contact-btn");
  const contactPopup = document.querySelector(".header__contact-popup");
  const contactPopupClose = document.querySelector(
    ".header__contact-popup-close"
  );

  contactBtn.addEventListener("click", () => {
    contactPopup.classList.add("header__contact-popup--active");
  });

  contactPopupClose.addEventListener("click", () => {
    contactPopup.classList.remove("header__contact-popup--active");
  });
} catch (e) {}

// Show more bank partners
try {
  const partnersBtn = document.querySelector(".partners__btn");
  const partnersItems = document.querySelector(".partners__items");
  const partnersItem = document.querySelector(".partners__item");

  partnersBtn.addEventListener("click", (e) => {
    const target = e.target;
    if (target.innerText === "загрузить еще") {
      partnersItems.style.height = `${partnersItems.scrollHeight + 5}px`;
      target.innerText = "скрыть";
    } else {
      partnersItems.style.height = `${partnersItem.scrollHeight * 5 + 6}px`;
      target.innerText = "загрузить еще";
    }
  });
} catch (e) {}

// Services accordion
try {
  const accordionItems = document.querySelector(".accordion__items");
  const accordionBtns = document.querySelectorAll(".accordion__item-btn");
  const accordionContent = document.querySelectorAll(
    ".accordion__item-content"
  );
  const servicesImgs = document.querySelectorAll(".services__img");

  accordionItems.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("accordion__item-btn")) {
      accordionBtns.forEach((btn) => {
        btn.classList.remove("accordion__item-btn--active");
      });
      servicesImgs.forEach((img) => {
        img.classList.remove("services__img--active");
      });
      accordionContent.forEach((content) => {
        content.classList.remove("accordion__item-content--active");
        content.style.height = `0`;
      });

      const currentText = target.parentNode.parentNode.lastElementChild;
      const currentBtnNum = target.getAttribute("data-btn");
      const accordionImg = document.querySelector(
        `.services__img-${currentBtnNum}`
      );

      target.classList.toggle("accordion__item-btn--active");
      currentText.classList.add("accordion__item-content--active");
      currentText.style.height = `${currentText.scrollHeight}px`;
      accordionImg.classList.add("services__img--active");
    }
  });
} catch (e) {}

// PreventDefault Form
try {
  const feedbackForm = document.querySelector(".feedback__form");

  feedbackForm.addEventListener("submit", (e) => e.preventDefault());
} catch (e) {}

// Hamburger Menu
try {
  const hamburger = document.querySelector(".hamburger");
  const headerMenu = document.querySelector(".header__menu");
  const menuLinks = document.querySelectorAll(".menu__list-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--active");
    headerMenu.classList.toggle("header__menu--active");

    if (hamburger.classList.contains("hamburger--active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("no-scroll")) {
        document.body.classList.remove("no-scroll");
        hamburger.classList.remove("hamburger--active");
        headerMenu.classList.remove("header__menu--active");
      }
    });
  });
} catch (e) {}
