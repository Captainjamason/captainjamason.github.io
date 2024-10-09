function loadData() {
    var o = require('./data.json');
}

function main() {
    var data = loadData();
    console.log(data);
    console.log(data[0]);
}