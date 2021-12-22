//if else
/* const flag=true
if(!flag)
{
    console.log("satisfied")
}
else
{
    console.log(flag)
    console.log("Not satisfied") 
} */

/* var num1=100,num2=200,num3=150;

if(num1> num2 && num1 > num3)
{
    console.log("num1: ",num1)
}
else if (num2 > num3)
{
    console.log("num2: ",num2)
}
else
{
    console.log("num3: ",num3)
} */
//------------------------------
/* let i=0
while(i<10)
{
    i++
    console.log(i+"Hai")
} */
//-------------------------------
/* do{
    console.log(i+"Welcome")
    i++
}while(i<10); */
//---------------------
/* for(i=0;i<10;i++)
{
    console.log(i+"Bye")
} */

/* var month=4;
for(var days=1;days<=31;days++)
{
    if((month==4|| month==6||month==9||month==11) && days==31) continue
    {
        console.log("Day:",days);

    }
    if(month==2 && days == 28)
    {
        console.log("Day:", days);
        break;
    }
} */

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