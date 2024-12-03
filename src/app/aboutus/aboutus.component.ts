import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: false,
  
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  cards = [
    {
      title: 'Home Remedy',
      description: 'Nevertheless, anecdotal evidence indicates that home remedies are used by patients for managing minor health problems and that this can be sufficient for symptom management while the body recovers from minor health problems.',
      image: 'assets/img.jpg'
    },
    {
      title: 'Skin Care',
      description: 'No matter what your skin type is, a daily skin care routine can help you maintain overall skin health and improve specific concerns like acne, scarring, and dark spots.',
      image: 'assets/img3.jpg'
    },
    {
      title: 'Health Tips',
      description: 'Consuming healthy foods, beverages, and snacks, and getting regular physical activity may help you reach and maintain a healthy body weight. Making suitable lifestyle choices may also help men and women prevent some health problems.',
      image: 'assets/img3.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
