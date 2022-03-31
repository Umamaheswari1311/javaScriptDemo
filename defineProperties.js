var school = {};

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
         if(this.age > 3  )
         {
             this.admission=newAdm
         }
         }
        }
});

school._admission='Yes'
console.log(school.surName,school.name,school.age,school.admission)  

