import { Injectable } from '@angular/core';
import {ComplaintSettings} from './complaintsetting';
import { HttpClient } from '@angular/common/http';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  complaints:ComplaintSettings[]=[];
  complaintUpdated =new Subject<ComplaintSettings[]>()
  constructor(private httpclipt:HttpClient) {}
  
    getComplaints(){
      return this.httpclipt.get("http://localhost:5000/complaints")
    }
    
    newComplaint(item){
      return this.httpclipt.post("http://localhost:5000/complaint",{"complaint":item})
      .subscribe(data=>{console.log(data)}) 
    }
    
    getComplaint(id:any){
      return this.httpclipt.get("http://localhost:5000/"+id);
    }
   
    editComplaint(item){
      console.log('client update')
      return this.httpclipt.put("http://localhost:5000/editcomplaint",{"complaint":item})
      .subscribe(data=>{console.log(data)}) 
    }
    

    deleteComplaint(id:any){
      return this.httpclipt.delete("http://localhost:5000/delcomplaint"+id)
    }
    
    newUser(item){
      return this.httpclipt.post("http://localhost:5000/adduser",{"user":item})
      .subscribe(data=>{console.log(data)}) 
    }
    
  }