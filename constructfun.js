//Constructor Function

function company(firstName,surName,role,task)
{
    this.firstName=firstName
    this.surName=surName
    this.role=role
    this.task
    this.name=this.surName+"."+this.firstName
    this.work=function() {
        return this.name + " is "+ this.role +" and doing "+ task
    }
}
var cons1=new company('san','M','Tester','Regression Execution')
 console.log(cons1.work())
 var cons2=new company('kumar','M','SDET','Automation')
 console.log(cons2.work())