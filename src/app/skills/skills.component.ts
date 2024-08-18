import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'Vue.js', level: 'Basic' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'MySQL', level: 'Basic' }
  ];

  softSkills = [
    { name: 'Communication', level: 'Advanced' },
    { name: 'Teamwork', level: 'Advanced' },
    { name: 'Problem-Solving', level: 'Advanced' },
    { name: 'Time Management', level: 'Intermediate' },
    { name: 'Leadership', level: 'Intermediate' },
    { name: 'Adaptability', level: 'Advanced' },
    { name: 'Creativity', level: 'Intermediate' },
    { name: 'Attention to Detail', level: 'Advanced' },
    { name: 'Public Speaking', level: 'Basic' }
  ];

}
