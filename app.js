const searchMeal = () => {
    const searchInput = document.getElementById('searchField').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}




const displayMeals = foods => {
    const mealContainer = document.getElementById('mealList');
    foods.forEach(food => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
        <img src="${food.strMealThumb}"></img>  
     <div> 
     <p><button onclick="displayMealDetail('${food.strCategoryThumb}')">${food.strCategory}</button></p>
     </div>
        `
        mealContainer.appendChild(mealDiv);
    }
    );
}



//     const mealsDiv = document.getElementById('mealList');
//     // for (let i = 0; i < meals.length; i++) {
//     //     const food = meals[i];
//     const mealDiv = document.createElement('div');
//     mealDiv.className = 'meal';
//     const mealInfo = `
//     <img src="${food.strCategoryThumb}"></img>  
//     <div>   <p><button onclick="displayMealDetail('${food.strCategoryThumb}')">${food.strCategory}</button></p>

//     </div>

//             `     

//     mealDiv.innerHTML = mealInfo;
//     mealsDiv.appendChild(mealDiv);

// });
// }

// const displayMealDetail = name=>{
// const url = `https://www.themealdb.com/api/json/v1/1/${name}`
// console.log(url);
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data.name));
// }
