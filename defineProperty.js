
//Access Prpoperty
var test={
    name :'San',
    age:'3',
    admission:'No',
    address : function()
    {
        console.log(test.name +" " + "XYZ")
    }}
    
   console.log(test);
    
//Writable 
/* Object.defineProperty(test,'name',
    {
 
    Writable:true,
    enumerable:true,value:'San'});

    test.name='xyz'
    console.log(test); */
//Not Writable
Object.defineProperty( test, 'name', {
    value: "uma",
    writable: false,
 });
 test.name="Not Able to change"
 console.log(test)

//Not displayed
 /*    Object.defineProperty(test,'age',
    {Configurable: true,
    Writable:false,
    enumerable:true});
    console.log(test)  */

//Restrict for Deletion
/* Object.defineProperty(test,'admission',
{Configurable: false});
delete test.admission
console.log(test) */

