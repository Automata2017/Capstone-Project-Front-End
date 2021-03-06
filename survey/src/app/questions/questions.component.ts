import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
//this is what connects the back end and allows for submission of tickets
  onSubmit(data: any){
    console.log(data)
    this.http.post('http://localhost:9092/api/tickets/', data).subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data);
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
