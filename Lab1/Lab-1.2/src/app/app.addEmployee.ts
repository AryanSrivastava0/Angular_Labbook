import{Component}from '@angular/core';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'//`Employee Id is {{empId}} <br/>
  //  Employee Name is {{empName}}<br/>
    //Employee Salary is {{empSalary}}<br/>''
})     
export class AddEmployeeComponent{
empId:number;
empName:string;
empSalary:number;
empDept:number;
empAll:any=[];
  
//array

addEmployee():any{
  this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDept:this.empDept})
    alert(this.empId+" "+this.empName+" "+this.empSalary+" "+this.empDept);
  
}
}