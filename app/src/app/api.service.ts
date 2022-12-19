import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { ITheme } from './shared/interfaces/theme';
import { IPost } from './shared/interfaces/post';
import { IContest } from './interfaces/contest';
import { IUser } from './shared/interfaces';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
  }

  loadTheme(id: number) {
    return this.httpClient.get<ITheme>(`${apiURL}/themes/${id}`);
  }

  loadContests(limit?: number) {
    const data = this.httpClient.get(`${apiURL}/contest/list`);
    return data;
  }

  loadContest(id: string) {
    return this.httpClient.get<IContest>(`${apiURL}/contest/detail/${id}`);
  }
  
  loadParticipantsInContest(id: string) {
    return this.httpClient.get<IContest>(`${apiURL}/contest/participants`);
  }

}
