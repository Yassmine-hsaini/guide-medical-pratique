import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page0',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './page0.component.html',
  styleUrl: './page0.component.css'
})
export class Page0Component {

}
