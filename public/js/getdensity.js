function ajaxDensity() {
  $.get( '/getDensity', function(data) {
  	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(data);         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("resultlist").appendChild(node);
   });
}