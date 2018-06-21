
let ingredients = [
  "1 1/2 pounds Brussels sprouts",
  "3 tablespoons good olive oil",
  "3/4 teaspoon kosher salt",
  "1/2 teaspoon freshly ground black pepper"
];

let directions = [
  "Preheat oven to 400 degrees F.",
  "Cut off the brown ends of the Brussels sprouts.",
  "Pull off any yellow outer leaves.",
  "Mix them in a bowl with the olive oil, salt and pepper.",
  "Pour them on a sheet pan and roast for 35 to 40 minutes.",
  "They should be until crisp on the outside and tender on the inside.",
  "Shake the pan from time to time to brown the sprouts evenly.",
  "Sprinkle with more kosher salt (I like these salty like French fries).",
  "Serve and enjoy!"
];
let body = document.getElementsByTagName("body")[0];
let firstDiv = document.getElementById("first-list");
let secondDiv = document.getElementById("second-list");
let firstButton = document.getElementById("first");
let secondButton = document.getElementById("second");
firstButton.onclick = function(){
  for (let i = 0; i < ingredients.length; i++ ){
    let firstResult = firstDiv.innerHTML += "<li>"+ ingredients[i] +"</li>";
      if(firstButton.style.display === "none"){
        firstButton.style.display = firstResult;
      }else{
        firstButton.style.display = "none";
    }
  }
};


secondButton.onclick = function(){
  directions.forEach((item)=>{
    let secondResult = secondDiv.innerHTML += "<li>"+ item +"</li>";
      if(secondButton.style.display === "none"){
        secondButton.style.display = secondResult;
      }else{
        secondButton.style.display = "none";
    }
  });
};

let headers = document.getElementById("main-header");
headers.onclick = function(){
  let colors = ["#40376E", "#AAC0AA", "#7D8491"];
  let index = Math.floor(Math.random() * colors.length);
  let color = colors[index];
  headers.style.backgroundColor = color;
};
