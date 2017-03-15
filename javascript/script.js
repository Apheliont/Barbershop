/**
 * Created by Aphel on 21.02.2017.
 */
"use strict";

var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelectorAll(".main-nav__menu-item");
var login = document.querySelector(".main-nav__login-list");
var loginButton = document.querySelector(".main-nav__login");
var closeButton = document.querySelector(".main-nav__close");
var closeLoginFormBtn = document.querySelector(".login-form__close");
var loginForm = document.querySelector(".login-form");
var loginFormInputLogin = document.querySelector(".login-form__login");
var loginFormInputPassword = document.querySelector(".login-form__password");
var submitFormBtn = document.querySelector(".login-form__submit");
var socialDescription = document.querySelectorAll(".social-list__link-description");
var reviewLeftBtn = document.querySelector(".reviews__list-btn-left");
var reviewRightBtn = document.querySelector(".reviews__list-btn-right");

//Скрыть описание социальных ссылок. Вместо них иконки
for(var i = 0; i < socialDescription.length; i++) {
    socialDescription[i].classList.add("social-list__link-description--hidden");
}

function closeMenu () {
    for(var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("main-nav__menu-item--visible");
    }
    login.classList.remove("main-nav__login-list--visible");
    closeButton.classList.remove("main-nav__close--visible");
}

// Кнопка закрытия формы логина
closeLoginFormBtn.addEventListener('click', function(){
    loginForm.classList.remove("login-form--formerror");
    loginForm.classList.add("login-form--close");
    setTimeout(function(){
        loginForm.classList.remove("login-form--close");
        loginForm.classList.remove("login-form--visible");
    }, 500);

});

// Кнопка отправки формы логина
submitFormBtn.addEventListener('click', function() {
    if(!(loginFormInputLogin.value && loginFormInputPassword.value)) {
        event.preventDefault();
        loginForm.classList.remove("login-form--formerror");
        void loginForm.offsetWidth;
        loginForm.classList.add("login-form--formerror");
    } else {
        localStorage.setItem("login", loginFormInputLogin.value);
    }
});

// Обработчик события на кнопке login в главном меню
loginButton.addEventListener('click', function(){
    event.preventDefault();
    loginForm.classList.add("login-form--visible");
    var storage = localStorage.getItem("login");
    if (storage) {
        loginFormInputLogin.value = storage;
        loginFormInputPassword.focus();
    } else {
        loginFormInputLogin.focus();
    }
    closeMenu ();
});
// Обработчик события на гамбургере
menuButton.addEventListener('click', function() {
    for(var i = 0; i < menu.length; i++) {
        if (!menu[i].classList.contains("main-nav__menu-item--active")) {
            menu[i].classList.toggle("main-nav__menu-item--visible");
        }
    }
    login.classList.toggle("main-nav__login-list--visible");
    closeButton.classList.toggle("main-nav__close--visible");
});

//левая кнопка перемотки отзывов в разделе riviews для tablet версии
reviewLeftBtn.addEventListener('click', function(){
    var radioButtonsList = document.querySelectorAll(".reviews input[type=radio]");
    for (var i = 0; i < radioButtonsList.length; i++) {
        if (radioButtonsList[i].checked && (i > 0)) {
            radioButtonsList[i].checked = false;
            radioButtonsList[i - 1].checked = true;
            break;
        } else if (radioButtonsList[i].checked)
        {
            radioButtonsList[i].checked = false;
            radioButtonsList[radioButtonsList.length - 1].checked = true;
            break;
        }
    }
});

//правая кнопка перемотки отзывов в разделе riviews для tablet версии
reviewRightBtn.addEventListener('click', function(){
    var radioButtonsList = document.querySelectorAll(".reviews input[type=radio]");
    for (var i = 0; i < radioButtonsList.length; i++) {
        if (radioButtonsList[i].checked && (i + 1 < radioButtonsList.length)) {
            radioButtonsList[i].checked = false;
            radioButtonsList[i + 1].checked = true;
            break;
        } else if (radioButtonsList[i].checked)
        {
            radioButtonsList[i].checked = false;
            radioButtonsList[0].checked = true;
            break;
        }
    }
});

closeButton.addEventListener('click', closeMenu);


