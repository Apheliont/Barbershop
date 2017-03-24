/**
 * Created by Aphel on 24.03.2017.
 */

var reviewLeftBtn = document.querySelector(".reviews__list-btn-left");
var reviewRightBtn = document.querySelector(".reviews__list-btn-right");

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