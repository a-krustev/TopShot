import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IContest } from 'src/app/interfaces/contest';
import { ContestService } from '../contest.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent {

  contests: IContest[] | null = null;
  errorFetcingData = false;
  contest: any;

  constructor(
    private contestService: ContestService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
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
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      },
    });
  }

  addPhotoHandler(form: NgForm): void {
    const contestId = this.route.snapshot.paramMap.get('id') || '';
    
    if (form.invalid) { return; }
    const contestImg = form.value.contestImg;
    
    
    this.contestService.addPhoto(contestId, contestImg)
      .subscribe(() => {
        this.router.navigate(['/contest/detail/' + contestId])
      })
  }
}
