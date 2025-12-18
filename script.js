var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Fast%20Food%20Nutrition.csv"
var foodName = getColumn(url, 1)
var type = getColumn(url, 2)
var calories = getColumn(url, 4)
var fat = getColumn(url, 5)
var carbs = getColumn(url, 7)
var protein = getColumn(url, 6)
var sodium = getColumn(url, 10)

//function that takes the parameters selectedType, selectedCal, proteinChoice
function getResults(selectedType, selectedCal, proteinChoice){
    //making a list of foods that match these parameters 
    var matchingFoods=[];
    //cycling though the list of foodNames one by one
    for (var i=0; i < foodName.length; i++){
       //if we find a food that = the type of food we selected in out drop down menu & the protein number is above the one we selcted & the calories are less than the number we slided
        if (type[i]==selectedType && parseFloat(protein[i])> parseInt(proteinChoice) && calories[i]< selectedCal){ 
        //then we push that food to out list   
        matchingFoods.push(foodName[i])
       
    }
}
console.log(matchingFoods)
//this will clear the output Box before appending new items
 document.getElementById("outputBox").innerHTML=""
//loop through my list of matches
for (var i=0; i < matchingFoods.length; i++){
    //create a paragraph element for each matching name
    var food = document.createElement("p");
    //set the inner HTML of that new element to be the matching food name
    food.innerHTML=matchingFoods[i];
    //apend the name to the outputBox
    document.getElementById("outputBox").appendChild(food);

}
}



function showCal(){ //defined function called showCal
    var size= document.getElementById("selectedCal").value; // Declares a variable 'size' and assigns it the value of an HTML element with id "selected Cal".
    document.getElementById("sliderVal").innerHTML= size +" Calories or less" // Updates the inner HTML of an element with id "sliderVal" to display the 'size' value followed by " Calories or Less".
}

showCal();


