var tester =new Object()

console.log(tester instanceof Object)

//Add Propeties
//Easy to add properties and values to Object value
tester.name="kamal"
tester.role="Tester"

//Add methods to object values
tester.work=function()
{
    
    return tester.name + " role is "+tester.role+" and Execute Regression Testsuite";
}
//Retrieve
/* console.log("Retrieve property value from object:",tester.name)
console.log("Retrieve methods:",tester.work())
//Retrieve all property value from Object
for(prop in tester)
{
    console.log(tester[prop])
} */

//Update
tester.role='SDET'
/* console.log("Update property value of object:",tester.name,tester.role) */

//Add Property
tester['sur firstName']='K'
/* for(prop in tester)
{
    console.log(tester[prop])
} */

//Delete
/*  delete tester['sur firstName']
for(prop in tester)
{
    console.log(tester[prop])
}  */