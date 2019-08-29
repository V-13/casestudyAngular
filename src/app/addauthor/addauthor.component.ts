import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{ApiService} from '../api.service';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  
  constructor(private apiService:ApiService) { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.apiService.insertauthordata(data.value).subscribe((response)=>{
      console.log(response)
      alert("successfully inserted")
    })
  }

  

  ngOnInit() {
  }

}
