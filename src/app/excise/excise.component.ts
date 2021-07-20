import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excise',
  templateUrl: './excise.component.html',
  styleUrls: ['./excise.component.css']
})
export class ExciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayHome=true
  displayProfile=false
  displayMessages=false
  displaySettings=false
  

  fnHome(){
    this.displayHome=true
    this.displayProfile=false
    this.displayMessages=false
    this.displaySettings=false
  }
  fnProfile(){
    this.displayHome=false
    this.displayProfile=true
    this.displayMessages=false
    this.displaySettings=false
  }
  fnMessages(){
    this.displayHome=false
    this.displayProfile=false
    this.displayMessages=true
    this.displaySettings=false
  }
  fnSettings(){
    this.displayHome=false
    this.displayProfile=false
    this.displayMessages=false
    this.displaySettings=true
  }
  // ----------------------------------
  color:any
}
