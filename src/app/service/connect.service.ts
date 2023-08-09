import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private _http:HttpClient) { }
  getLoginData() {
    return this._http.get(
      'https://637f37105b1cc8d6f93dbaf1.mockapi.io/login'
    );
  }
  getMarks1Data() {
    return this._http.get(
      'https://637f37105b1cc8d6f93dbaf1.mockapi.io/marks'
    );
  }

  deleteMarksData(id: number) {
    console.log("M kaam kr rha hu: service"+id);
    return this._http.delete(
      'https://637f37105b1cc8d6f93dbaf1.mockapi.io/marks/'+id
    );
  }

  createStudentData(student:{rollno:number , name:string , physics:number, maths:number, chemistry:number, computer:number}){
  this._http.post<any>('https://637f37105b1cc8d6f93dbaf1.mockapi.io/marks', student)
  .subscribe((res)=>{
    console.log(res);
  });
  }
  updateProduct(id:string, student:{rollno:number , name:string , physics:number, maths:number, chemistry:number, computer:number}){
    this._http.put('https://637f37105b1cc8d6f93dbaf1.mockapi.io/marks/'+id, student)
    .subscribe();
}
}
