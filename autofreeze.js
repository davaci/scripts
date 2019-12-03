alert("type the id of an element to freeze page, or use 'body', 'head', 'div', or 'html'")
document.getElementsByTagName("BODY")[0].id = "body";
document.getElementsByTagName("HEAD")[0].id = "head";
document.getElementsByTagName("DIV")[0].id = "div";
document.getElementsByTagName("html")[0].id = "html";
var id = prompt("id of an element");
for (var i = 0; i < 10000000; i++) {
    document.getElementById(id).innerHTML += 'mewo';
}
alert("frozen");
