import { Component, OnInit,OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ComplaintSettings} from '../complaintsetting';
import {HomeService } from '../home.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrls: ['./mycomplaint.component.css']
})
export class MycomplaintComponent implements OnInit {

  complaintsetting:ComplaintSettings={
    complaints:null,
    name:null,
    age:null,
    gender:null,
    address:null,
    place:null,
    pin:null,
    phone:null,
    email:null,
    accusedname:null,
    accusedage:null,
    accusedgender:null,
    accusedaddress:null,
    accusedplace:null,
    accusedpin:null,
    complanitdetails:null
  }

  constructor(private homeservice:HomeService,private route:ActivatedRoute, private router: Router) { }

  complaints:ComplaintSettings[]=[]
  complaintSubscription:Subscription;
  id:number;
  editMode: boolean=false

  ngOnInit(): void {
    console.log("Inside SignUp")
    this.route.params.subscribe(param =>{
      this.id=param['id']
      this.editMode =param['id'] != null 
    })
    // this.complaintSubscription =this.homeservice.complaintsUpdate.Subscribe((data)=>{
    //   this.complaints=data
    // })
    // this.complaints=this.homeservice.getComplaints()
  }

}
