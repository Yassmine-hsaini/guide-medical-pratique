import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LavageMaisComponent } from './components/lavage-mais/lavage-mais.component';
import { PortGantsComponent } from './components/port-gants/port-gants.component';
import { CatheterismeArterielComponent } from './components/catheterisme-arteriel/catheterisme-arteriel.component';
import { CatheterismeIntraosseuxComponent } from './components/catheterisme-intraosseux/catheterisme-intraosseux.component';
import { CatheterismeVeineuxPeripheriqueComponent } from './components/catheterisme-veineux-peripherique/catheterisme-veineux-peripherique.component';
import { CatheterismeVeineuxcentralComponent } from './components/catheterisme-veineuxcentral/catheterisme-veineuxcentral.component';
import { DrainageThoraciqueComponent } from './components/drainage-thoracique/drainage-thoracique.component';
import { IntubationEndoTrachealeComponent } from './components/intubation-endo-tracheale/intubation-endo-tracheale.component';
import { OxygenotherapieComponent } from './components/oxygenotherapie/oxygenotherapie.component';
import { PonctionDasciteComponent } from './components/ponction-dascite/ponction-dascite.component';
import { PonctionLombaireComponent } from './components/ponction-lombaire/ponction-lombaire.component';
import { PonctionPleuraleComponent } from './components/ponction-pleurale/ponction-pleurale.component';
import { PrelevementArterielGasometrieComponent } from './components/prelevement-arteriel-gasometrie/prelevement-arteriel-gasometrie.component';
import { ProtocoleEcritComponent } from './components/protocole-ecrit/protocole-ecrit.component';
import { SondageNasogastriqueComponent } from './components/sondage-nasogastrique/sondage-nasogastrique.component';
import { SondageVesicalComponent } from './components/sondage-vesical/sondage-vesical.component';
import { SuturesCutaneesComponent } from './components/sutures-cutanees/sutures-cutanees.component';
import { VentilationNoninvasiveComponent } from './components/ventilation-noninvasive/ventilation-noninvasive.component';
import { PonctionSuspubienneComponent } from './components/ponction-suspubienne/ponction-suspubienne.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
        {path: 'menu', component: MenuComponent},
        {path: 'navbar', component: NavbarComponent},
        {path: 'lavage-des-mains', component: LavageMaisComponent},
        {path: 'port-des-gants', component: PortGantsComponent},
        {path: 'catheterisme-arteriel', component: CatheterismeArterielComponent},
        {path: 'catheterisme-intra-osseux', component: CatheterismeIntraosseuxComponent},
        {path: 'catheterisme-veineux-peripherique', component: CatheterismeVeineuxPeripheriqueComponent},
        {path: 'catheterisme-veineux-central', component: CatheterismeVeineuxcentralComponent},
        {path: 'drainage-thoracique', component: DrainageThoraciqueComponent},
        {path: 'intubation-endo-tracheale', component: IntubationEndoTrachealeComponent},
        {path: 'oxygenotherapie', component: OxygenotherapieComponent},
        {path: 'ponction-dascite', component: PonctionDasciteComponent},
        {path: 'ponction-lombaire', component: PonctionLombaireComponent},
        {path: 'ponction-pleurale', component: PonctionPleuraleComponent},
        {path: 'ponction-sus-pubienne', component: PonctionSuspubienneComponent},
        {path: 'prelevement-arteriel-gasometrie', component: PrelevementArterielGasometrieComponent},
        {path: 'protocole-ecrit', component: ProtocoleEcritComponent},
        {path: 'sondage-nasogastrique', component: SondageNasogastriqueComponent},
        {path: 'sondage-vesical', component: SondageVesicalComponent},
        {path: 'sutures-cutanees', component: SuturesCutaneesComponent},
        {path: 'ventilation-non-invasive', component: VentilationNoninvasiveComponent},
    
];
