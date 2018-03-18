document.body.onload = addElement;
var my_div = newDiv = null;

function addElement() {
  var newDiv = document.createElement("a");
  newDiv.innerHTML = "asdasd";
  newDiv.setAttribute("href", "https://google.com");
  
  my_div = document.getElementById("header");
  document.body.insertBefore(newDiv, my_div);
}
alert("Привет!" )
