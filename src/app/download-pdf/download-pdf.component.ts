import { Component } from '@angular/core';

@Component({
  selector: 'app-download-pdf',
  standalone: true,
  imports: [],
  templateUrl: './download-pdf.component.html',
  styleUrl: './download-pdf.component.css'
})
export class DownloadPdfComponent {
  pdfUrl: string = 'assets/Amitesh_WebDEV.pdf';
  filename: string = 'Amitesh_WebDEV.pdf';

}
