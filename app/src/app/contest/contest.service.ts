import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContest } from '../interfaces/contest';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private http: HttpClient) { }

  getContests(maxCount?: number) {
    let url = '/api/contest';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<IContest[]>(url);
  }

  getContest(id: string) {
    return this.http.get<IContest>('/api/contest/' + id);
  }

  createContest(contestTitle: string, titleImg: string, category: string, prize: number, startDate: Date, endDate: Date) {    
    return this.http.post<IContest>('/api/contest/', { contestTitle, titleImg, category, prize, startDate, endDate });
  }

  addPhoto(id: string, contestImg: string) {        
    return this.http.post<IContest>('/api/contest/add-photo', { id, contestImg });
  }

  likePhoto(contestId: string, photoId: string) {    
    return this.http.put<IContest>('/api/contest/like', { contestId, photoId });
  }

  updateContest(id: string, name: string, text: string) {
    return this.http.put<IContest>('/api/contest/' + id, { contestName: name, postText: text });
  }

  deleteContestPost(contestId: string, postId: string) {
    return this.http.delete<IContest>('/api/contest/' + contestId + '/post' + postId);
  }
}
