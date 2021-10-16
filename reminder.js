
var i = 0;
function increment(){
i += 1;
}

function remind()
{
	alert("All Reminders And Events Saved");
}
function removeElement(parentDiv, childDiv)
{
 if (childDiv == parentDiv)
 {
 alert("The parent div cannot be removed.");
}
else if (document.getElementById(childDiv))
{
 var child = document.getElementById(childDiv);
 var parent = document.getElementById(parentDiv);
 parent.removeChild(child);
}
else{
 alert("Child div has already been removed or does not exist.");
 return false;
}
}
function nameFunction()
{
 var r = document.createElement('span');
 var y = document.createElement("label");
 var spc = document.createElement("br");
 y.setAttribute("type", "text");
 var t= document.createTextNode(document.getElementById("txt").value);
 var g = document.createElement("IMG");
 g.setAttribute("src", "delete.png");
 g.setAttribute("width", "20px");
 g.setAttribute("height", "20px");
 increment();
 y.setAttribute("Name", "textelement_" + i);
 r.appendChild(y);
 r.appendChild(t);
 g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
 r.appendChild(g);
 r.appendChild(spc);
 r.setAttribute("id", "id_" + i);
 document.getElementById("myForm").appendChild(r);
}