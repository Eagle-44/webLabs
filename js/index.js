import {addItemToPage, renderCircus, calcAmountOfPerformances} from "./index_util.js";

const searchInput = document.getElementById("search__input");
const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const switchButton = document.getElementById("switch");
const countButton = document.getElementById("count__button");
const countVal = document.getElementById("count__value");

export let circuses;
export let index;

document.addEventListener("DOMContentLoaded",() => { 
    if (localStorage.getItem('circuses') == null) {
        index = 3;
        localStorage.setItem('index', JSON.stringify(index));
  circuses = [
    // {
    //     id: 0,
    //     name: "Shapito",
    //     amountOfPlaces: 1111,
    //     address: "Str.Lion 10",
    //     performancesPerYear: 111,
    // },
    // {
    //     id: 1,
    //     name: "Reper",
    //     amountOfPlaces: 123,
    //     address: "Str.qwerty 1",
    //     performancesPerYear: 122,
    // },
    // {
    //     id: 2,
    //     name: "Res",
    //     amountOfPlaces: 9999,
    //     address: "13 Av.New",
    //     performancesPerYear: 34,
    // }
];
    localStorage.setItem('circuses', JSON.stringify(circuses));
    }else{
        circuses = JSON.parse(localStorage.getItem('circuses'));
        index = JSON.parse(localStorage.getItem('index'));
    }
renderCircus(circuses);
console.log(circuses);
});

searchButton.addEventListener("click", () =>{
    const searchCircus = circuses.filter(circus => circus.name.search(searchInput.value)!== -1);
    renderCircus(searchCircus);
});

clearButton.addEventListener("click", () =>{
    renderCircus(circuses);
    searchInput.value = "";
});

switchButton.addEventListener("change", () => {
    let sortedCircus = Array.from(circuses);
    if (switchButton.checked) {
        sortedCircus.sort((circus1, circus2) => circus1.amountOfPlaces - circus2.amountOfPlaces);
    }
    renderCircus(sortedCircus);
});

countButton.addEventListener("click", () => {
    countVal.innerHTML = calcAmountOfPerformances(circuses);
});

window.removeCircus = (id) => {
    const arrAmountOfPeople = circuses.map(circuses => circuses.id);
    const index = arrAmountOfPeople.indexOf(id);
    circuses.splice(index, 1);
    localStorage.setItem('circuses', JSON.stringify(circuses));
    renderCircus(circuses);
}

window.editCircus = (id) => {
    localStorage.setItem('editCircus', JSON.stringify(id));
    window.location.href = "create.html";
}

