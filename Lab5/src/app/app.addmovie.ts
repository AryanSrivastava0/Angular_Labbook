import { Component } from '@angular/core';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
    selector:'add-emp',


    templateUrl:'app.add.html'
})
export class AddMovieComponent{
  mName:any;
  mRate:any;
  mSelect:any;
  
  result:any[]=[];
  flag:number=0;
  
    movieall:any[]=[{mName:"Dangal",mRate:4,mSelect:"Drama"},
    {mName:"Harry Poter",mRate:6,mSelect:"Friction"},
    {mName:"Agneepath",mRate:"5",mSelect:"Action"} ];
    
     
    
    
    
    
    
    addEmployee():any{
         this.movieall.push({mName:this.mName,mRate:this.mRate,mSelect:this.mSelect}) ;
         }
    status:any=false;
searchEmp(){
    this.result.splice(0,1);
    this.flag=0;
    
    for(let data of this.movieall){
        if(data.mSelect==this.mSelect){
          this.result.push(data);
         this.status=true;
         this.flag=1;
         
        }
       }
  if(this.flag==0)
  {
      alert("NO RECORD FOUND");
  }     
  
}
     
    }
    


