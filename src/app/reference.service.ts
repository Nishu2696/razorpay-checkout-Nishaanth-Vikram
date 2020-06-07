/*import { Injectable } from '@angular/core';

export interface ICustomWindow extends Window {
  __custom_global_stuff: string;
}

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor() { }

  get nativeWindow(): ICustomWindow {
    return getWindow();
  }


}*/

import { Injectable } from '@angular/core';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor() { }

  get nativeWindow(): any {
      return _window();
  }
}
