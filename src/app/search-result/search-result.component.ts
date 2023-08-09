import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

rollNo:any;
marksData:any;
temp:any;
message:string="";

constructor(private connect: ConnectService) { }
onSubmit(){
  console.log(this.rollNo);
  this.getMarksData(this.rollNo);
  this.rollNo="";
}

ngOnInit(): void {
  
};


private getMarksData(rollno1: number){
  this.connect.getMarks1Data().subscribe(res=>{
    this.temp=res;
    var flag=0;
    for(var i=0; i<this.temp.length; i++)
    {
      if(this.temp[i].rollno==rollno1)
      {
        this.marksData=this.temp[i];
        flag=1;
      }
    }
    if(flag==0)
    {
      this.message="Shi se search kr le bhai..."
      this.marksData=null
    }
  })    
}

}
