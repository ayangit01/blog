import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core'
import {User} from 'src/models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<User> = [
    { name: "Subha", age: 20, staTus: "single", salary: 15000, Image: "assets/photo1.jpeg"},
    { name: "Ahana", age: 20, staTus: "mingle", salary: 35000, Image: "assets/photo2.jpg"},
    { name: "Ayush", age: 21, staTus: "single", salary: 25000, Image: "assets/photo3.png"}
  ]
}  