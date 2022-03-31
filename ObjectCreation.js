
//Constructor way
var tester1=new Object()
tester1.name="uma"
tester1.role="SDET"
tester1.work=function()
{
    console.log(tester1.name +" " +tester1.role+ " Frameworksetup")
}
tester1.work()

//Literal way
var tester2={
    name :'kumar',
    role :'Tester',
    age:'24',
    work : function()
    {
        console.log(tester2.name +" " +tester2.role+ " Functional testing")
    }

}
tester2.work()
//Object1 reference = object2 reference
tester2=tester1

console.log(tester2.name) 
