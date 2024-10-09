function loadData() {
    fetch('./list.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function main() {
    loadData();
}