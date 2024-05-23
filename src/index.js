function generateRecipe(event) 
{
event.preventDefault();
new Typewriter("#recipe", {
    strings: "add rice to a bowl",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe)