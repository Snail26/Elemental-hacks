
// Elemental clone, development began 15 Oct. 2024
// Inspired by Cary Huang's Elemental games, Orteil's Genesis, and similar games

var d = {
    gid: function (id) { return document.getElementById(id) },
    gtn: function (tn) { return document.getElementsByTagName(tn) },
    gcn: function (cn) { return document.getElementsByClassName(cn) },
    ce: function (tag) { return document.createElement(tag) },
    qs: function (qry) { return document.querySelector(qry) }
}

var elementsBox = d.gid('elements');
var basicElementsBox = d.gid('basic_elements');
var selectedDisplay = d.gid('selected');
var resultDisplay = d.gid('result');
var elementsDisplay = d.gid('element_counter');

var basicElements = ['air', 'earth', 'fire', 'water'];
var categories = {};
var elements = {};
var formulae = [];
var selectedElements = ['', ''];

function fetchData() {
    fetch(`./data.txt`).then(data => data.text()).then(text => {
        text = text.split('**CATEGORIES**\r\n')[1]
        let fetchedCategories = text.split('\r\n**ELEMENTS**\r\n')[0]
        text = text.split('\r\n**ELEMENTS**\r\n')[1]
        let fetchedElements = text.split('\r\n**FORMULAE**\r\n')[0]
        let fetchedFormulae = text.split('\r\n**FORMULAE**\r\n')[1]
        fetchedCategories.split('\r\n').forEach(category => {
            if (category != '') {
                categories[category.split('|')[0].trim()] = { color: category.split('|')[1].trim() }
            }
        })
        fetchedElements.split('\r\n').forEach(element => {
            if (element != '') {
                elements[element.split('|')[0].trim()] = {
                    category: element.split('|')[1].trim(),
                    owned: basicElements.includes(element.split('|')[0].trim()),
                    selected: false
                }
            }
        })
        fetchedFormulae.split('\r\n').forEach(formula => {
            if (formula != '') {
                let components = formula.split('=')[0]
                let products = formula.split('=')[1]
                formulae.push({
                    elements: components.split('+').map(elem => elem.trim()),
                    products: products.split('+').map(p => p.trim()),
                })
            }
        })
        sortElements()
        load()
        updateSelectedDisplay()
    })
}

Array.prototype.remove = function (val) {
    let i = this.indexOf(val);
    if (i > -1) { this.splice(i, 1); }
    return this;
}

function sortElements() {
    let keyarr = basicElements.concat(Object.keys(elements).sort().remove('air').remove('water').remove('fire').remove('earth'))
    let oldelements = elements;
    elements = {};
    keyarr.forEach(key => {
        elements[key] = oldelements[key]
    })
}

function updateElements() {
    elementsBox.innerHTML = ""
    basicElementsBox.innerHTML = ""
    Object.keys(elements).forEach(key => {
        let element = elements[key]
        if (element.owned) {
            let elemDiv = d.ce('div')
            elemDiv.classList.add('element')
            if (element.selected) { elemDiv.classList.add('selected') }
            elemDiv.innerHTML = key
            elemDiv.style = `background-color:${categories[element.category].color}; color:${contrastColor(categories[element.category].color)};`
            elemDiv.addEventListener('click', () => {
                selectElement(key)
            })
            if (basicElements.includes(key)) { basicElementsBox.appendChild(elemDiv) }
            else {
                if (d.gid('search_input').value != '') {
                    if (key.toUpperCase().indexOf(d.gid('search_input').value.toUpperCase()) > -1) { elementsBox.appendChild(elemDiv) }
                } else { elementsBox.appendChild(elemDiv) }
            }
        }
    })
}

function search() { updateElements('search') }

var style = 0
var styles = [
    `.element {
width:54px;
height:54px;
margin:6px;
display:inline-block;
vertical-align:top;
word-break: break-word;
padding:3px;
border-radius:5px;
}

.element.selected {
border:4px #5bb solid;
margin:2px;
}

body, button {
font-family:Segoe UI, Verdana, Tahoma, sans-serif;
}`,
    `.element {
margin:6px;
display:inline-block;
vertical-align:top;
word-break: break-word;
padding:3px;
border-radius:5px;
}

.element.selected {
border:4px #5bb solid;
margin:2px;
}

body, button {
font-family:Segoe UI, Verdana, Tahoma, sans-serif;
}`
]
function switchStyle() {
    style = (style + 1) % 2
    document.head.getElementsByTagName('style')[0].innerHTML = styles[style]
}

function contrastColor(clr) {
    let color = clr.split('#')[1].split('').map(v => parseInt(v + v, 16))
    if ((color[0] * 0.299) + (color[1] * 0.587) + (color[2] * 0.114) > 186) { return '#000' } else { return '#fff' }
}

function logStats() {
    console.log(`There are ${Object.keys(elements).length} elements and ${Object.keys(formulae).length} formulae.`)
    let longestKeys = ['a']
    let shortestKeys = ['aaaaaaaaaaaaaaaa']
    let keysAlphabet = Object.keys(elements).sort()
    Object.keys(elements).forEach(key => {
        if (key.length > longestKeys[0].length) { longestKeys = [key] }
        else if (key.length == longestKeys[0].length) { longestKeys.push(key) }
        if (key.length < shortestKeys[0].length) { shortestKeys = [key] }
        else if (key.length == shortestKeys[0].length) { shortestKeys.push(key) }
    })
    console.log(`The longest element(s): ${longestKeys.join(', ')} with ${longestKeys[0].length} characters.`)
    console.log(`The shortest element(s): ${shortestKeys.join(', ')} with ${shortestKeys[0].length} characters.`)
    console.log(`First alphabetically: ${keysAlphabet[0]} | Last alphabetically: ${keysAlphabet[keysAlphabet.length - 1]}`)
    let bestElements = ['rain']
    let bestProducts = ['rain']
    let elementTracking = JSON.parse(JSON.stringify(elements))
    let productTracking = JSON.parse(JSON.stringify(elements))
    Object.keys(elementTracking).forEach(key => { elementTracking[key] = 0 })
    Object.keys(productTracking).forEach(key => { productTracking[key] = 0 })
    Object.keys(formulae).forEach(key => {
        let formula = formulae[key]
        elementTracking[formula.elements[0]]++
        if (formula.elements[0] != formula.elements[1]) { elementTracking[formula.elements[1]]++ }
        formula.products.forEach((blahblah, i) => { productTracking[formula.products[i]]++; })
    })
    Object.keys(elementTracking).forEach(key => {
        if (elementTracking[key] > elementTracking[bestElements[0]]) { bestElements = [key] }
        else if (elementTracking[key] == elementTracking[bestElements[0]]) { bestElements.push(key) }
    })
    Object.keys(productTracking).forEach(key => {
        if (productTracking[key] > productTracking[bestProducts[0]]) { bestProducts = [key] }
        else if (productTracking[key] == productTracking[bestProducts[0]]) { bestProducts.push(key) }
    })
    console.log(`Best element(s): ${bestElements.join(', ')} used in ${elementTracking[bestElements[0]]} formulae`)
    console.log(`Best product(s): ${bestProducts.join(', ')} made with ${productTracking[bestProducts[0]]} formulae`)
}

function findProducts(elem1, elem2) {
    let foundFormula = formulae.find(formula => {
        let elems1 = [elem1, elem2].sort()
        let elems2 = formula.elements.sort()
        for (let i = 0; i < 2; i++) { if (elems1[i] !== elems2[i]) { return false; } }
        return true;
    })
    return typeof foundFormula == 'undefined' ? undefined : foundFormula.products;
}

function selectElement(key) {
    if (selectedElements.indexOf("") == -1) {
        elements[key].selected = true;
        elements[selectedElements[0]].selected = selectedElements[0] == selectedElements[1] // the old selected element stays selected if it was in both slots
        selectedElements[0] = selectedElements[1]
        selectedElements[1] = key
    }
    else {
        if (selectedElements[0] == "") { selectedElements[0] = key }
        else { selectedElements[1] = key }
        elements[key].selected = true;
    }
    updateSelectedDisplay()
    updateElements()
}

function updateSelectedDisplay() {
    selectedDisplay.innerHTML = `${selectedElements[0] == '' ? '_____' : selectedElements[0]} + ${selectedElements[1] == '' ? '_____' : selectedElements[1]}`
}

function updateElementsDisplay() {
    let elemsO = 0
    Object.keys(elements).forEach(key => { if (elements[key].owned) { elemsO++ } })
    elementsDisplay.innerHTML = `${elemsO}/${Object.keys(elements).length}`
}

function combineElements() {
    if (selectedElements.indexOf("") == -1) {
        let products = findProducts(selectedElements[0], selectedElements[1])
        if (typeof products != 'undefined') { products.forEach(product => { elements[product].owned = true; }) }
        selectedElements.forEach(key => { elements[key].selected = false; })
        selectedElements = ['', '']
        resultDisplay.innerHTML = `${typeof products == 'undefined' ? 'No product found :(' : `Created <strong>${products.join(', ')}</strong>!`}`
        updateSelectedDisplay()
        updateElements()
        updateElementsDisplay()
    }
}

function save() {
    let gameSave = {}
    Object.keys(elements).forEach(key => { gameSave[key] = elements[key].owned })
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function load() {
    let savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (savedGame) {
        Object.keys(savedGame).forEach(key => {
            if (typeof elements[key] != 'undefined') { elements[key].owned = savedGame[key] }
        })
    }
    updateElements()
    updateElementsDisplay()
}

fetchData();
