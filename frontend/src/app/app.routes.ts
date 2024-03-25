import { Routes } from '@angular/router';
import { CorsoListComponent } from './corso-list/corso-list.component';
import { CorsoDetailComponent } from './corso-detail/corso-detail.component';
import { MateriaDetailComponent } from './materia-detail/materia-detail.component';
import { LogicComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecensioneCorsoComponent } from './recensione-corso/recensione-corso.component';
import { RecensioneMateriaComponent } from './recensione-materia/recensione-materia.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AggiungiCorsoComponent } from './admin/aggiungi-corso/aggiungi-corso.component';
import { EliminaCorsoComponent } from './admin/elimina-corso/elimina-corso.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { EliminaMateriaComponent } from './admin/elimina-materia/elimina-materia.component';
import { AggiungiMateriaComponent } from './admin/aggiungi-materia/aggiungi-materia.component';


export const routes: Routes = [
    { path: "corsi", component: CorsoListComponent},
    { path: 'corso-detail/:id', component: CorsoDetailComponent },
    { path: 'materia-detail/:id', component: MateriaDetailComponent },
    { path: 'login', component: LogicComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recensione-corso', component: RecensioneCorsoComponent},
    { path: 'recensione-materia', component: RecensioneMateriaComponent},
    { path: '', component: HomepageComponent},
    { path: "corsi/nuovo", component: AggiungiCorsoComponent},
    { path: "corsi/elimina", component: EliminaCorsoComponent},
    { path: "materie/nuovo", component: AggiungiMateriaComponent},
    { path: "materie/elimina", component: EliminaMateriaComponent},
    { path: "profilo", component: ProfiloComponent},
];
