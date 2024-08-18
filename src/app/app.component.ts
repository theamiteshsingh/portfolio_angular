import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFileComponent } from "./header-file/header-file.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { ContactComponent } from "./contact/contact.component";
import { DownloadPdfComponent } from "./download-pdf/download-pdf.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFileComponent, ExperienceComponent, SkillsComponent, HobbiesComponent, ContactComponent, DownloadPdfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_angular';
}
