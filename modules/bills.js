/*
Housemate objects to be pulled from db and should
contain:
1. Rent
2. Power Bills
3. Internet
4. Miscellaneous Bills
   - Should have its own breakdown.
*/

//Declare function flow here:


//Dummy objects to test Jade template:
var housemates = [{
	paul:{
		rent: 850;
		power: 50;
		internet: 50; //This should be the total internet bill / total num of housemates;
		miscellaneous: 25; //Should be declared on monthly basis & have seperate breakdown;
	}
	lyndon:{
		rent: 1000;
		power: 85;
		internet: 52;
		miscellaneous: 39; 
	}
	spuddingbro:{
		rent: 1098;
		power: 10;
		internet: 20;
		miscellaneous: 10;
	}
}];
