
var btnsignin = null,
  btnsignup = null,
  formRegister = null,
  formLogin = null;

function cargarControles() {
  btnsignin = document.getElementById("sign-in")
  btnsignup = document.getElementById("sign-up")
  formRegister = document.querySelector(".register")
  formLogin = document.querySelector(".login");

  btnsignin.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")

  })

  btnsignup.addEventListener("click", e => {
    console.log(window.location.href);
    e.preventDefault()
    window.location.href = "index.html";
  })
}

$(window).on('load', function () {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
      'overflow': 'visible'
  });
});



