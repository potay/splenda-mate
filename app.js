/*Declare script flow here:*/

var data = createDummyData();
data = flattenObject(data);
getObjectKeysNames(data);

/*
This segment contains placeholder variable values. 
Will be removed once node-server is up and runing
*/
function createDummyData(){
  var houseMateBills = [{
    "Lyndon" : {
      "rent": 850,
      "utilies": 50,
      "internet" : 50
    },
    "Paultato":{
      "rent": 500,
      "utilities": 50,
      "internet": 50
    }
  }];
  return houseMateBills;
}

function flattenObject(data){
  return data[0];
}
//Debug Here:
console.log(data);

//Get Data Keys:
function getObjectKeysNames(data){
  var houseMateNames = Object.keys(data);
  console.log(data);
  console.log(houseMateNames);
  for (var i in houseMateNames){
    console.log(billKeys);
  }

}
//Insert array values into index.html here:

