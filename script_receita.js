window.onload = function(){
    alert("Estou ciente que irei passar vontade!"); 
}
function searchRecipes() {
   
    var input = document.getElementById('search').value.toLowerCase();
    var recipes = document.querySelectorAll('.recipe');
    var foundRecipe = false;

    
    recipes.forEach(function(recipe) {
        var recipeTitle = recipe.querySelector('h2').textContent.toLowerCase();
        var recipeIngredients = recipe.querySelectorAll('ul li');
        var match = false;

        if (recipeTitle.includes(input)) {
            match = true;
        }

        recipeIngredients.forEach(function(ingredient) {
            if (ingredient.textContent.toLowerCase().includes(input)) {
                match = true;
            }
        });

        if (match) {
            recipe.style.display = 'block';
            foundRecipe = true;
        } else {
            recipe.style.display = 'none';
        }
       
    });
    if (!foundRecipe) {
        alert('Nenhuma receita encontrada para a pesquisa.');
    }
}