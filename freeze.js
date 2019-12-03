var id = prompt("id of an element");
for (var i = 0; i < 10000000; i++) {
    document.getElementById(id).innerHTML += 'mewo';
}
alert("frozen");
