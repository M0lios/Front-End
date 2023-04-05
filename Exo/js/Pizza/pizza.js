function StartJSON() {
  fetch("pizzas.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      CreateDiv(data);
    });
}

function CreateDiv(_data) {
  var preview = document.getElementsByClassName("preview")[0];
  preview.innerHTML = "";

  var pizzeriaName = document.createElement("div");
  pizzeriaName.innerHTML = _data.Name;
  pizzeriaName.setAttribute("id", "NomPizza");

  var pizzeriaSlogan = document.createElement("div");
  pizzeriaSlogan.innerHTML = _data.Slogan;
  pizzeriaSlogan.setAttribute("id", "Slogan");

  preview.appendChild(pizzeriaName);
  preview.appendChild(pizzeriaSlogan);


  var pizzeriaListPizzas = document.createElement("div");
  pizzeriaListPizzas.setAttribute("id", "PizzaList");
  pizzeriaListPizzas.setAttribute("class", "contenu");

  var listPizzas = _data.Pizzas;
  for (var x = 0; x < listPizzas.length; x++) {
    var pizzaListIngredient = listPizzas[x].Ingredients;
    var pizzeriaListElement = document.createElement("div");
    pizzeriaListElement.setAttribute("class", "card");

    pizzeriaListElement.innerHTML += "<h1 class='pizzanom'>" + listPizzas[x].PizzaName + "</h1>"
    + "<h2 class='pizzaprix'>" + listPizzas[x].Prix + " €</h2>"
    + "<img src=" + listPizzas[x].PizzaImg + ">"
    + "<ul>";

    for (var y = 0; y < pizzaListIngredient.length; y++) {
      pizzeriaListElement.innerHTML += "<li class='ingredient'>" + pizzaListIngredient[y] + "</li>";
    }
    
    pizzeriaListElement.innerHTML += "</ul>";

    pizzeriaListPizzas.appendChild(pizzeriaListElement);
  }
  preview.appendChild(pizzeriaListPizzas);
}