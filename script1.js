// //var allIngredients 
const getMealButton = document.getElementById('get-meal');
const mealContainer = document.getElementById('meal');

getMealButton.addEventListener("click", ()=> {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then(res => res.json())
    .then(res => {
    createMeal(res.meals[0])
    })
});

function createMeal(meal){
    const ingredients = [];
    for(i=1; i<=20; i++) {
        if(meal[`stringIngredients${i}`]){
            ingredients.push(
                `${meal[`strIngredient${i}`]} -
            ${meal[`strMeasure${i}`]}`
            )
        }else{
            break;
        }
    }
    console.log(ingredients);

    mealContainer.innerHTML = `
    <div class="row">
        <div class="columns five">
            <img src="${meal.strMealThumb}" alt="Meal Img" />
            <p><strong>Category:</strong>${meal.strCategory}</p>
            <p><strong>Area:<strong>${meal.strArea}</p>
            <p><strong>Measure:</strong>${meal.strMeasure}</p>
            <p><strong>Tags::</strong>${meal.strTags.split(',').join(',')}</p>
            <h5>Ingredients</h5>
            <ul>
            ${ingredients.map(ingredient => `
            <li>${ingredient}</li>
            `).join('')}
            </ul>
        </div>
            <div class="columns seven">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        <h5>Video Recipe</h5>
        <div class="video wrapper">
        <iframe src="https:\/\/www.youtube.com/embed/${meal.strYoutube.slice(-11)}" />
    </div>
    </div>
    `;
}
