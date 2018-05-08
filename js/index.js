// -- Creating Recipes from JavaScript - Could be read from CSV --//
function populateRecipes(){

var recipeList=[];

//define a recipe object and create as many as needed
	var recipe = {
    date:"22nd October 2016",
    nationality:"Thai",
    name:"Thai Yellow Curry Noodles with Shiitake Mushrooms",
    image:"img/recipe1.jpg"
};

//add to the recipe object array
recipeList.push(recipe);

	var recipe2 = {
    date:"17th March 2016",
    nationality:"Italian",
    name:"Cappellini with Cherry Tomatoes and Fresh Basil",
    image:"img/recipe2.png"
};

recipeList.push(recipe2);

var recipe3 = {
    date:"20th April 2016",
    nationality:"Italian",
    name:"Baked Turkey Sausage and Mascarpone Stuffed Shells",
    image:"img/recipe3.png"
};

recipeList.push(recipe3);

var recipe4 = {
    date:"22nd May 2016",
    nationality:"Italian",
    name:"Caramelised Apple and Herb Fiocchi",
    image:"img/recipe4.png"
};

recipeList.push(recipe4);

var recipe5 = {
    date:"24th June 2016",
    nationality:"Spanish",
    name:"Pumpkin Beer Cheese Soup",
    image:"img/recipe5.png"
};

recipeList.push(recipe5);

var recipe6 = {
    date:"29th July 2016",
    nationality:"Thai",
    name:"Yum Woon Sen with Shrimp (Glass noodle salad with Shrimp)",
    image:"img/recipe6.png"
};

recipeList.push(recipe6);

var recipe7 = {
    date:"3rd August 2016",
    nationality:"Thai",
    name:"Beef Satay",
    image:"img/recipe7.png"
};

recipeList.push(recipe7);

var recipe8 = {
    date:"7th September 2016",
    nationality:"French",
    name:"Creamy French Onion Soup Dip in a Bread Bowl",
    image:"img/recipe8.png"
};

recipeList.push(recipe8);

var recipe9 = {
    date:"10th October 2016",
    nationality:"Spanish",
    name:"Bocadillo Bites",
    image:"img/recipe9.png"
};

recipeList.push(recipe9);

var recipe10 = {
    date:"13th November 2016",
    nationality:"Spanish",
    name:"Paella",
    image:"img/recipe10.png"
};

recipeList.push(recipe10);

var recipe11 = {
    date:"17th December 2016",
    nationality:"Thai",
    name:"Spicy black Bean Burger",
    image:"img/recipe11.png"
};

recipeList.push(recipe11);

var recipe12 = {
    date:"2nd January 2017",
    nationality:"Italian",
    name:"Fresh Fig and Pistachio Salad",
    image:"img/recipe1.jpg"
};

recipeList.push(recipe12);

//get the item container from HTML
var itemsList = document.getElementById("itemsList");

//Creating divs and popoulating them with each recipe object
for(var i = 0; i < recipeList.length; i++){

	var itemContainer = document.createElement('div');
	itemsList.appendChild(itemContainer);

	//defining style for the divs
	itemContainer.style.textAlign="left";
	itemContainer.style.display="inline-block";
	itemContainer.style.backgroundColor="#FAFAFA";
	itemContainer.style.marginTop="1%";
	itemContainer.style.marginBottom="1%";
	itemContainer.style.marginLeft="1.5";
	itemContainer.style.marginRight="1.5%";
	itemContainer.style.width="280px";


	// Next div layer
	var itemTopContainer = document.createElement('div');
	itemContainer.appendChild(itemTopContainer);

	itemTopContainer.style.fontSize="65%";
	itemTopContainer.style.width="100%";
	itemTopContainer.style.overflow="auto";

		//Next div layer
		var itemNationality = document.createElement('span');
		var itemDate = document.createElement('span');
		itemTopContainer.appendChild(itemNationality);
		itemTopContainer.appendChild(itemDate);

		itemDate.style.marginLeft="5%";
		itemDate.style.marginTop="5%";
		itemDate.style.float="left";
		itemDate.textContent=String(recipeList[i].date);

		itemNationality.style.marginTop="5%";
		itemNationality.style.marginRight="5%";
		itemNationality.style.float="right";
		itemNationality.textContent=String(recipeList[i].nationality);

	//Next div layer
	var itemNameContainer = document.createElement('div');
	itemContainer.appendChild(itemNameContainer);

	itemNameContainer.style.width="100%";
	itemNameContainer.style.height="5vh";
	itemNameContainer.style.marginTop="5%";
	itemNameContainer.style.marginBottom="5%";

		//Next div layer
		var itemName = document.createElement('div');
		itemNameContainer.appendChild(itemName);

		itemName.style.marginLeft="5%";
		itemName.style.fontSize="100%";	
		itemName.textContent=String(recipeList[i].name);

	//Next div layer
	var itemImageContainer = document.createElement('div');
	itemContainer.appendChild(itemImageContainer);

	itemImageContainer.style.width="100%";
	itemImageContainer.style.height="30vh";
	itemImageContainer.style.display="flex";

		//Next div layer
		var itemImage = document.createElement('img');
		itemImageContainer.appendChild(itemImage);

		itemImage.style.objectFit="cover";
		itemImage.style.maxHeight="100%";
		itemImage.style.width="100%";
		itemImage.src=String(recipeList[i].image);
	}
}

// -- Newsletter sign-up/adding a friend -- //
function addFriend(){

	//Get the values from the input elements
	var name = document.getElementById('firstNameValue').value;
	var surname = document.getElementById('secondNameValue').value;
	var email = document.getElementById('emailValue').value;

	if(name==""){
		alert("Please enter a name.");
	}
	else if(surname==""){
		alert("Please enter a surname.");
	}
	else if(email==""){
		alert("Please enter a valid email.");
	}
	else{

	var addFriendSectionContainer = document.getElementById("addFriendSection");

	var newFriendContainer = document.createElement('div');
	addFriendSectionContainer.appendChild(newFriendContainer);

	//define style
	newFriendContainer.style.overflow="auto";
	newFriendContainer.style.marginLeft="5%";
	newFriendContainer.style.marginTop="2%";
	newFriendContainer.style.color="white";

		// creating a first name container
		var firstNameContainer = document.createElement('div');
		newFriendContainer.appendChild(firstNameContainer);

		firstNameContainer.style.float="left";

			var firstNameLabel = document.createElement('div');
			firstNameContainer.appendChild(firstNameLabel);
			firstNameLabel.textContent = "Name";

			var firstNameTextBox = document.createElement('input');
			firstNameContainer.appendChild(firstNameTextBox);
			firstNameTextBox.value = name;
			firstNameTextBox.readOnly = true;
			firstNameTextBox.className="textInput";

		//creating a second name container
		var secondNameContainer = document.createElement('div');
		newFriendContainer.appendChild(secondNameContainer);

		secondNameContainer.style.marginLeft="5%";
		secondNameContainer.style.float="left";

			var secondNameLabel = document.createElement('div');
			secondNameContainer.appendChild(secondNameLabel);
			secondNameLabel.textContent = "Surname";

			var secondNameTextBox = document.createElement('input');
			secondNameContainer.appendChild(secondNameTextBox);
			secondNameTextBox.value = surname;
			secondNameTextBox.readOnly="true";
			secondNameTextBox.className="textInput";

		//creating an email container
		var emailContainer = document.createElement('div');
		newFriendContainer.appendChild(emailContainer);

		emailContainer.style.marginLeft="5%";
		emailContainer.style.float="left";

			var emailLabel = document.createElement('div');
			emailContainer.appendChild(emailLabel);
			emailLabel.textContent = "Email";

			var emailTextBox = document.createElement('input');
			emailContainer.appendChild(emailTextBox);
			emailTextBox.value = email;
			emailTextBox.readOnly = "true";
			emailTextBox.className="textInput";

		//creating a button container
		var buttonContainer = document.createElement('div');
		newFriendContainer.appendChild(buttonContainer);

		buttonContainer.style.marginLeft="5%";
		buttonContainer.style.float="left";
		buttonContainer.style.marginTop="2%";

			var button = document.createElement('button');
			buttonContainer.appendChild(button);
			button.textContent="Remove";
			button.className="headerButton";

			//remove the text fields
			button.onclick=function(){
				newFriendContainer.remove();
				lineDiv.remove();
			};
			
		// dynamically create a horizontal line
		var lineDiv = document.createElement('div');
		addFriendSectionContainer.appendChild(lineDiv);

			var line = document.createElement('hr');
			lineDiv.appendChild(line);

			line.style.opacity="0.3";
			line.style.width="90%";
			line.style.marginLeft="5%";
			line.style.marginRight="5%";
	}
}

// -- Expandable Box (Filtering/Sorting) -- //
function expandBox() {
    var x = document.getElementById("expandableBoxContainer");
    var y = document.getElementById("filterContainer");
    var u = document.getElementById("filterText");
    var n = document.getElementById("filterContainerButton");

    if (x.style.display === "none") {
    	y.style.backgroundColor = "#FF5252";
    	u.style.color = "white";
        x.style.display = "block";
        n.textContent="\u2015";
        n.style.color="white";
    } else {
    	y.style.backgroundColor = "#EEEEEE";
    	u.style.color = "black";
        x.style.display = "none";
        n.textContent="+";
        n.style.color="black";
    }
}
