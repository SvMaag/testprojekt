
let myObject = {
    'name':'flo',
    'age': 45,
    'Job': 'Dev-Mentor',
    'good_guy':true,
};


let objKeys = Object.keys(myObject)
let ourArray = []


for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject[objKeys[i]])
    
}

console.table(ourArray);