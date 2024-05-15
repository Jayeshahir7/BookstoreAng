import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Schema } from '../schema';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.css'
})
export class GetallComponent {
 
  data:Schema[]=[]; 
    constructor(private __api:ApiService){
    }
    ngOnInit(){
      this.__api.getAll().subscribe((res:any)=>{
        this.data=res;
      });
    }
}
