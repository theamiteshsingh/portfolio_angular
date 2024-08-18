import { Component } from '@angular/core';

@Component({
  selector: 'app-header-file',
  standalone: true,
  imports: [],
  templateUrl: './header-file.component.html',
  styleUrl: './header-file.component.css'
})
export class HeaderFileComponent {
  name = 'Amitesh Singh';
  jobTitle = 'Angular Devloper';
  email = 'amiteshsinghkorba@gmail.com';
  phone = '(+91)8529606022';
}
