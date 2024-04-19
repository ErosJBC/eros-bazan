import { Component } from '@angular/core';
import { NAVBAR_ITEMS } from '../../../constants/index';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    navBarItems: Array<any> = [];

    constructor() { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.setNavBarItems();
    }

    setNavBarItems = () => {
        this.navBarItems = NAVBAR_ITEMS;
    }

}
