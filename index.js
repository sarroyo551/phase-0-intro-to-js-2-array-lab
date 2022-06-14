// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (names) {
  cats.push(names);
}

function destructivelyPrependCat (names) {
  cats.unshift(names);
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}    

function appendCat(name) {
    let newCats = [...cats, name]
    return newCats;
}

function prependCat(name) {
    let newCats = [...cats]
    newCats.unshift(name);
    return newCats;
}

function removeLastCat() {
    let newCats = [...cats]
    newCats.pop();
    return newCats;
}

function removeFirstCat () {
    let newCats = [...cats]
    newCats.shift();
    return newCats;
}