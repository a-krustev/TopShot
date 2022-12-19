import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IContest } from 'src/app/interfaces/contest';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.scss'],
})

export class ContestListComponent implements OnInit {

  contests: IContest[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadContests().subscribe({
      next: (value: any) => {
        
        this.contests = value;                
        
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      },
    });
  }
}
