import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city=[
    {id:1, name: 'Delhi'},
    {id:2, name: 'Punjab'},
    {id:3, name: 'Up'}
  ]
  log(v1:any) {
    console.log(v1.value)
  }
  onSubmit(frm:any) {
    console.log(frm)
  }
}
