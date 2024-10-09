function loadData() {
    var o;

    fetch('./list.json')
    .then((response) => response.json())
    .then((json) => {return json});
}

function main() {
    var data = loadData();
    console.log(data);
    console.log(data[0]);
}