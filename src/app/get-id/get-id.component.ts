import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Schema } from '../schema';

@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrl: './get-id.component.css'
})
export class GetIdComponent {
    id=0;
    data:Schema=new Schema();
    constructor(private __actRoute:ActivatedRoute,private __api:ApiService, private __router:Router){}

    ngOnInit(){
      this.id=this.__actRoute.snapshot.params['id'];
      this.__api.getbyid(this.id).subscribe((res:any)=>{
        this.data=res;
      });
    }
    delete(){
      this.__api.delete(this.id).subscribe((res)=>{this.__router.navigate(['/']);}
        
      );
     
    }
}
