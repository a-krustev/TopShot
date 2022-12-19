import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContestService } from '../contest.service';

@Component({
  selector: 'app-new-contest',
  templateUrl: './new-contest.component.html',
  styleUrls: ['./new-contest.component.scss']
})
export class NewContestComponent {

  constructor(
    private contestService: ContestService,
    private router: Router
  ) { }

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  newContestHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { contestTitle, titleImg, category, prize, startDate, endDate } = form.value;
    
    this.contestService.createContest(contestTitle, titleImg, category, prize, startDate, endDate)
      .subscribe(() => {
        this.router.navigate(['/contest/list'])
      })
  }
}
