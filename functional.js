let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
    // `https://example.com/${string}`;
}

function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
let urls = functionalUrls(states).map(element => `https://example.com/${element}`);

console.log(urls);
