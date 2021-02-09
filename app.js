const searchMeal = () => {
    const searchInput = document.getElementById('searchField').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}




const displayMeals = foods => {

    const mealContainer = document.getElementById('mealList');

    mealContainer.innerHTML = '';




    foods.forEach(food => {

        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
        <div onclick=" getDetails('${food.strMealThumb}', '${food.strMeal}', '${food.strIngredient1}', '${food.strIngredient2}', '${food.strIngredient3}', '${food.strIngredient4}',)">
        <img src="${food.strMealThumb}"></img>  
        <div> 
        <p>${food.strMeal}</p>
        </div>
        </div>
        `
        mealContainer.appendChild(mealDiv);

    }
    );


}

const getDetails = (image, name, opadan1, opadan2, opadan3, opadan4) => {

    const upadanDetails = document.getElementById('upadanDetail');
    upadanDetails.innerHTML = '';
    // upadan.forEach(foodItem => {
    const mealDiv = document.createElement('div');
    mealDiv.className = 'details';
    mealDiv.innerHTML = `  
            <img src="${image}"></img>  
        <div> 
        <h4>${name}</h4>
        </div>
        <div class="opadan-class">
        <p>Ingredients</P>
        <div>
            <ul>
                <li>${opadan1}</li>
                <li>${opadan2}</li>
                <li>${opadan3}</li>
                <li>${opadan4}</li>
            </ul>
        </div>
        </div>
        `
    upadanDetails.appendChild(mealDiv);
  
}








