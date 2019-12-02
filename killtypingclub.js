alert("activating")
for (var i = 0; i < 10000000; i++) {
    document.getElementById('main').innerHTML += 'mewo';
    alert("The current index is: "+i+"! How far can you pc handle? All 10000000?")
}
