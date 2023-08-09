import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from '../service/connect.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
display: string="none";
  @ViewChild('studentForm') form!: NgForm;
  marksData:any;
  currentProductId: string="";
  editMode:boolean=false;



  constructor(private connect: ConnectService) { }

  ngOnInit(): void {
      this.getData();
  }
  getData(){
    this.connect.getMarks1Data().subscribe(res=>{
      this.marksData=res;
    })
  }
  onAddStudent(){
    this.display="block";
    this.form.reset();
    this.editMode=false;
    this.getData();
  }

  onCloseHandled(){
    this.display="none"
  }


  deleteMarksData(id: number){
    console.log("M kaam kr rha hu: component"+id)
    this.connect.deleteMarksData(id).subscribe(data=>
      {      
        this.getData();
      })
  }

  
  postData(student:{rollno: number, name:string, physics:number, maths:number, chemistry:number, computer:number}){
    if(!this.editMode)
      this.connect.createStudentData(student);
    else
      this.connect.updateProduct(this.currentProductId,student);
    this.getData();
    this.display="none";
    this.ngOnInit();    
  }
  
  onEditClicked(id:string){
    this.display="block";
    this.currentProductId=id;
    //get the product based on id
    let currentProduct = this.marksData.find((p: { id: string; })=>{return p.id===id});
    console.log(currentProduct);
    
    //populate the form with the product details 
    this.form.setValue({
      rollno:currentProduct.rollno,
      name:currentProduct.name,
      physics:currentProduct.physics,
      maths:currentProduct.maths,
      chemistry:currentProduct.chemistry,
      computer:currentProduct.computer
    });
    this.editMode=true;
        //change the button value to update 
  }

}
