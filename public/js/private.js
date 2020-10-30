/*
 *   Copyright (c) 2020 codeGame
 *   All rights reserved.
*/

function getLetter(text, letter) {
    var x = text;
    var out = x.charAt(letter);
    return out;
}

var msgInp = document.getElementById("privatejsMsg");

setTimeout(function(){
    var usr = document.getElementsByClassName("aUser");

    for (var i = 0; i <= (usr.length - 1); i++) {
        usr[i].setAttribute("onclick", "addUsrToMsg(this.innerHTML)")
    }

}, 1000);

function addUsrToMsg(userName) {
    if (msgInp.value === "") {
        msgInp.value += `@${userName}`;
    } else {
        msgInp.value += ` @${userName}`;
    };

    msgInp.focus();
};