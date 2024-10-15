import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RemerciementComponent } from '../remerciement/remerciement.component';
import { MentionLegaleComponent } from '../mention-legale/mention-legale.component';
import { AProposComponent } from '../a-propos/a-propos.component';
import { SimulationComponent } from '../simulation/simulation.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuComponent, RemerciementComponent, MentionLegaleComponent, AProposComponent, SimulationComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
