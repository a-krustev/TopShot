import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IContest } from 'src/app/interfaces/contest';
import { ContestService } from '../contest.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contest-detail',
  templateUrl: './contest-detail.component.html',
  styleUrls: ['./contest-detail.component.scss'],
})
export class ContestDetailComponent implements OnInit {
  contests: IContest[] | null = null;
  errorFetcingData = false;
  contest: any;
  photos: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private contestService: ContestService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const contestId = this.route.snapshot.paramMap.get('id');

    if (!contestId) {
      this.router.navigate(['/contest/list']);
      return;
    }

    this.apiService.loadContest(contestId).subscribe({
      next: (value: any) => {
        this.contest = value;
        this.photos = value.photos;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      },
    });
  }

  likePhotoHandler(event: {
    target: any;
    srcElement: any;
    currentTarget: any;
  }): void {
    const target = event.target || event.srcElement || event.currentTarget;
    const contestId = this.route.snapshot.paramMap.get('id') || '';
    const photoId = target.attributes.id.nodeValue;

    this.contestService.likePhoto(contestId, photoId).subscribe({
      next: (value: any) => {
        const message = value.message;

        this.openSnackBar(message, 'OK');
        this.router.navigate(['/contest/detail/' + contestId]);
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ['my-snackbar'],
    });
  }
}
