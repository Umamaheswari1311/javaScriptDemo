//Empty param without return any values

/* function emptyParam()
{
    console.log("Testing....")
}
emptyParam() */
//Param with returns
function paramPass(role,match)
{
    if (match)
    {
        return role+" cum "+match + " selected"
    }
    console.log("Not Matched")
 return role +" not selected";
}
//console.log(paramPass("Tester","Automation profile" ))

console.log(paramPass("Tester"))


//Flexbile function 
//Sum of an array
var sum=function()
{
    return Array.from(arguments).reduce(function(total,currentValue)
    {
        return total+currentValue;
    })
}
console.log(sum(1,2))
