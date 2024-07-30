document.getElementById("add-button").addEventListener("click", addTask);

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Cross symbol
    span.addEventListener("click", function () {
      this.parentElement.remove();
      saveData();
    });
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;

    const spans = listContainer.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].addEventListener("click", function () {
        this.parentElement.remove();
        saveData();
      });
    }
  }
}

showTask();
