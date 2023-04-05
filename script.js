var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user))
  window.location.href= "index2.html"
  
});

function temp(){
    var profile = localStorage.getItem("user")
    console.log(profile)
}


// // local storage ingredients:
// var veggiesInput = document.getElementById("veggies");
// var proteinsInput = document.getElementById("proteins");
// var condimentsInput = document.getElementById("condiments");

// // check local storage for ingredients:
// var ingredientInfo = JSON.parse(localStorage.getItem("ingredientInfo"));
// var veggies = JSON.parse(localStorage.getItem("veggie"));
// var proteins = JSON.parse(localStorage.getItem("proteins"));
// var condiments = JSON.parse(localStorage.getItem("condiments"));

// if (ingredientInfo){
//     veggiesInput.value = ingredientInfo.veggies;
//     proteinsInput.value = ingredientInfo.proteins;
//     condimentsInput.value = ingredientInfo.condiment;
// };

// const inputEl = document.getElementById('user-input');
// const badgesEl = document.getElementById('badges');
// badgesEl.style = 'display: flex';

// //var allIngredients = [];
// var ingredientsArray = [];

// document.getElementById('add').addEventListener('click', function () {
//     var userIngredient = inputEl.value;
//     ingredientsArray = JSON.parse(localStorage.getItem('ingredients'))
//     if (ingredientsArray.length >= 3) {
//         document.getElementById('warning').textContent = 'up to 3!!'
//     } else {
//         ingredientsArray.push(userIngredient)
//         //ingredientsArray.push(ingredient);

//         localStorage.setItem('ingredients', JSON.stringify(ingredientsArray));
//     }
//     loadIngredients();

//     inputEl.value = '';
// })
// loadIngredients();

// document.getElementById('wand-btn').addEventListener('click', function () {
//     // call api with all ingredients.
//     fetchRecipe();
// })

// function loadIngredients() {
//     if (localStorage.getItem('ingredients')) {
//         ingredientsArray = JSON.parse(localStorage.getItem('ingredients'))
//     }
//     badgesEl.innerHTML = ''
//     for (var i = 0; i < ingredientsArray.length; i++) {

//         var divEl = document.createElement('div');
//         var buttonEl = document.createElement('button');
//         divEl.textContent = ingredientsArray[i];
//         divEl.style = "border: 1px solid grey; padding: 3px 5px; margin: 5px";
//         divEl.setAttribute('id', ingredientsArray[i]);
//         buttonEl.innerHTML = "<span style='color:red'> X </span>";
//         buttonEl.classList.add('delete');
//         buttonEl.setAttribute('id', ingredientsArray[i]);
//         buttonEl.setAttribute('data-text', ingredientsArray[i]);
//         divEl.appendChild(buttonEl);
//         badgesEl.appendChild(divEl);
//     }
// var deleteEl = document.querySelectorAll('.delete')
// deleteEl.forEach((button) => {
//     button.addEventListener('click', function() {
//         var deleteIngredient = button.parentNode
//         deleteIngredient.remove();
//         var ingredientsArray = JSON.parse(localStorage.getItem('ingredients'));
//         var ingredientIndex = ingredientsArray.indexOf(`${button.id}`);
//         if (ingredientIndex > -1){
//             ingredientsArray.splice(ingredientIndex, 1)
//         }
//         localStorage.setItem('ingredients', JSON.stringify(ingredientsArray));
//         console.log(button.id);
//     })
// });
// }


