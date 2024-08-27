import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Task } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('https://my-json-server.typicode.com/FrancescoPandolfi/taskMan/tasks').pipe(delay(2000));
  }



}
