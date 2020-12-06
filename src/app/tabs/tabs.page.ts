import { Component } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  yaentro:string;
  constructor(private router:Router) {
    this.yaentro=window.localStorage.getItem('sesion');
    if(this.yaentro==null || this.yaentro=="")
    this.router.navigate(['login']);
    else
    this.router.navigate(['']);
  }

}
