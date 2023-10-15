//<li class="partner"><img src="images/partners/partner-cabinrental.png" alt="Partner Cabin Rental"></li>

var photo = []; //Declare an empty array to store image element
var fileName = []; // Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image = []; //Declare an empty variable to store the assambled image list code
var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag

//create a loop to create 6 images starting with index of 0
for (var i = 0; i < 6; i++){
    fileName.push("partner" + (i + 1)); //create image file name and store in the array
    photo.push("<img src='images/partners/" + fileName[i] + ".png'>"); //Assemble file name into image element and store in a array
    image = openList + photo[i] + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(Push) the assembled list code into an array
}

//Display all six images
document.getElementById("partners").innerHTML = imageList;