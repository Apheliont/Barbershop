/**
 * Created by Aphel on 21.02.2017.
 */
"use strict";

var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelectorAll(".main-nav__menu-item");
var login = document.querySelector(".main-nav__login-list");
var loginButton = document.querySelector(".main-nav__login");
var closeButton = document.querySelector(".main-nav__close");
var visibleMenuItem = document.querySelector(".main-nav__menu-item--visible");
var closeLoginFormBtn = document.querySelector(".login-form__close");
var loginForm = document.querySelector(".login-form");
var loginFormInputLogin = document.querySelector(".login-form__login");
var loginFormInputPassword = document.querySelector(".login-form__password");

function closeMenu () {
    for(var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("main-nav__menu-item--visible");
    }
    login.classList.remove("main-nav__login-list--visible");
    closeButton.classList.remove("main-nav__close--visible");
    visibleMenuItem.classList.add("main-nav__menu-item--visible");
}

closeLoginFormBtn.addEventListener('click', function(){
    loginForm.classList.remove("login-form--visible");
});

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

menuButton.addEventListener('click', function() {
    for(var i = 0; i < menu.length; i++) {
        if (!menu[i].classList.contains("main-nav__menu-item--active")) {
            menu[i].classList.toggle("main-nav__menu-item--visible");
        }
    }
    login.classList.toggle("main-nav__login-list--visible");
    closeButton.classList.toggle("main-nav__close--visible");
});

closeButton.addEventListener('click', closeMenu);


