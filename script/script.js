// ai's code

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  lijstTodos.push({wat:input.value,gedaan:"nee"})
  console.log(lijstTodos);
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    //eigen aanpassing deel 3
    if (winkelsSelect.value == "geen winkel") {
      li.textContent = text
    } else{li.textContent = `${text} (${winkelsSelect.value})`}
    //terug ai code
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

// eigen code
// deel 1 / deel 5
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
  // maak gebruik van een boolean ipv JA
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

// zorg dat je toekomstgericht werkt, maak een lijst van objecten van winkels
const WinkelsLijst = ["geen winkel", "aldi", "colruyt", "bonAp", "delhaize"]

WinkelsLijst.forEach(winkel => {
  const winkelOption = document.createElement("option")
  winkelOption.innerHTML = winkel
  winkelsSelect.appendChild(winkelOption)
});

// deel 3
// zie ai code

// deel 4
// zie ai code

// ik mis vooral functies, 
// oefen meer op het aanmaken en gebruiken van functies