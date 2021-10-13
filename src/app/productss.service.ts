import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductssService {

  //mock api
  async Products() {
    return {
      name: 'Aegis of Champions',
      id: 1,
      price: 1999999,
      description: 'Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta enim at lobortis aliquam. Maecenas sed auctor libero.',
      reviews: [
        {
        comment: 'Let Leni lead!',
        stars: 5
        },
        {
        comment: 'Meh.',
        stars: 3
        },
        {
        comment: 'Pwede na.',
        stars: 4
        },
        {
        comment: 'Gwapo nung rider.',
        stars: 5
        },
        {
        comment: 'Fake.',
        stars: 1
        },
        {
        comment: 'Sana all.',
        stars: 5
        },
        {
        comment: '...',
        stars: 2
        },
        {
        comment: 'Try ko later.',
        stars: 3
        },
        {
        comment: 'Pangit packaging.',
        stars: 4
        },
        {
        comment: 'Edi wow.',
        stars: 5
        },
    ]
    }
  }
  
}
