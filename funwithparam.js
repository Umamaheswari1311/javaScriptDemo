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

//Reverse Number
 function reverse(num){
    num= num+"";//convert number to string
    return num.split("").reverse().join("")
}
console.log(reverse(54321)) 
