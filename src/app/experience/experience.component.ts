import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      jobTitle: 'Software Engineer',
      company: 'ABC Corporation',
      dates: 'January 2020 - August 2022',
      description: 'Developed and maintained multiple web applications using JavaScript, HTML, and CSS. Collaborated with cross-functional teams to deliver high-quality products.'
    },
    {
      jobTitle: 'Junior Developer',
      company: 'XYZ Startups',
      dates: 'June 2018 - December 2019',
      description: 'Assisted in the development of a mobile app using React Native. Worked closely with the design team to implement UI/UX designs.'
    },
    // Add more experiences here
  ];
}
