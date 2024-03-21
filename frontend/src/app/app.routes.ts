import { Routes } from '@angular/router';
import { CorsoListComponent } from './corso-list/corso-list.component';
import { CorsoDetailComponent } from './corso-detail/corso-detail.component';
import { MateriaDetailComponent } from './materia-detail/materia-detail.component';
import { LogicComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecensioneCorsoComponent } from './recensione-corso/recensione-corso.component';
import { RecensioneMateriaComponent } from './recensione-materia/recensione-materia.component';
import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
    { path: "corsi", component: CorsoListComponent},
    { path: 'corso-detail/:id', component: CorsoDetailComponent },
    { path: 'materia-detail/:id', component: MateriaDetailComponent },
    { path: 'login', component: LogicComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recensione-corso', component: RecensioneCorsoComponent},
    { path: 'recensione-materia', component: RecensioneMateriaComponent},
    { path: '', component: HomepageComponent}
];
