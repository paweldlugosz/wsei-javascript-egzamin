// Zad 1
let allElementsSampleClass = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements) {
    var array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].tagName);
    }
    return array;
}
console.log(getTagsOfElements(allElementsSampleClass));


// Zad 2
var sampleId = document.getElementById('sample_id');

function getClassesOfElement(element) {
    return element.className.split(' ');
}
console.log(getClassesOfElement(sampleId));


// Zad 3
var listElements = document.querySelectorAll('.sample_class_2 > ul li');
function getInnerTextsOfElements(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].innerHTML);
    }
    return array;
}
console.log(getInnerTextsOfElements(listElements));


// Zad 4
var allLinks = document.querySelectorAll('a');
function getAddressesOfElements(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].href);
    }
    return array;
}
console.log(getAddressesOfElements(allLinks));


/// Zad 5
var child = document.getElementsByClassName('sample_class_3')[0].children;
console.log(getTagsOfElements(child));



