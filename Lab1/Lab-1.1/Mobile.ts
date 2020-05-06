import {Basic} from './BasicPhone';
import {Smart} from './SmartPhone';
export class Mobile{
    MobileId:number;
    MobileName:string;
    MobileCost:number;
    MobileType:string;
   
    printMobileDetail(id,name,cost,type):any{
        this.MobileId=id;
           this.MobileName=name;
           this.MobileCost=cost;
           this.MobileType=type;
        if(type=="BasicPhone")
       {
          
           console.log(this.MobileId+ " "+this.MobileName+" "+this.MobileCost+" "+Basic.printType())
       }
       else
       {
        console.log(this.MobileId+ " "+this.MobileName+" "+this.MobileCost+" "+Smart.printType())
       }
    }
}