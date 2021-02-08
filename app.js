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
        <div onclick=" getDetails('${food.strMealThumb}', '${food.strMeal}')">
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

const getDetails = (image, name) =>{
    console.log(image, name);

     const upadanDetails = document.getElementById('upadanDetail');
     upadanDetails.innerHTML = '';
    // upadan.forEach(foodItem => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'details';
        mealDiv.innerHTML = `
        
        <img src="${image}"></img>  
        <div> 
        <p>${name}</p>

        </div>
       
        `
        upadanDetails.appendChild(mealDiv);
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
