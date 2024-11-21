import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagesliderComponent } from './imageslider/imageslider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImagesliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photoframe';

  slides: any[] = [
    {
      url: "/assets/images/image1.jpg"
    },
    {
      url: "/assets/images/image2.jpg"
    },
    {
      url: "/assets/images/image3.jpg"
    },
    {
      url: "/assets/images/image4.jpg"
    },
    {
      url: "/assets/images/image4.jpg"
    },
    {
      url: "/assets/images/image5.jpg"
    },
    {
      url: "/assets/images/image6.jpg"
    },
    // {
    //   url: "/assets/images/image7.jpg"
    // },
    // {
    //   url: "/assets/images/image8.jpeg"
    // },

  ];
}
