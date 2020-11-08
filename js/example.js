var list = document.querySelectorAll("ul")[0];

var ulNode1 = document.createElement("li");
var txtNode1 = document.createTextNode("cream");
ulNode1.id = "five";
ulNode1.appendChild(txtNode1);
list.appendChild(ulNode1);

var ulNode2 = document.createElement("li");
var txtNode2 = document.createTextNode("kale");
ulNode2.id = "zero";
ulNode2.appendChild(txtNode2);
list.prepend(ulNode2)

for (var i = 0; i < list.childElementCount; i++ )
    list.children[i].className = "cool";

var header2 = document.querySelectorAll("h2")[0];

var spanNode = document.createElement("span");
var txtNode3 = document.createTextNode(list.childElementCount);
spanNode.appendChild(txtNode3);
header2.appendChild(spanNode);
