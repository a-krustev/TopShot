import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IContest } from '../interfaces/contest';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  contests: IContest[] | null = null;
  errorFetcingData = false;
  natureContests: any;
  arhitectureContests: any;
  sportContests: any;
  portraitContests: any;
  macroContests: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadContests().subscribe({
      next: (value: any) => {
        this.natureContests = value.filter((el: { category: string; }) => el.category=='nature').length;
        this.arhitectureContests = value.filter((el: { category: string; }) => el.category=='architecture').length;
        this.portraitContests = value.filter((el: { category: string; }) => el.category=='portrait').length;
        this.sportContests = value.filter((el: { category: string; }) => el.category=='sport').length;
        this.macroContests = value.filter((el: { category: string; }) => el.category=='macro').length;
        
        
        this.contests = value.sort((a: { photos: string | any[]; },b: { photos: string | any[]; }) => b.photos.length - a.photos.length);
        
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      },
    });
  }
}
