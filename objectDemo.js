/* var tester =new Object();

console.log(tester instanceof Object)
//Easy to add properties and values to Object value
tester.name="uma"
tester.role="SDET"

//Add methods to object values
tester.work=function()
{
    console.log(tester.name + " role is "+tester.role+"and her work is creating automation from the scratch")
}
tester.work() */
//
/* var num1=10
var num2=num1
console.group(num2)
var num2=20
console.log(num1)
console.group(num2) */

var tester1=new Object()
tester1.name="uma"
tester1.role="SDET"
tester1.work=function()
{
    console.log(tester1.name +" " +tester1.role+ " Frameworksetup")
}
//tester1.work()
var tester2={
    name :'San',
    role :'Tester',
    age:'24',
    work : function()
    {
        console.log(tester2.name +" " +tester2.role+ " Functional testing")
    }

}
//tester2.work()
//Object1 reference = object2 reference
/* tester2=tester1
tester2.work() */

//Retrieve property value from object
//console.log(tester1.name)

//Update property value of object
/* tester1.role='Principal SDET'
console.log(tester1.name,tester1.role) */

//Add new Property
/*  tester1['sur firstName']='K'
console.log(tester1['sur firstName'])  */

//Get properties value and store in some other variable
/* var prop='name'
console.log(tester1[prop]) */

//Retrieve all property value from Object
/* for(prop in tester1)
{
    console.log(tester1[prop])
} */

//Delete property from Object

/* delete tester1['sur firstName']
console.log(tester1) */



//Writable 
/* Object.defineProperty(test,'name',
    {Configurable: true,
    Writable:false,
    enumerable:true,value:'San'});

    test.name='xyz'
    console.log(test); */

//Not displayed
    /* Object.defineProperty(test,'age',
    {Configurable: true,
    Writable:false,
    enumerable:false});
    console.log(test) */

    //Restrict for Deletion
 /*    Object.defineProperty(test,'Admission',
    {Configurable: false});
delete test.Admission
console.log(test) */

//Access Prpoperty
/* var test={
    name :'San',
    age:'3',
    admission:'No',
    address : function()
    {
        console.log(test.name +" " + "XYZ")
    }}

Object.defineProperty(test,'_adm',{
    get:function()
    {
        this.admission
    },
    set:function(newAdm)
    {
    if(this.age >= 3  )
    {
        this.admission=newAdm
    }
    }
})
test._adm='Yes'
console.log(test.admission) */

//define prperties

/* var school = {};

Object.defineProperties(school,{
name:{
        value:'san'        
         },
age: {
        value:3,
        writable:true
         },
surName:{
        value:'M',
        writable:true
         },  
admission:{
            value:'No',
            writable:true         
             },
_admission: {
         get:function()
         {
             this.admission
         },
         set:function(newAdm)
         {
         if(this.age >= 3  )
         {
             this.admission=newAdm
         }
         }
        }
});
school._admission='Yes'
console.log(school.surName,school.name,school.age,school.admission)
 */

//Constructor Function

function School(name,surName,age)
{
    this.name=name
    this.surName=surName
    this.age=age
}
var cons1=new School('san','M',4)
console.log(cons1)