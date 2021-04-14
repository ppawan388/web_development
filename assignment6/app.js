const inp = document.getElementById("inp");
const btn = document.getElementById("addTodo");
const list = document.getElementById("list");

btn.onclick = function (e) {
  console.dir(inp);
  const todoText = inp.value;
  // todoText = todoText.concat('&nbsp&nbsp&nbsp');

  if (todoText != "") {
    var li = document.createElement("li");
    li.class = "styl";
    li.innerHTML = '&nbsp &nbsp &nbsp'+todoText;
    var itag = document.createElement("i");
    itag.className = "fas fa-trash";
    itag.id = "del";
    var chx = document.createElement("input");
    chx.type = "checkbox";
  } else {
    alert(" Todo cannot be empty!!");
  }

  itag.onclick = function (e) {
    console.log(e);
    if (e.target == itag) {
      li.remove();
    }
  };
  chx.onclick = function (e) {
    console.log(e.target);
    li.classList.toggle("styl");
  };

  list.append(li);
  li.prepend(itag);

  li.prepend(chx);
  
  inp.value = "";
};
