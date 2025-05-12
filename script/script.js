// ai's code

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    //eigen aanpassing
    li.textContent = `${text}(${winkelsSelect.value})`;
    //terug ai code
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

// eigen code
// deel 1
const lijstTodos = [
  { wat:"vloer kuisen",
    gedaan:"ja"
  },
  { wat:"muur schilderen",
    gedaan:"nee"
  },
  { wat:"tafel opruimen",
    gedaan:"ja"
  }
]

lijstTodos.forEach(todo => {
  const optie = document.createElement("li")
  optie.innerHTML = todo.wat
  if (todo.gedaan == "ja") {
    optie.classList.toggle("completed")
  }
  optie.addEventListener("click", function () {
    optie.classList.toggle("completed")
  });
  list.appendChild(optie)
});

// deel 2
const winkelsSelect = document.querySelector("#winkels")

const WinkelsLijst = ["aldi", "colruyt", "bonAp", "delhaize"]

WinkelsLijst.forEach(winkel => {
  const winkelOption = document.createElement("option")
  winkelOption.innerHTML = winkel
  winkelsSelect.appendChild(winkelOption)
});

// deel 3
// zie ai code