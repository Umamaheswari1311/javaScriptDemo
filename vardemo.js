//Es5 Version
/* var y
console.log(y)
var y=20
console.log(y)
 */

/* let x
console.log(x)
 x=10
console.log(x+":"+typeof(x))
x=10.6
console.log(x+":"+typeof(x))
x="Testing"
console.log(x+":"+typeof(x))
x=true
console.log(x+":"+typeof(x))
console.log(!x+":"+typeof(x))
 */
/* const str="test"
console.log(str)
const str="testing"
console.log(str)
str="testing"
console.log(str) */

//Var scope-Global and Functional

/* var title

function myfun()
{
    title ="Tester"
    var learn ="Automation"
    console.log(title +":"+ learn)
} 
console.log(myfun())
console.log(title)
console.log(learn) */

/* function outerFun()
{
    var scope="webpage"
    function inner()
    {
        var name="HAi"
        console.log(scope+":"+"API")
    }
    
    inner()
}
outerFun() */

//Diff var and let

/* function diff()
{
    let title="Differece"
    for(let i=0;i<10;i++)
    {
        console.log(title+i)
    }
    for(let j=0;j<10;j++)
    {
        title="check"
        console.log(title+i+j)
    }
}
diff()
 */

//const
/* const title ="testing"
title = "Automation"
console.log(title) */
const role={
    title:"tester"
}
console.log(role.title="Automation")