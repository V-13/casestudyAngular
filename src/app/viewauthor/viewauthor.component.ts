import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-viewauthor',
  templateUrl: './viewauthor.component.html',
  styleUrls: ['./viewauthor.component.css']
})
export class ViewauthorComponent implements OnInit {

  private mydata:Array<object>=[];
  

  constructor(private apiservice:ApiService) { }

  ngOnInit() { 
    this.apiservice.viewauthor().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
  });

}
}