(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("ben3882-palindrome");

function palindromeTester (e) {
    e.preventDefault();
    let string = e.target.phrase.value;
    let phrase = new Phrase(string);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> IS a palindrome`;
    } else {
        palindromeResult.innerHTML = `<strong>("${phrase.content}"</strong> is NOT a plaindrome)`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function (e) {
        palindromeTester(e);
    })
    /*let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", function() {
        palindromeTester();
    }) */

})


//alert(new Phrase("Madam, I'm Adam.").palindrome());

},{"ben3882-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

//adds reverse method to the String prototype, reverses a string

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}


//defines a phrase object
function Phrase(content) {
    this.content = content;

    //returns a string in all lower case
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }
    //returns the letters in the content
    this.letters = function letters () {
        const lettersRegEx = /[a-z]/ig;
        return (this.content.match(lettersRegEx) || ["n", "o", "t",]).join("");
    }
    //returns "true" for a palindrome, or "false"
    this.palindrome = function palindrome() {
        return this.processedContent()===this.processedContent().reverse();
    }

    //returns content in all caps, LOUDER
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}

//defines a translated phrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();



/*let phrase = new Phrase("Racecar");
let p = new Phrase("can you hear me now?");
let napoleonsLament = new Phrase("Able was I ere I saw Elba");
//console.log(phrase.content);
//console.log(phrase["content"]);
console.log(phrase.palindrome());
//console.log(phrase["palindrome"]);
console.log(p.louder() + p.palindrome());

//let frase = new TranslatedPhrase("recognize", "Reconocer");
//frase = new TranslatedPhrase("recognize", "reconocer");

//console.log(frase.palindrome());

console.log("Napoleon's lament " + napoleonsLament.palindrome());

*/

},{}]},{},[1]);
