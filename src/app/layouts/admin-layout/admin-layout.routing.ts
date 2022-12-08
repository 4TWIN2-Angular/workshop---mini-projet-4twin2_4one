import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { ListEquipeComponent } from "src/app/pages/list-equipe/list-equipe.component";
import { UpdateDetailEquipeComponent } from "src/app/pages/update-detail-equipe/update-detail-equipe.component";
export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "contrats", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  {path:"ListEquipe", component:ListEquipeComponent},
  { path: "updateDetailE/:idDetailEquipe", component: UpdateDetailEquipeComponent },
];
