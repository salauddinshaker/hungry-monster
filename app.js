
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeals(data.categories));


const displayMeals = meals => {
meals.forEach(food => {
    const mealsDiv = document.getElementById('mealList');
    // for (let i = 0; i < meals.length; i++) {
    //     const food = meals[i];
    const mealDiv = document.createElement('div');
    mealDiv.className = 'meal';
    const mealInfo = `
    <img src="${food.strCategoryThumb}"></img>  
    <div>   <p><button onclick="displayMealDetail('${food.strCategory}')">${food.strCategory}</button></p>
    </div>
    
            `           
    mealDiv.innerHTML = mealInfo;
    mealsDiv.appendChild(mealDiv);

});
}

const displayMealDetail = name =>{
const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
console.log(url);
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data.filter));
}
