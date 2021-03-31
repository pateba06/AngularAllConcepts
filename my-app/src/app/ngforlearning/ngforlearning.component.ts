import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforlearning',
  templateUrl: './ngforlearning.component.html',
  styleUrls: ['./ngforlearning.component.css'],
})
export class NgforlearningComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  product = [
    {
      proimg:
        'https://tse4.mm.bing.net/th?id=OIP.64JN2JZgVQGe6UZa-1deQQHaE8&pid=Api&P=0&w=255&h=171',
      name: 'laptop',
      id: 'pro01',
      price: 15000,
    },
    {
      proimg:
        'https://tse4.mm.bing.net/th?id=OIP.64JN2JZgVQGe6UZa-1deQQHaE8&pid=Api&P=0&w=255&h=171',
      name: 'Mobile',
      id: 'pro02',
      price: 12000,
    },
    {
      proimg:
        'https://tse4.mm.bing.net/th?id=OIP.64JN2JZgVQGe6UZa-1deQQHaE8&pid=Api&P=0&w=255&h=171',
      name: 'TV',
      id: 'pro03',
      price: 13000,
    },
    {
      proimg:
        'https://tse4.mm.bing.net/th?id=OIP.64JN2JZgVQGe6UZa-1deQQHaE8&pid=Api&P=0&w=255&h=171',
      name: 'Washing Machine',
      id: 'pro04',
      price: 13000,
    },
  ];
}
