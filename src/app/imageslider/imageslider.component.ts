import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-imageslider',
  standalone: true,
  imports: [NgStyle, CommonModule, FontAwesomeModule],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.css'
})
export class ImagesliderComponent {
  @Input() slides: any[] = [];
  @Input() indicatorVisible = true;
  @Input() animationSpeed = 500;
  @Input() Autoplay = false;
  currentSlide = 0;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  next() {

    let currentSlide = this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);

    // this.hidden=true;
    // setTimeout (()=>{
    //   this.currentSlide = (this.currentSlide +1)%this.slides.length;
    //   this.hidden=false;
    // },500)

  }
  previous() {

    let currentSlide = this.currentSlide = (this.currentSlide - 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
    // this.hidden=true;
    // setTimeout (()=>{
    //   this.currentSlide = (this.currentSlide -1)%this.slides.length;
    //   this.hidden=false;
    // },500)

  }

  jumpToSlide(index: number) {

    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed)

  }

  constructor(){
    if(this.Autoplay){
      setInterval(()=>{
        this.next();
      },3000)
    }
  }
}
