import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  // https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
  viewport() {
    let e = window;
    let a = 'inner';
    if (!('innerWidth' in window)) {
      a = 'client';
      // @ts-ignore
      e = document.documentElement || document.body;
    }

    // console.log('viewport width ' + e[a + 'Width']);
    // console.log('viewport height ' + e[a + 'Height']);

    return { 'width': e[a + 'Width'], 'height': e[a + 'Height'] };
  }

}
