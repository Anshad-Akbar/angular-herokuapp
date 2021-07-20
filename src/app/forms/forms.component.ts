import { Component, OnInit } from '@angular/core';
import { Register } from './forms.model';
import {DataServiceService} from '../services/data-service.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private serve:DataServiceService) { }

  ngOnInit(): void {
  }
  res=new Register()
  message:any
  insertFn(){
    // console.log(this.res)
    this.serve.dataInsert(this.res).subscribe(result=>{
      this.message=result
    })
  }

  


}
