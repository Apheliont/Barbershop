/**
 * Created by Aphel on 21.02.2017.
 */
"use strict";

var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelectorAll(".main-nav__menu-item");
var login = document.querySelector(".main-nav__login-list");
var closeButton = document.querySelector(".main-nav__close");
var visibleMenuItem = document.querySelector(".main-nav__menu-item--visible");


menuButton.addEventListener('click', function() {
    for(var i = 0; i < menu.length; i++) {
        menu[i].classList.add("main-nav__menu-item--visible");
    }
    login.classList.add("main-nav__login-list--visible");
    closeButton.classList.add("main-nav__close--visible");
});

closeButton.addEventListener('click', function() {
    for(var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("main-nav__menu-item--visible");
    }
    login.classList.remove("main-nav__login-list--visible");
    closeButton.classList.remove("main-nav__close--visible");
    visibleMenuItem.classList.add("main-nav__menu-item--visible");
});