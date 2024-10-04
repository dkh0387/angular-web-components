import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = 'bad8bf3d3c4a4eeca847e15e0015ac31';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
