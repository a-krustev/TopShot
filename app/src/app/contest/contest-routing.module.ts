import { RouterModule, Routes } from "@angular/router";
import { AddPhotoComponent } from "./add-photo/add-photo.component";
import { ContestDetailComponent } from "./contest-detail/contest-detail.component";
import { ContestListComponent } from "./contest-list/contest-list.component";
import { NewContestComponent } from "./new-contest/new-contest.component";

const routes: Routes = [
  {
    path: 'new',
    component: NewContestComponent
  },
  {
    path: 'list',
    component: ContestListComponent
  },
  {
    path: 'detail/:id',
    component: ContestDetailComponent
  },
  {
    path: 'detail/:id/add-photo',
    component: AddPhotoComponent
  },
];

export const ContestRoutingModule = RouterModule.forChild(routes);
