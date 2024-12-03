import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: false,
  
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  images = [
    { url: 'https://img.freepik.com/free-photo/battering-basil_23-2147985273.jpg?uid=R175532202&ga=GA1.1.1551567194.1732466269&semt=ais_hybrid', alt: 'Image 1' },
    { url: 'https://www.hyperbaricmedicalsolutions.com/hs-fs/hubfs/Blog_Art/WHAT-IS-HOLISTIC-MEDICINE-.jpg?width=1350&name=WHAT-IS-HOLISTIC-MEDICINE-.jpg', alt: 'Image 2' },
    { url: 'assets/Nature12.mp4', alt: 'Image 3' }
  ];

  currentIndex = 0;

  // Function to show the next image
  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Loop back to the first image
    }
  }

  // Function to show the previous image
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Loop back to the last image
    }
  }

  // Function to auto slide images every 3 seconds
  autoSlide() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnInit() {
    this.autoSlide();  // Start auto slide on component load
  }


}
