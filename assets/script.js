const input = document.querySelector("#field");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

getitem();

btn.addEventListener("click", addelement);
document.addEventListener("keyup", (e) => {
  console.log(e);

  if (e.code === "Enter") {
    addelement();
  }
});


function addelement() {
  const task = input.value.trim();
  if (task) {
    create_element(task);
    input.value = "";
    storedata();
  } else {
    alert("Field is empty");
  }
}

function create_element(t) {
  const ele = document.createElement("li");
  ele.textContent = t;
  list.appendChild(ele);

  const del_btn = document.createElement("button");
  del_btn.textContent = "Delete";
  del_btn.classList.add("btn");
  ele.appendChild(del_btn);

  del_btn.addEventListener("click", () => {
    list.removeChild(ele);
    storedata();
  });
}

function storedata() {
  let arr = [];
  list.querySelectorAll("li").forEach((element) => {
    arr.push(element.textContent.replace("Delete", "").trim());
  });

  localStorage.setItem("item", JSON.stringify(arr));
}

function getitem() {
  const tasks = JSON.parse(localStorage.getItem("item")) || [];
  tasks.forEach((task) => {
    create_element(task);
  });
}
