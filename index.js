// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(x) {
    return cats.push(x);
}

function destructivelyPrependCat(x) {
    return cats.unshift(x)
}

function destructivelyRemoveLastCat() {
    cats.splice(2,1)
}

function destructivelyRemoveFirstCat(x) {
    cats.shift(x);
}

function appendCat(x) {
    const newCat = [...cats, x];
    return newCat;
}

function prependCat(x) {
    const newCat3 = [x, ...cats];
    return newCat3
}
function removeLastCat() {
    const newCat2 = cats.slice(0,2)
    return newCat2;
}

function removeFirstCat() {
    const newcat4 = cats.slice(1,3);
    return newcat4;
}