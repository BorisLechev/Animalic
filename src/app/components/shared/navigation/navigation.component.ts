import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor() { }

  openSidebar() {
    document.getElementById('menu-drop').style.transform = 'translateX(0%)';
  }

  closeSidebar() {
    if (window.innerWidth <= 1023) {
      document.getElementById('menu-drop').style.transform = 'translateX(-100%)';
    }
  }
}