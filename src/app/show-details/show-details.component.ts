import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../services/data-service.service'

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private pass:DataServiceService) { }

  ngOnInit(): void {
    this.showData() 
  }
  data:any
  showData(){
    this.pass.getData().subscribe(res=>{
      this.data=res
      console.log(this.data)

    })
  }
  // delete a user
  delete(id:any){
    // console.log(id);
    this.pass.deleteData(id).subscribe(del=>{
      this.showData();

    })

  }
  j:any
  updateFn(asg:any,index:any){
    console.log("asg",asg);
    // // this.pass.updateData(j).subscribe(up=>{
    // //   this.showData();

    // })

  }

}
