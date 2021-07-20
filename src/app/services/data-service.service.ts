import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private client:HttpClient) {
   
   }
  dataInsert(data:any){
    console.log(data)
    return this.client.post('https://cybersquare.herokuapp.com/user/',data)

  }
  getData(){
    return this.client.get('https://cybersquare.herokuapp.com/user/')
  }
  // delete a user
  
  deleteData(id:any){
    return this.client.delete('https://cybersquare.herokuapp.com/user/'+id)

  }
  // updateData(j:any){
  //   return this.client.put('https://cybersquare.herokuapp.com/user/',j)
  // }

  

  
}
