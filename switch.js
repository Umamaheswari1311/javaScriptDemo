//Switch case
var env= "dev"
switch (env)
{
case "dev":
console.log("DEv Environment") 
break;
case "test":
console.log("Test Environment") 
break;
case "stage":
console.log("Stage Environment")
break;
case "prod":
console.log("Prod Environment")
break;
default:
console.log("Dummy Environment")
}