function loadData() {
    o;

    fetch('./list.json')
    .then((response) => response.json())
    .then((json) => o = json);

    return o;
}

function main() {
    loadData();
}