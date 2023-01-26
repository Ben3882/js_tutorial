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
