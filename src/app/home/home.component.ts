import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  WORD_SLIDER_TIMEOUT = 2e3;
  triggerHeroWordSlide = () => {
    setInterval(() => {
      let current = document.querySelector('span[data-show]'),
        other =
          current?.nextElementSibling ||
          document.querySelector('span:first-child'),
        next = document.querySelector('span[data-up]');

      next && next.removeAttribute('data-up');
      if (current) {
        current.removeAttribute('data-show');
        current.setAttribute('data-up', '');
      }

      if (other) {
        other.setAttribute('data-show', '');
      }
    }, this.WORD_SLIDER_TIMEOUT);
  };

  constructor() {}

  ngOnInit(): void {}
}
