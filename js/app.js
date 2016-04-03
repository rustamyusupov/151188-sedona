var btnToggleMenu = document.querySelector('.header__menu-toggle');
var navMenu = document.querySelector('.menu');
var frmFeedback = document.querySelector('.feedback');
var btnSubmit = document.querySelector('.btn--submit');
var frmSomethingWrong = document.querySelector('.modal-form--something-wrong');
var btnSomethingWrong = document.querySelector('.btn--something-wrong');
var frmFeedbackSent = document.querySelector('.modal-form--feedback-sent');
var btnFeedbackSent = document.querySelector('.btn--feedback-sent');
var fldPhone = document.getElementById('phone-field');
var fldEmail = document.getElementById('email-field');
var lblPhoneError = document.querySelector('.feedback__phone .feedback__caption--error');
var lblEmailError = document.querySelector('.feedback__email .feedback__caption--error');
var map = document.querySelector('.hotel-search__map');

btnToggleMenu.addEventListener("click", toggleMenu);
// TODO: Как-то это по-другому должно решаться?
if (btnSubmit) btnSubmit.addEventListener("click", showModalForm);
if (btnSomethingWrong) btnSomethingWrong.addEventListener('click', hideModalForm);
if (btnFeedbackSent) btnFeedbackSent.addEventListener('click', hideModalForm);

(function() {

  toggleMenu();

})();

function toggleMenu() {
  navMenu.classList.toggle('menu--closed');
  btnToggleMenu.classList.toggle('header__menu-toggle--closed');
}

function showModalForm(event) {
  event.preventDefault();

  if ( !validateForm() ) {
    frmSomethingWrong.classList.add('modal-form--show');
    return;
  }

  frmFeedbackSent.classList.add('modal-form--show');
  frmFeedback.reset();

}

function hideModalForm() {
  frmFeedbackSent.classList.remove('modal-form--show');
  frmSomethingWrong.classList.remove('modal-form--show');
}

function validateForm() {

  if ( !fldPhone.checkValidity() ) {
    lblPhoneError.classList.add('feedback__caption--show');
    return false;
  } else {
    lblPhoneError.classList.remove('feedback__caption--show');
  }

  if ( !fldEmail.checkValidity() ) {
    lblEmailError.classList.add('feedback__caption--show');
    return false;
  }  else {
    lblEmailError.classList.remove('feedback__caption--show');
  }

  return true;
}

function initMap() {
  var positionSedona = new google.maps.LatLng(34.86973, -111.76098);

  var mapOptions = {
    center: positionSedona,
    zoom: 7
  }

  var googleMap = new google.maps.Map(map, mapOptions);

  var mapMarker = new google.maps.Marker({
    map: googleMap,
    position: positionSedona
  });

}
