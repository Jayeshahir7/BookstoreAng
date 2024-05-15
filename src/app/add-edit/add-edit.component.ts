import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent {
  id=-1;
  constructor(private __api:ApiService,private __router:Router,private __actRout:ActivatedRoute){

  }
  myForm=new FormGroup({
    BookID: new FormControl(''),
    Bookimg: new FormControl(''),
    Title: new FormControl(''),
    Author: new FormControl(''),
    Genre: new FormControl(''),
    Price: new FormControl(''),
  })

  ngOnInit(){
    if(this.__actRout.snapshot.params['id']!=null){
      this.id=this.__actRout.snapshot.params['id'];
      this.__api.getbyid(this.id).subscribe((res:any)=>{
        this.myForm.controls.BookID.setValue(res.BookID);
      this.myForm.controls.Bookimg.setValue(res.Bookimg);
      this.myForm.controls.Title.setValue(res.Title );
      this.myForm.controls.Author.setValue(res.Author);
      this.myForm.controls.Genre.setValue(res.Genre);
      this.myForm.controls.Price.setValue(res.Price);
      })
    }
  }
  

  insert(){
    if(this.id>0){
      this.__api.update(this.id,this.myForm.value).subscribe((res)=>{
        this.__router.navigate(['/']);
      });
    }
    else{
      this.__api.insert(this.myForm.value).subscribe((res)=>{
        this.__router.navigate(['/']);
      });
    }
  }
}
