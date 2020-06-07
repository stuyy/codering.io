import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('open', style({
    opacity: '100%'
  })),
  state('closed', style({
    opacity: '0%'
  })),
  transition('closed => open', [
    animate('.8s ease-in-out')
  ]),
]);
