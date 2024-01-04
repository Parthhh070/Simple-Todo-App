let input = document.querySelector("#inp");
let button = document.querySelector("button");
let list = document.querySelector("#tasks");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let deletebtn = document.createElement("button");
  deletebtn.classList.add("delete");
  deletebtn.innerText = "delete";

  item.appendChild(deletebtn);
  list.appendChild(item);
  input.value = "";
});

list.addEventListener("click", function (event) // this is event delegation 
 {
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove(); // this will remove the parent element of button i.e -: list tag;
  }
});
