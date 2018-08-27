 
var arr = {"Java": 10, "Ruby": 80, "Python": 65};
arr = Object.keys(arr).filter(function(key) {
    return arr[key] >= 60;
 });




 //dict -> a js object
var dict = {"Java": 10, "Ruby": 80, "Python": 65};
var keys = Object.keys(dict);
var i, len = keys.length; 
keys.sort(); 

var sortedDict = [];

for (i = 0; i < len; i++)
{
    k = keys[i];
    sortedDict.push({'key': k, 'value':dict[k]});
}


//sortedDict = Object.keys(sortedDict).filter(function(key) {
   // return sortedDict[key] >= 60;
 //});

console.log(sortedDict[0]);


//dict -> a js object
var dict = {"x" : 1,
        "y" : 6,
        "z" : 9,
        "a" : 5,
        "b" : 7,
        "c" : 11,
        "d" : 17,
        "t" : 3};

//Use the 'keys' function from the Object class to get the keys of your dictionary
//'keys' will be an array containing ["x", "y", "z"...]
var keys = Object.keys(dict);

//Get the number of keys - easy using the array 'length' property
var i, len = keys.length; 

//Sort the keys. We can use the sort() method because 'keys' is an array
keys.sort(); 

//This array will hold your key/value pairs in an ordered way
//it will be an array of objects
var sortedDict = [];

//Now let's go throught your keys in the sorted order
for (i = 0; i < len; i++)
{
    //get the current key
    k = keys[i];

    //show you the key and the value (retrieved by accessing dict with current key)
    alert(k + ':' + dict[k]);

    //Using the array 'push' method, we add an object at the end of the result array
    //It will hold the key/value pair
    sortedDict.push({'key': k, 'value':dict[k]});
}

//Result
console.log(sortedDict);