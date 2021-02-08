import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { ComplaintModel } from "./complaint.model";
import { Router } from '@angular/router';   //Added for accessing Router class
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor( private homeService: HomeService, private router: Router ) { }
  page:String = "complaint";    //Page Title
  complaint= new ComplaintModel(null,null,null,null);
  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page
  displayuser = localStorage.getItem("username"); //For displaying User on top of page

  ngOnInit(): void {
  }
  AddBook(){
    this.homeService.newComplaint(this.complaint);
    console.log("called");
    alert("Successfully Added ");
    this.router.navigate(["/mycomplaints"]);
  }
}
