import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  createTask() {
    console.log('Create task');
  }
}
