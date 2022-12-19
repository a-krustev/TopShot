import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContestComponent } from './new-contest/new-contest.component';
import { ContestRoutingModule } from './contest-routing.module';
import { FormsModule } from '@angular/forms';
import { ContestListComponent } from './contest-list/contest-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NewContestComponent,
    ContestListComponent,
    ContestDetailComponent,
    AddPhotoComponent
  ],
  imports: [
    CommonModule,
    ContestRoutingModule,
    FormsModule,
    SharedModule,
    MatSnackBarModule
  ]
})
export class ContestModule { }
