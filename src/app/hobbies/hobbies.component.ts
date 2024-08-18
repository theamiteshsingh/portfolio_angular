import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  hobbies = [
    {
      name: 'Reading',
      description: 'I enjoy reading books on history, science, and philosophy.'
    },
    {
      name: 'Hiking',
      description: 'I love going on hikes and exploring new trails.'
    },
    {
      name: 'Photography',
      description: 'I enjoy taking photos of nature and cityscapes.'
    },
    {
      name: 'Cooking',
      description: 'I like trying out new recipes and experimenting with different cuisines.'
    },
    {
      name: 'Traveling',
      description: 'I love exploring new places and experiencing different cultures.'
    },
    {
      name: 'Playing Guitar',
      description: 'I enjoy playing the guitar and learning new songs.'
    },
    {
      name: 'Learning new languages',
      description: 'I like learning new languages and improving my language skills.'
    },
    {
      name: 'Watching movies',
      description: 'I enjoy watching movies and TV shows in my free time.'
    },
    {
      name: 'Playing sports',
      description: 'I like playing sports like basketball and tennis.'
    }
  ];
}
