/**
 * Created by Aphel on 24.03.2017.
 */
"use strict";

var form = document.querySelector(".appointment-form");
var formSuccess = document.querySelector(".appointment-success");
var formError = document.querySelector(".appointment-error");
var closeSuccess = formSuccess.querySelector("button");
var closeError = formError.querySelector("button");
var checkElements = [];
var pattern = /^[\s]+$/;
var allInputElements = form.getElementsByTagName("input");
var redElements = document.querySelectorAll(".form-field--red");

// отбор всех input элементов у которых есть атрибут required и создание на них ссылок в массиве
for (var i = 0; i < allInputElements.length; i++) {
    if(allInputElements[i].required) {
        checkElements.push(allInputElements[i]);
        allInputElements[i].required = false;
    }
}

//обработчик события по клику отправки формы
form.addEventListener('submit', function(event){
    event.preventDefault();
    var checkFailed = false;

    for (var i = 0; i < checkElements.length; i++) {
        if(checkElements[i].value == "" || pattern.test(checkElements[i].value)) {
            checkElements[i].classList.add("form-field--red");
            checkFailed = true;
        }
    }
    if (checkFailed) {
        for (var i = 0; i < redElements.length; i++) {
            redElements[i].addEventListener('keydown', function(){
                this.classList.remove("form-field--red");
            });
        }
        formError.classList.add("appointment-error--visible");
    } else {
        formSuccess.classList.add("appointment-success--visible");
    }
});

//обработчик кнопки закрытия для диалогового окна Success
closeSuccess.addEventListener('click', function(){
    formSuccess.classList.remove("appointment-success--visible");
    form.submit();
});

//обработчик кнопки закрытия для диалогового окна Error
closeError.addEventListener('click', function(){
    formError.classList.remove("appointment-error--visible");
    for (var i = 0; i < checkElements.length; i++) {
        if (!(checkElements[i].value == "" || pattern.test(checkElements[i].value))) {
            checkElements[i].classList.remove("form-field--red");
        }
        var redElement = document.querySelector(".form-field--red");
        redElement.focus();
    }
});