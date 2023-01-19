let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "New Jersey", "North Carolina"];

function functionalSum(elements) {
    return elements.reduce((sum, n) => sum += n, 100);
}
console.log(functionalSum(numbers));

function functionalLengths (elements) {
    return elements.reduce((lengths, element) => {lengths[element] = element.length;
        return lengths;}, {})
}
console.log(functionalLengths(states));

function functionalProduct(elements) {
    return elements.reduce((sum, n) => sum *= n, 1);
}
console.log(functionalProduct(numbers));
