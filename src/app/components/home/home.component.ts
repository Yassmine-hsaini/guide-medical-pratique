import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CatheterismeArterielComponent } from '../catheterisme-arteriel/catheterisme-arteriel.component';
import { CatheterismeIntraosseuxComponent } from '../catheterisme-intraosseux/catheterisme-intraosseux.component';
import { CatheterismeVeineuxPeripheriqueComponent } from '../catheterisme-veineux-peripherique/catheterisme-veineux-peripherique.component';
import { CatheterismeVeineuxcentralComponent } from '../catheterisme-veineuxcentral/catheterisme-veineuxcentral.component';
import { DrainageThoraciqueComponent } from '../drainage-thoracique/drainage-thoracique.component';
import { IntubationEndoTrachealeComponent } from '../intubation-endo-tracheale/intubation-endo-tracheale.component';
import { LavageMaisComponent } from '../lavage-mais/lavage-mais.component';
import { OxygenotherapieComponent } from '../oxygenotherapie/oxygenotherapie.component';
import { PonctionDasciteComponent } from '../ponction-dascite/ponction-dascite.component';
import { PonctionLombaireComponent } from '../ponction-lombaire/ponction-lombaire.component';
import { PonctionPleuraleComponent } from '../ponction-pleurale/ponction-pleurale.component';
import { PonctionSuspubienneComponent } from '../ponction-suspubienne/ponction-suspubienne.component';
import { PortGantsComponent } from '../port-gants/port-gants.component';
import { PrelevementArterielGasometrieComponent } from '../prelevement-arteriel-gasometrie/prelevement-arteriel-gasometrie.component';
import { ProtocoleEcritComponent } from '../protocole-ecrit/protocole-ecrit.component';
import { SondageNasogastriqueComponent } from '../sondage-nasogastrique/sondage-nasogastrique.component';
import { SondageVesicalComponent } from '../sondage-vesical/sondage-vesical.component';
import { SuturesCutaneesComponent } from '../sutures-cutanees/sutures-cutanees.component';
import { VentilationNoninvasiveComponent } from '../ventilation-noninvasive/ventilation-noninvasive.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, 
    CatheterismeArterielComponent, 
    CatheterismeIntraosseuxComponent, 
    CatheterismeVeineuxPeripheriqueComponent,
    CatheterismeVeineuxcentralComponent,
    DrainageThoraciqueComponent,
    IntubationEndoTrachealeComponent,
    LavageMaisComponent,
    OxygenotherapieComponent,
    PonctionDasciteComponent,
    PonctionLombaireComponent,
    PonctionPleuraleComponent,
    PonctionSuspubienneComponent,
    PortGantsComponent,
    PrelevementArterielGasometrieComponent,
    ProtocoleEcritComponent,
    SondageNasogastriqueComponent,
    SondageVesicalComponent,
    SuturesCutaneesComponent,
    VentilationNoninvasiveComponent,
    RouterLink, RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = '';

  gestes = [
    {title: "Lavage des mains", img: "../../../assets/lavage_des_mains.png", componentName: "lavage-des-mains"},
    {title: "Port de gants", img: "../../../assets/porte_des_gants.jpg", componentName: "port-des-gants"},
    {title: "Oxygénothérapie ", img: "../../../assets/oxygenation.jpg", componentName: "oxygenotherapie"},
    {title: "Cathétérisme veineux périphérique", img: "../../../assets/catg_veineuse_peri.jpg", componentName: "catheterisme-veineux-peripherique"},
    {title: "Cathétérisme intra-osseux", img: "../../../assets/cathe_intra_osseuse.jpg", componentName: "catheterisme-intra-osseux"},
    {title: "Cathétérisme veineux central", img: "../../../assets/catheti_central.png", componentName: "catheterisme-veineux-central"},
    {title: "Prélèvement Artériel(Gazométrie)", img: "../../../assets/Gazométrie.png", componentName: "prelevement-arteriel-gasometrie"},
    {title: "La ponction sus-pubienne", img: "../../../assets/ponction_sus_pubienne.png", componentName: "ponction-sus-pubienne"},
    {title: "Intubation endo trachéale", img: "../../../assets/intubation.png", componentName: "intubation-endo-tracheale"},
    {title: "Cathétérisme Artériel", img: "../../../assets/catheti_arterial.jpg", componentName: "catheterisme-arteriel"},
    {title: "Ponction lombaire", img: "../../../assets/pnction_lombaire.png", componentName: "ponction-lombaire"},
    {title: "Ponction pleurale  ", img: "../../../assets/ponction_pleural.png", componentName: "ponction-pleurale"},
    {title: "Drainage thoracique ", img: "../../../assets/drainage_thoraciq11.jpg", componentName: "drainage-thoracique"},
    {title: "Sondage vésical ", img: "../../../assets/sonde_urinaire.jpg", componentName: "sondage-vesical"},
    {title: "Ponction d’ascite", img: "../../../assets/ponction_d_ascite.jpg", componentName: "ponction-dascite"},
    {title: "Sondage nasogastrique   ", img: "../../../assets/sonde_naso_gastriq.jpg", componentName: "sondage-nasogastrique"},
    {title: "Sutures cutanées  ", img: "../../../assets/suture.png", componentName: "sutures-cutanees"},
    {title: "Ventilation non invasive", img: "../../../assets/Ventilation.jpg", componentName: "ventilation-non-invasive"}
    // {title: "Le protocole écrit ", img: "../../../assets/protocol.jpg", componentName: "protocole-ecrit"}
  ]

  get filteredGestes() {
    return this.gestes.filter(geste => 
      geste.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
