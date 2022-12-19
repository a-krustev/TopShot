import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IContest } from 'src/app/interfaces/contest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contests: IContest[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadContests(3).subscribe({      
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