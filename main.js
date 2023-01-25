let Phrase = require("ben3882-palindrome");

let string = prompt("Enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
    alert(`${phrase.content} is a palindrome`);
} else {
    alert(`${phrase.content} is not a plaindrome`);
}
//alert(new Phrase("Madam, I'm Adam.").palindrome());
