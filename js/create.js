import {getInputValues, getInputValuesEdit, clearInputs} from "./create_util.js";

let circuses = JSON.parse(localStorage.getItem('circuses'));
let index = JSON.parse(localStorage.getItem('index'));
let editId = JSON.parse(localStorage.getItem('editCircus'));

const submitButton = document.getElementById("button__submit");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('editCircus') != null) {
        document.title = "Edit Circus";
        document.getElementById("title").innerHTML = "Edit Circus";
    }
})

submitButton.addEventListener("click", event => {
    if (localStorage.getItem('editCircus') != null) {
        event.preventDefault();
        const { name, address, amountOfPlaces, performancesPerYear } = getInputValuesEdit();
        editItem(editId,{name, address, amountOfPlaces, performancesPerYear});
        localStorage.removeItem('editCircus');
        clearInputs();
    } else{
        event.preventDefault();
        const {id, name, address, amountOfPlaces, performancesPerYear } = getInputValues();
        addItem({ id, name, address, amountOfPlaces, performancesPerYear });
        clearInputs();
    }
})

const addItem = ({id, name, address, amountOfPlaces, performancesPerYear}) => {
    const newCircus = {
        id,
        name,
        address,
        amountOfPlaces,
        performancesPerYear,
    }
    circuses.push(newCircus);
    localStorage.setItem('circuses', JSON.stringify(circuses));
}

const editItem = (id,{name, address, amountOfPlaces, performancesPerYear}) => {
    const newCircus = {
        id,
        name,
        address,
        amountOfPlaces,
        performancesPerYear,
    }
    circuses[editId] = newCircus;
    localStorage.setItem('circuses', JSON.stringify(circuses));
}

