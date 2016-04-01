var btnToggleMenu = document.querySelector(".header__menu-toggle");
var navMenu = document.querySelector(".menu");
var btnSubmit = document.querySelector(".btn--submit");
var frmSomethingWrong = document.querySelector(".modal-form--something-wrong");
var btnSomethingWrong = document.querySelector(".btn--something-wrong");
var frmFeedbackSent = document.querySelector(".modal-form--feedback-sent");
var btnFeedbackSent = document.querySelector(".btn--feedback-sent");
var fldPhone = document.getElementById("phone-field");
var fldEmail = document.getElementById("email-field");
var lblPhoneError = document.querySelector(".feedback__phone .feedback__caption--error");
var lblEmailError = document.querySelector(".feedback__email .feedback__caption--error");

btnToggleMenu.addEventListener("click", toggleMenu);
btnSubmit.addEventListener("click", showHideModalFroms);
btnSomethingWrong.addEventListener("click", showHideModalFroms);
btnFeedbackSent.addEventListener("click", showHideModalFroms);

function toggleMenu() {

  navMenu.classList.toggle("menu--closed");

  btnToggleMenu.classList.toggle("header__menu-toggle--closed");

}

function showHideModalFroms(event) {

  if ( validateForm() ) {

    event.preventDefault();

    frmFeedbackSent.classList.toggle("modal-form--show");

    return;
  }

  frmSomethingWrong.classList.toggle("modal-form--show");

}

// TODO: Допилить, чтобы ошибка оставалась до того момента, пока не будет исправлена
function validateForm() {

  if ( !fldPhone.checkValidity() ) {

    lblPhoneError.classList.toggle("feedback__caption--show");

    return false;
  }

  if ( !fldEmail.checkValidity() ) {

    lblEmailError.classList.toggle("feedback__caption--show");

    return false;
  }

  return true;
}
