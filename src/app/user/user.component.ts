import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 @Input() name: string;
 @Input() age: number;
 @Input() status: string;
 @Input() salary: number;
 @Input() image: string;
}
