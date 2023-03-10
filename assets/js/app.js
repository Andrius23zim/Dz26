
let one = document.getElementById("one");

let li2 = document.createElement("li");
li2.innerHTML = "2";
li2.setAttribute("id", "two");

let li3 = document.createElement("li");
li3.innerHTML = "3";
li3.setAttribute("id", "three");

one.insertAdjacentElement("afterend", li2);
li2.insertAdjacentElement("afterend", li3);