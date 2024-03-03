let cityName = "Techville";
let parkCount = 5;


let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 },
            
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
            
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];

// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
// Your code here

parks[1].name = "Riverside Greenspace";

// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
// Your code here
parks[0].trees[0].species = "Sugar Maple";


// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
// Your code here
parks[0].trees[2] = {species: "Birch", age: 50, health: "Good", height: 100 };


// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
// Your code here
let centralParkTrees = parks[0].trees;
console.log(centralParkTrees);
// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
// Your code here
let sumTreeAge = 
parks[0].trees[0].age + parks[0].trees[1].age + parks[0].trees[2].age + parks[1].trees[0].age + parks[1].trees[1].age + parks[2].trees[0].age;
let averageTreeAge = sumTreeAge/6;
console.log('Average Tree Age: ' +averageTreeAge);
// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
// Your code here
let i = 0;
let tallTree1 = parks[0].trees[0].height;


if(parks[0].trees[0].height<parks[0].trees[1].height)
{
tallTree1 = parks[0].trees[1].height;
}


let tallTree2;

while(i< parks[1].trees.length-1)
if(parks[1].trees[i].height< parks[1].trees[i+1].height)
{
    tallTree2 = parks[1].trees[i+1].height;
    i++;
}



let tallTree3 = parks[2].trees[0].height;


i = 0;
let treeHeights = [tallTree1, tallTree2, tallTree3];
let tallestTree = treeHeights[i];
while(i < treeHeights.length-1)
{
    
    if(treeHeights[i] < treeHeights[i+1])
    {
        tallestTree = treeHeights[i+1];
    }
    i++;
}
console.log('Tallest Tree: ' +tallestTree); 
//task 7 Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array
//Your code here
parks[0].facilities = ["swimming pool"];
console.log(parks[0].facilities);
// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
// Your code here
let JSONArray = JSON.stringify(parks);
let JSONObject = JSON.parse(JSONArray);

// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
// Your code here
console.log('name: '+ parks[0].name + ' facilities: ' +parks[0].facilities);
// Task 10: Using console.log, display the species of the third item in the parks array.
// Your code here
console.log(parks[2].trees[0].species);

//Final Product

console.log(JSONObject);